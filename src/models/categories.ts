import { prisma } from '../lib/prisma'

export class CategoriesModel {
  static async getAll() {
    return await prisma.category.findMany()
  }

  static async getById(id: string) {
    return await prisma.category.findFirst({
      where: { id }
    })
  }

  static async create(data: { name: string }) {
    return await prisma.category.create({
      data: { name: data.name }
    })
  }

  static async delete(id: string) {
    const category = await prisma.category.findFirst({
      where: { id }
    })

    if (!category) return false

    await prisma.category.delete({
      where: { id: category.id }
    })

    return true
  }
}
