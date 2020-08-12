import { getUserId } from '../../utils'

const { rule } = require('graphql-shield')

export const isAuthenticated = rule({ cache: 'contextual' })((parent, args, ctx) => {
  return Boolean(getUserId(ctx))
})
