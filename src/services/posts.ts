import { prisma } from '../lib/prisma'

export class PostsService {
  static async getById(id: string) {
    return await prisma.post.findFirst({
      where: { id }
    })
  }
  
  static async create() {}
}
