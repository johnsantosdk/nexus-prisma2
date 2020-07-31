"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudQuery = void 0;

var _schema = require("@nexus/schema");

const crudQuery = (0, _schema.extendType)({
  type: 'Query',

  definition(t) {
    t.crud.phones();
    t.crud.users({
      alias: 'usersList',
      ordering: true,
      filtering: true
    });
  }

});
exports.crudQuery = crudQuery;