import { extendType } from '@nexus/schema'

export const crudMutation = extendType({
  type: 'Mutation',
  definition (t) {
    t.crud.deleteOneUser()
  }
})
