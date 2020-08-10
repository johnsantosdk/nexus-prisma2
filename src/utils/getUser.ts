import { ContextParameters } from 'graphql-yoga/dist/types'

export function getUser (ctx: ContextParameters) {
  const auth = ctx.request.headers
  console.log(auth)
  // if (users[auth]) {
  //   return users[auth]
  // } else {
  //   return null
  // }
}
