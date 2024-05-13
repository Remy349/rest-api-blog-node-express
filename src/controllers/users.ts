import { Request, Response } from 'express'
import { UsersService } from '../services/users'

export class UsersController {
  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params

      const user = await UsersService.getById(id)

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      res.json(user)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
