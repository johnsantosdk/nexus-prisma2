import { extendType, stringArg } from '@nexus/schema'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET
const TOKEN_EXPIRES = process.env.TOKEN_EXPIRES
export const login = extendType({
  type: 'Mutation',
  definition (t) {
    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg(),
        password: stringArg()
      },
      resolve: async (_, { email, password }, ctx, info) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            email
          }
        })
        if (!user) {
          throw new Error('Invalid credentials!')
        }

        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
          throw new Error('Invalid credentials!')
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRES })

        return {
          token,
          user
        }
      }
    })
  }
})
