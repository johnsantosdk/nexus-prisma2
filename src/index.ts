import { schema } from './schema/schema'
import { createContext } from './context/context'
import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'

const server = new GraphQLServer({
  schema,
  // context: createContext
  context: req => ({
    ...req,
    prisma: new PrismaClient()
  })
})

server.start(() => console.log('🚀 Server is running on http://localhost:4000'))
