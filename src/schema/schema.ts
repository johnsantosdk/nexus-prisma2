import { makeSchema } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { User, Phone, AuthPayload } from '.'
import { crudQuery, getPhone } from '../resolvers/Query'// Queries
import { createUser, createUserPhone, createUserWithPhone, crudMutation, signup, login } from '../resolvers/Mutation' // Mutations

export const schema = makeSchema({
  types: [
    User,
    Phone,
    AuthPayload,
    createUser,
    createUserPhone,
    createUserWithPhone,
    crudMutation,
    crudQuery,
    getPhone,
    signup,
    login
  ],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '../../generated/schema.gen.graphql', // path.join(__dirname, '../../generated/schema.gen.graphql')
    typegen: __dirname + '../../generated/nexus.gen.ts' // path.join(__dirname, '../../generated/nexus.gen.ts')
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma'
      },
      {
        source: require.resolve('../context/context'),
        alias: 'Context'
      }
    ]
  }
})
