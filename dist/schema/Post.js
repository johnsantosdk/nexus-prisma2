"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;

var _schema = require("@nexus/schema");

const Post = (0, _schema.objectType)({
  name: 'Post',

  definition(t) {
    t.model.id();
    t.model.title();
    t.model.content();
    t.model.published();
    t.model.author();
  }

});
exports.Post = Post;