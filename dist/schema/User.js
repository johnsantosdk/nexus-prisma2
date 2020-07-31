"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _schema = require("@nexus/schema");

const User = (0, _schema.objectType)({
  name: 'User',

  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.phone();
    t.model.role();
    t.model.posts({
      type: 'Post',
      pagination: false
    });
  }

});
exports.User = User;