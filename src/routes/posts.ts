import { Router } from 'express'
import { PostsController } from '../controllers/posts'

export const postsRouter = Router()

postsRouter.get('/:id', PostsController.getById)
