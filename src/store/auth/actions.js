import { getUser as getDataUser } from 'src/services/firebase/database'
import { logout } from 'src/services/firebase/auth'
import * as TYPES from './mutation-types'

export const loadUser = ({ commit }, userUid) => {
  commit(TYPES.SET_USER_LOADING)
  return getDataUser(userUid)
    .then(user => {
      commit(TYPES.SET_USER, user)
      commit(TYPES.CLEAR_USER_LOADING)
      commit(TYPES.CLEAR_ERROR)
    }).catch(error => {
      const errorMessage = error.message
      commit(TYPES.CLEAR_USER_LOADING)
      commit(TYPES.SET_ERROR, true)
      commit(TYPES.SET_ERROR_MESSAGE, errorMessage)
    })
}

export const logoutUser = ({ commit }) => {
  return logout()
    .then(() => {
      commit(TYPES.CLEAR_USER)
      return Promise.resolve()
    })
}
