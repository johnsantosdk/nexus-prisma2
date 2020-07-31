"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudMutation = void 0;

var _schema = require("@nexus/schema");

const crudMutation = (0, _schema.extendType)({
  type: 'Mutation',

  definition(t) {
    t.crud.deleteOneUser();
  }

});
exports.crudMutation = crudMutation;