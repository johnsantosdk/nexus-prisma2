// import { createContext } from '../context/context'
const jwt = require('jsonwebtoken')

export function getUserId (context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { user } = jwt.verify(token, process.env.JWT_SECRET)

    return user
  }

  throw new Error('Not allowed in get UserId!')
}
