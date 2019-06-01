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
    icon: 'inbox',
    label: 'Todos os problemas',
    separator: true,
    requireAdmin: true,
    requireUser: true,
    to: {
      name: 'dashboard.problems.admin'
    }
  },
  {
    icon: 'person',
    label: 'Usuários',
    separator: true,
    requireAdmin: true,
    requireUser: true,
    to: {
      name: 'dashboard.user.list'
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
