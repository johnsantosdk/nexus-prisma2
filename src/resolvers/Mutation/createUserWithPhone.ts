import { extendType, stringArg } from '@nexus/schema'
require('dotenv').config()
const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10)

export const createUserWithPhone = extendType({
  type: 'Mutation',
  definition (t) {
    // t.crud.createOneUser()

    t.field('createUserWithPhone', {
      type: 'User',
      args: {
        name: stringArg({ nullable: false }),
        email: stringArg(),
        password: stringArg(),
        number: stringArg(),
        description: stringArg({ nullable: false }),
        role: stringArg()
      },
      resolve: async (_, args, ctx) => {
        const user = await ctx.prisma.user.create({
          data: {
            name: args.name,
            email: args.email,
            role: args.role,
            password: bcrypt.hashSync(args.password, salt),
            phone: {
              create: {
                number: args.number,
                description: args.description
              }
            }
          }
        })
        return user
      }
    })
  }
})
