import { Router } from 'express'

export const categoriesRouter = Router()

const CATEGORIES = [
  { id: 1, name: 'Test category name 1', createdAt: new Date() },
  { id: 2, name: 'Test category name 2', createdAt: new Date() },
  { id: 3, name: 'Test category name 3', createdAt: new Date() }
]

categoriesRouter.get('/', (req, res) => {
  res.json(CATEGORIES)
})

categoriesRouter.get('/:id', (req, res) => {
  const categoryId = req.params.id

  const category = CATEGORIES.find((item) => item.id === Number(categoryId))

  if (!category) {
    return res.status(404).json({ message: 'Category not found' })
  }

  res.json(category)
})

categoriesRouter.post('/', (req, res) => {
  const { name } = req.body

  const id = CATEGORIES.length + 1

  const newCategory = {
    id,
    name,
    createdAt: new Date()
  }

  CATEGORIES.push(newCategory)

  res.status(201).json({ message: 'Category successfully created' })
})

categoriesRouter.put('/:id', (req, res) => {
  const categoryId = req.params.id

  res.send(`Update category by ID: ${categoryId}`)
})

categoriesRouter.delete('/:id', (req, res) => {
  const categoryId = req.params.id

  const category = CATEGORIES.find((item) => item.id === Number(categoryId))

  if (!category) {
    return res.status(404).json({ message: 'Category not found' })
  }

  CATEGORIES.filter((item) => item.id !== category.id)

  res.json({ message: 'Category successfully deleted.' })
})
