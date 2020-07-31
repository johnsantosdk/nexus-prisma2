"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPosts = void 0;

var _schema = require("@nexus/schema");

const findPosts = (0, _schema.extendType)({
  type: 'Query',

  definition(t) {
    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: (0, _schema.stringArg)({
          nullable: true
        })
      },
      resolve: (_, {
        searchString
      }, ctx) => {
        return ctx.prisma.post.findMany({
          where: {
            OR: [{
              title: {
                contains: searchString
              }
            }, {
              content: {
                contains: searchString
              }
            }]
          }
        });
      }
    });
  }

});
exports.findPosts = findPosts;