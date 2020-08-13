const { allow, shield, not, and, or } = require('graphql-shield')

const { isAuthenticated, isAdmin } = require('./rules/is-authenticated')

export const permissions = shield({
  Query: {
    getPhone: and(isAuthenticated, or(isAdmin)), // Se estiver autenticado e for Admin poderá fazer consulta nesta query
    usersList: isAuthenticated // Acesso somente SEM autorização
  },
  Mutation: {
    '*': isAuthenticated,
    login: allow, // depois de testes not(isAdmin, and(...))
    signup: allow
  }
})
