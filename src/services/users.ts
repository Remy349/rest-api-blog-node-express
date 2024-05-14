import { prisma } from '../lib/prisma'
import bcrypt from 'bcrypt'

export class UsersService {
  static async getById(id: string) {
    return await prisma.user.findFirst({
      where: { id }
    })
  }

  static async create(data: {
    username: string
    email: string
    password: string
  }) {
    const user = await prisma.user.findFirst({
      where: { email: data.email }
    })

    if (user) return true

    const passwordHash = await bcrypt.hash(data.password, 16)

    return await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: passwordHash
      }
    })
  }
}
