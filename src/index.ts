const { GraphQLServer } = require('graphql-yoga')
import { schema } from './schema/schema'
import { createContext } from './context/context'

new GraphQLServer({
  schema,
  context: createContext
}).start(() =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api`,
  ),
)