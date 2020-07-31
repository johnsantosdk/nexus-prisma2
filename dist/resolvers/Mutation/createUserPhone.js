"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserPhone = void 0;

var _schema = require("@nexus/schema");

var _schema2 = require("../../schema");

const userId = 2;
const createUserPhone = (0, _schema.extendType)({
  type: 'Mutation',

  definition(t) {
    t.field('createUserPhone', {
      type: _schema2.Phone,
      args: {
        number: (0, _schema.stringArg)(),
        description: (0, _schema.stringArg)()
      },
      resolve: async (_, {
        number,
        description
      }, ctx, info) => {
        const phone = await ctx.prisma.phone.create({
          data: {
            number,
            description,
            owner: {
              connect: {
                id: userId
              }
            }
          }
        });
        return phone;
      }
    });
  }

});
exports.createUserPhone = createUserPhone;