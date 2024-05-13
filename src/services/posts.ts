import { prisma } from '../lib/prisma'

export class PostsService {
  static async getById(id: string) {
    return prisma.post.findFirst({
      where: { id }
    })
  }
}