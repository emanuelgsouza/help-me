export default [
  {
    icon: 'home',
    label: 'Home',
    separator: true,
    requireAdmin: false,
    requireUser: false,
    to: {
      name: 'index'
    }
  },
  {
    icon: 'inbox',
    label: 'Problemas',
    separator: true,
    requireAdmin: false,
    requireUser: false,
    to: {
      name: 'dashboard.problems.list'
    }
  },
  {
    icon: 'inbox',
    label: 'Problemas Recentemente Criados',
    separator: true,
    requireAdmin: true,
    requireUser: true,
    to: {
      name: 'dashboard.problems.recently'
    }
  },
  {
    icon: 'add',
    label: 'Criar Problema',
    separator: true,
    requireAdmin: false,
    requireUser: false,
    to: {
      name: 'dashboard.problems.create'
    }
  },
  {
    icon: 'settings',
    label: 'Atualize seus dados',
    separator: true,
    requireAdmin: false,
    requireUser: true,
    to: {
      name: 'dashboard.user.settings'
    }
  }
]
