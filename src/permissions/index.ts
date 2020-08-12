const { allow, shield } = require('graphql-shield')

const { isAuthenticated } = require('./rules/is-authenticated')

export const permissions = shield({
  Query: {
    '*': isAuthenticated
  },
  Mutation: {
    '*': isAuthenticated,
    login: allow,
    signup: allow
  }
})
