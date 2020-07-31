"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = void 0;

var _schema = require("@nexus/schema");

var _nexusPrisma = require("nexus-prisma");

var _ = require(".");

var _Query = require("../resolvers/Query");

var _Mutation = require("../resolvers/Mutation");

// Queries
// Mutations
const schema = (0, _schema.makeSchema)({
  types: [_.Post, _.User, _.Phone, _Query.listPosts, _Query.findPosts, _Mutation.createUser, _Mutation.createUserPhone, _Mutation.createUserWithPhone, _Query.crudQuery, _Mutation.crudMutation],
  plugins: [(0, _nexusPrisma.nexusPrismaPlugin)()],
  outputs: {
    schema: __dirname + '../../generated/schema.gen.graphql',
    // path.join(__dirname, '../../generated/schema.gen.graphql')
    typegen: __dirname + '../../generated/nexus.gen.ts' // path.join(__dirname, '../../generated/nexus.gen.ts')

  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [{
      source: '@prisma/client',
      alias: 'prisma'
    }, {
      source: require.resolve("../context/context"),
      alias: 'Context'
    }]
  }
});
exports.schema = schema;