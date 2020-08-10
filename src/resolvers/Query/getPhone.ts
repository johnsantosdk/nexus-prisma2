import { extendType, stringArg } from '@nexus/schema'
import { getUserId } from '../../utils'

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
        const phone = await ctx.prisma.phone.findOne({
          where: {
            number: number
          }
        })
        console.log(userId)
        return phone
      }
    })
  }
})
