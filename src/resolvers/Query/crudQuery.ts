import { extendType } from '@nexus/schema'

export const crudQuery = extendType({
  type: 'Query',
  definition (t) {
    t.crud.phones()
    t.crud.users({
      alias: 'usersList',
      ordering: true,
      filtering: true
    })
  }
})
