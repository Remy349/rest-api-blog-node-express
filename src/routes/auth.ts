import { Router } from 'express'
import { AuthController } from '../controllers/auth'

export const authRouter = Router()

authRouter.post('/login', AuthController.login)
