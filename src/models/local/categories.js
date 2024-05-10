const CATEGORIES = [
  { id: 1, name: 'Test category name 1', createdAt: new Date() },
  { id: 2, name: 'Test category name 2', createdAt: new Date() },
  { id: 3, name: 'Test category name 3', createdAt: new Date() }
]

export class CategoriesModel {
  static async getAll() {
    return CATEGORIES
  }

  static async getById(id) {
    const category = CATEGORIES.find((category) => category.id === Number(id))

    return category
  }

  static async create(data) {
    const id = CATEGORIES.length + 1

    const newCategory = {
      id,
      createdAt: new Date(),
      ...data
    }

    CATEGORIES.push(newCategory)

    return newCategory
  }

  static async delete(id) {
    const categoryIndex = CATEGORIES.findIndex(
      (category) => category.id === Number(id)
    )

    if (categoryIndex === -1) return false

    CATEGORIES.splice(categoryIndex, 1)

    return true
  }
}
