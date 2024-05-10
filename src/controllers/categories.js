import { CategoriesModel } from '../models/local/categories.js'

export class CategoriesController {
  static async getAll(_req, res) {
    const categories = await CategoriesModel.getAll()

    return res.json(categories)
  }

  static async getById(req, res) {
    const { id } = req.params

    const category = await CategoriesModel.getById(id)

    if (!category) {
      return res.status(404).json({ message: 'Category not found' })
    }

    return res.json(category)
  }

  static async create(req, res) {
    const data = req.body

    const newCategory = await CategoriesModel.create(data)

    return res.status(201).json(newCategory)
  }

  static async delete(req, res) {
    const { id } = req.params

    const result = await CategoriesModel.delete(id)

    if (result === false) {
      return res.status(404).json({ message: 'Category not found' })
    }

    return res.json({ message: 'Category successfully deleted' })
  }
}
