import { extendType, stringArg } from '@nexus/schema'

export const createUser = extendType({
  type: 'Mutation',
  definition(t) {
    // t.crud.createOneUser()

    t.field('createUser', {
      type: 'User',
      args: {
        name: stringArg(),
        email: stringArg(),
      },
      resolve: (_, { name, email }, ctx) => {
        return ctx.prisma.user.create({
          data: {
            name,
            email
          }
        })
      }
    })
  }
})