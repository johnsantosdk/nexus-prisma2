import { objectType } from '@nexus/schema'

export const Phone = objectType({
  name: 'Phone',
  definition(t) {
    t.model.id()
    t.model.number()
    t.model.description()
    t.model.owner()
  },
})