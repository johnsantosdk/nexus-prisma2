import { extendType, stringArg } from '@nexus/schema'

export const createUserWithPhone = extendType({
  type: 'Mutation',
  definition(t) {
    // t.crud.createOneUser()

    t.field('createUserWithPhone', {
      type: 'User',
      args: {
        name: stringArg(),
        email: stringArg(),
        number: stringArg(),
        description: stringArg()
      },
      resolve: async (_, { name, email, number, description }, ctx) => {
        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
          }
        })
        console.log(user)
        const phone = await ctx.prisma.phone.create({
          data: {
            number,
            description,
            owner: { connect: {id: user.id} },
          }
        })
        return user
      },
    })
  }
})