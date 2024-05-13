import { Request, Response } from 'express'
import { CategoriesService } from '../services/categories'

export class CategoriesController {
  static async getAll(_req: Request, res: Response) {
    try {
      const categories = await CategoriesService.getAll()

      res.json(categories)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params

      const category = await CategoriesService.getById(id)

      if (!category) {
        return res.status(404).json({ message: 'Category not found' })
      }

      res.json(category)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const data: { name: string } = req.body

      const newCategory = await CategoriesService.create(data)

      if (newCategory === true) {
        return res.status(409).json({ message: 'Category already created' })
      }

      res.status(201).json(newCategory)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params

      const data: { name: string } = req.body

      const updatedCategory = await CategoriesService.update(id, data)

      if (updatedCategory === true) {
        return res.status(409).json({ message: 'Category already created' })
      }

      res.json(updatedCategory)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params

      const deletedCategory = await CategoriesService.delete(id)

      if (!deletedCategory) {
        return res.status(404).json({ message: 'Category not found' })
      }

      res.json({ message: 'Category successfully deleted' })
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
