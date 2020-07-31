"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listPosts = void 0;

var _schema = require("@nexus/schema");

const listPosts = (0, _schema.extendType)({
  type: 'Query',

  definition(t) {
    t.list.field('feed', {
      type: 'Post',
      resolve: (_parent, _args, ctx) => {
        return ctx.prisma.post.findMany({
          where: {
            published: true
          }
        });
      }
    });
  }

});
exports.listPosts = listPosts;