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
    const isAlreadyCreated = await prisma.category.findFirst({
      where: { name: data.name }
    })

    if (isAlreadyCreated) return true

    return await prisma.category.create({
      data: { name: data.name }
    })
  }

  static async update(id: string, data: { name: string }) {
    const category = await prisma.category.findFirst({
      where: { id }
    })

    if (category?.name !== data.name) {
      const isAlreadyCreated = await prisma.category.findFirst({
        where: { name: data.name }
      })

      if (isAlreadyCreated) return true
    }

    return await prisma.category.update({
      where: { id },
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
