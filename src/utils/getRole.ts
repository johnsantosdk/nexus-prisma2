const jwt = require('jsonwebtoken')

export function getRole (auth: String) {
  if (auth) {
    const token = auth.replace('Bearer ', '')
    const { user } = jwt.verify(token, process.env.JWT_SECRET)

    return user.role
  }

  throw new Error('Not allowed! ')
}
