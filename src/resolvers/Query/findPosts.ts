import { stringArg, extendType } from '@nexus/schema'

export const findPosts = extendType({
  type: 'Query',
  definition (t) {
    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: stringArg({ nullable: true })
      },
      resolve: (_, { searchString }, ctx) => {
        return ctx.prisma.post.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { content: { contains: searchString } }
            ]
          }
        })
      }
    })
  }
})
