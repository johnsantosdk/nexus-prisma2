import { intArg, makeSchema, objectType, stringArg } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { User, Post, Phone } from '.'
import { findPosts, listPosts } from '../resolvers/Query'
import { createUser, createUserPhone, createUserWithPhone } from '../resolvers/Mutation'
// const {  path } = require('path') 


export const schema = makeSchema({
  types: [
    Post,
    User,
    Phone,
    listPosts,
    findPosts,
    createUser,
    createUserPhone,
    createUserWithPhone
  ],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '../../generated/schema.gen.graphql', //path.join(__dirname, '../../generated/schema.gen.graphql')
    typegen: __dirname + '../../generated/nexus.gen.ts',      //path.join(__dirname, '../../generated/nexus.gen.ts')
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('../context/context'),
        alias: 'Context',
      },
    ],
  },
})