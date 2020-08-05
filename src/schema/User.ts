import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition (t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.phone({ type: 'Phone' })
    t.model.role()
  }
})
