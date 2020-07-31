"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = void 0;

var _schema = require("@nexus/schema");

const createUser = (0, _schema.extendType)({
  type: 'Mutation',

  definition(t) {
    // t.crud.createOneUser()
    t.field('createUser', {
      type: 'User',
      args: {
        name: (0, _schema.stringArg)(),
        email: (0, _schema.stringArg)()
      },
      resolve: (_, {
        name,
        email
      }, ctx) => {
        return ctx.prisma.user.create({
          data: {
            name,
            email
          }
        });
      }
    });
  }

});
exports.createUser = createUser;