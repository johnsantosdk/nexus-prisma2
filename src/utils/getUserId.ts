import { createContext } from '../context/context'
const jwt = require('jsonwebtoken')

export function getUserId (context: createContext) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    jwt.verify(token, process.env.JWT_SECRET)
  }

  throw new Error('Not allowed!')
}
