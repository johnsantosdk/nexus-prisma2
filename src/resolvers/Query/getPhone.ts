import { extendType, stringArg } from '@nexus/schema'
import { getUserId, getUser } from '../../utils'
import { isAuthenticated } from '../../permissions/rules'

export const getPhone = extendType({
  type: 'Query',
  definition (t) {
    t.field('getPhone', {
      type: 'Phone',
      args: {
        number: stringArg({
          nullable: false
        })
      },
      resolve: async (_, { number }, ctx, info) => {
        const userId = getUserId(ctx)
        console.log(isAuthenticated)
        const phone = await ctx.prisma.phone.findOne({
          where: {
            number: number
          }
        })
        console.log(getUser(ctx))
        console.log(userId)
        return phone
      }
    })
  }
})
