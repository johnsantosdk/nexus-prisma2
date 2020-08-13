import { getUserId, getRole } from '../../utils'

const { rule } = require('graphql-shield')

export const isAuthenticated = rule({ cache: 'contextual' })((_, args, ctx) => {
  return Boolean(getUserId(ctx))
})

export const isAdmin = rule({ cache: 'contextual' })(
  async (_, args, ctx, info) => {
    const role = getRole(ctx.request.headers.authorization)

    return Boolean(role === 'ADMIN')
  }
)
