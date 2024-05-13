import { Request, Response } from 'express'
import { PostsService } from '../services/posts'

export class PostsController {
  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params

      const post = await PostsService.getById(id)

      if (!post) {
        return res.status(404).json({ message: 'Post not found' })
      }

      res.json(post)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
