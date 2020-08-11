import { getUserId } from '.'

export async function getUser (context) {
  const userId = getUserId(context)
  console.log('userId no getUser: ', userId)
  const user = await context.prisma.user.findOne({
    select: {
      name: true,
      email: true,
      role: true
    },
    where: {
      id: userId
    }
  })

  return user
}
