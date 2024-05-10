import { Router } from 'express'
import { CategoriesController } from '../controllers/categories.js'

export const categoriesRouter = Router()

categoriesRouter.get('/', CategoriesController.getAll)

categoriesRouter.get('/:id', CategoriesController.getById)

categoriesRouter.post('/', CategoriesController.create)

categoriesRouter.delete('/:id', CategoriesController.delete)
