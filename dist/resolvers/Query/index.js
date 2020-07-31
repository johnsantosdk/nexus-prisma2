"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _findPosts = require("./findPosts");

Object.keys(_findPosts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _findPosts[key];
    }
  });
});

var _listPosts = require("./listPosts");

Object.keys(_listPosts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _listPosts[key];
    }
  });
});

var _crudQuery = require("./crudQuery");

Object.keys(_crudQuery).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _crudQuery[key];
    }
  });
});