"use strict";

var _schema = require("./schema/schema");

var _context = require("./context/context");

const {
  GraphQLServer
} = require('graphql-yoga');

new GraphQLServer({
  schema: _schema.schema,
  context: _context.createContext
}).start(() => console.log('🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api'));