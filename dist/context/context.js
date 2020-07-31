"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = createContext;

var _client = require("@prisma/client");

const prisma = new _client.PrismaClient();

function createContext() {
  return {
    prisma
  };
}