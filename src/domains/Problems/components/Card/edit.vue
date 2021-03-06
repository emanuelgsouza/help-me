<template>
  <AppModal
    ref="modal"
    size="medium"
    actions-align="right"
    @hide="fill"
    @show="fill"
  >
    <div slot="title">
      <div class="text-h6"> Editar problema </div>
    </div>

    <div>
      <QForm class="q-gutter-md">
        <QInput
          filled
          label="Descreva seu problema: "
          type="textarea"
          v-model="model.description" />

        <QInput
          filled
          label="Você gostaria de deixar alguma solução?"
          type="textarea"
          v-model="model.suggestion" />
      </QForm>
    </div>

    <div slot="actions">
      <QBtn
        label="Confirmar"
        color="primary"
        :disable="isEqualData"
        @click="onSave" />
      <QBtn
        flat
        label="Cancelar"
        color="negative"
        @click="close" />

      <AppLoading :loading="loading" />
    </div>
  </AppModal>
</template>

<script>
import { get, isEqual } from 'lodash'
import { QForm, QInput } from 'quasar'
import AppModal from 'src/components/Modal'
import AppLoading from 'src/components/Loading'
import modalMixin from 'src/support/mixins/modal'
import { editProblem } from 'src/services/firebase/database'
import { PROBLEM_STATUS_CONSTANTS } from 'src/domains/ProblemStatus/constants'
import injectUser from 'src/domains/User/mixins/inject-user'

export default {
  name: 'EditProblemModal',
  mixins: [ modalMixin, injectUser ],
  components: { AppModal, QForm, QInput, AppLoading },
  props: {
    problem: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    loading: false,
    model: {
      description: null,
      suggestion: null
    },
    options: [
      { label: 'Sim', value: true },
      { label: 'Não', value: false }
    ]
  }),
  computed: {
    isEqualData () {
      return isEqual(this.model, {
        description: get(this.problem, 'description', ''),
        suggestion: get(this.problem, 'suggestion', '')
      })
    },
    isRecentlyProblem () {
      return !this.problem.approved
    }
  },
  methods: {
    fill () {
      this.model.description = get(this.problem, 'description', '')
      this.model.suggestion = get(this.problem, 'suggestion', '')
    },
    factoryModel () {
      const model = {
        ...this.model
      }

      if (this.isRecentlyProblem && this.model.approved) {
        model['problem_status'] = PROBLEM_STATUS_CONSTANTS.PENDING
      }

      return model
    },
    onSave () {
      this.loading = true
      const { uid } = this.problem

      return editProblem(uid, this.factoryModel(this.model))
        .then(() => {
          this.loading = false
          this.$q.notify({
            message: 'Problema atualizado com sucesso',
            color: 'positive'
          })

          this.close()
        })
        .catch(err => {
          this.loading = false
          console.error(err.message)
          this.$q.notify({
            message: 'Houve algum problema na atualização do problema',
            color: 'negative'
          })
        })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.fill()
    })
  }
}
</script>

<style>

</style>
