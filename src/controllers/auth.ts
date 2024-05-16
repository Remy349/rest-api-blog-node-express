import { Request, Response } from 'express'
import { AuthService } from '../services/auth'

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const data: { email: string; password: string } = req.body

      const response = await AuthService.login(data)

      if (response === false) {
        return res.status(403).json({ message: 'Invalid credentials' })
      }

      res.json(response)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
