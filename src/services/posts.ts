import { prisma } from '../lib/prisma'

export class PostsService {
  static async getById(id: string) {
    return await prisma.post.findFirst({
      where: { id }
    })
  }

  static async create(data: {
    title: string
    content: string
    categoryId: string
    userId: string
  }) {
    const post = await prisma.post.findFirst({
      where: { title: data.title }
    })

    if (post) return true

    return await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        categoryId: data.categoryId,
        userId: data.userId
      }
    })
  }

  static async delete(id: string) {
    const post = await prisma.post.findFirst({
      where: { id }
    })

    if (!post) return false

    await prisma.post.delete({
      where: { id: post.id }
    })

    return true
  }
}
