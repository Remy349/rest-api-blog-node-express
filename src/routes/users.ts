import { Router } from 'express'
import { UsersController } from '../controllers/users'

export const usersRouter = Router()

usersRouter.get('/:id', UsersController.getById)
