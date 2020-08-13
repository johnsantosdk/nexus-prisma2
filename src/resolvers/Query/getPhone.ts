import { extendType, stringArg } from '@nexus/schema'

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
        const phone = await ctx.prisma.phone.findOne({
          where: {
            number: number
          }
        })
        return phone
      }
    })
  }
})
