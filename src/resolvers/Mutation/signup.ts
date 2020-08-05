import { extendType, stringArg } from '@nexus/schema'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const JWT_SECRET = process.env.JWT_SECRET
const TOKEN_EXPIRES = process.env.TOKEN_EXPIRES
const salt = bcrypt.genSaltSync(10)

export const signup = extendType({
  type: 'Mutation',
  definition (t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg({ nullable: false }),
        email: stringArg(),
        password: stringArg(),
        number: stringArg(),
        description: stringArg(),
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
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRES })

        return {
          token,
          user
        }
      }
    })
  }
})
