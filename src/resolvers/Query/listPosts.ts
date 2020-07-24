import { queryType, queryField, extendType } from '@nexus/schema'

export const listPosts = extendType({
  type: 'Query',
  definition(t) {
      t.list.field('feed', {
        type: 'Post',
        resolve: (_parent, _args, ctx) => {
          return ctx.prisma.post.findMany({
            where: { published: true },
          })
        },
      })
    }
}) 