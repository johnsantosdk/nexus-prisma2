"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Phone = void 0;

var _schema = require("@nexus/schema");

const Phone = (0, _schema.objectType)({
  name: 'Phone',

  definition(t) {
    t.model.id();
    t.model.number();
    t.model.description();
    t.model.owner();
  }

});
exports.Phone = Phone;