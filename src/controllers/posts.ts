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

  static async create(req: Request, res: Response) {
    try {
      const data: {
        title: string
        content: string
        categoryId: string
        userId: string
      } = req.body

      const newPost = await PostsService.create(data)

      if (newPost === true) {
        return res.status(409).json({ message: 'Post already created' })
      }

      res.status(201).json(newPost)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params

      const deletedPost = await PostsService.delete(id)

      if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' })
      }

      res.json({ message: 'Post successfully deleted' })
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
