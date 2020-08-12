import { schema } from './schema/schema'
import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'
import { permissions } from './permissions'

const server = new GraphQLServer({
  schema,
  middlewares: [permissions],
  context: req => ({
    ...req,
    prisma: new PrismaClient()
  })
})

server.start(() => console.log('🚀 Server is running on http://localhost:4000'))
