import { extendType, stringArg } from '@nexus/schema'
import { Phone } from '../../schema'

const userId = 2

export const createUserPhone = extendType({
  type: 'Mutation',
  definition (t) {
    t.field('createUserPhone', {
      type: Phone,
      args: {
        number: stringArg(),
        description: stringArg()
      },
      resolve: async (_, { number, description }, ctx, info) => {
        const phone = await ctx.prisma.phone.create({
          data: {
            number,
            description,
            owner: { connect: { id: userId } }
          }
        })
        return phone
      }
    })
  }
})
