import { Request, Response } from 'express'

export class CategoriesController {
  static async getAll(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async getById(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async create(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async update(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async delete(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
