import { objectType } from '@nexus/schema'

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition (t) {
    t.string('token', { description: 'Util Payload' })
    t.field('user', { type: 'User' })
  }
})
