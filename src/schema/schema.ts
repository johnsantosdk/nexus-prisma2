import { makeSchema } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { User, Post, Phone } from '.'
import { findPosts, listPosts, crudQuery } from '../resolvers/Query'// Queries
import { createUser, createUserPhone, createUserWithPhone, crudMutation } from '../resolvers/Mutation' // Mutations

export const schema = makeSchema({
  types: [
    Post,
    User,
    Phone,
    listPosts,
    findPosts,
    createUser,
    createUserPhone,
    createUserWithPhone,
    crudQuery,
    crudMutation
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
