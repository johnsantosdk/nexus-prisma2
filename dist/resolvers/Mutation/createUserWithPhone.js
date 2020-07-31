"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserWithPhone = void 0;

var _schema = require("@nexus/schema");

const createUserWithPhone = (0, _schema.extendType)({
  type: 'Mutation',

  definition(t) {
    // t.crud.createOneUser()
    t.field('createUserWithPhone', {
      type: 'User',
      args: {
        name: (0, _schema.stringArg)({
          nullable: false
        }),
        email: (0, _schema.stringArg)(),
        role: (0, _schema.stringArg)(),
        number: (0, _schema.stringArg)(),
        description: (0, _schema.stringArg)()
      },
      resolve: async (_, {
        name,
        email,
        number,
        description,
        role
      }, ctx) => {
        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
            role
          }
        });
        console.log(user);
        const phone = await ctx.prisma.phone.create({
          data: {
            number,
            description,
            owner: {
              connect: {
                id: user.id
              }
            }
          }
        });
        return user;
      }
    });
  }

});
exports.createUserWithPhone = createUserWithPhone;