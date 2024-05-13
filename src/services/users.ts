import { prisma } from '../lib/prisma'

export class UsersService {
  static async getById(id: string) {
    return await prisma.user.findFirst({
      where: { id }
    })
  }
}
