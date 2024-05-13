import 'dotenv/config'

import express from 'express'
import morgan from 'morgan'

import { usersRouter } from './routes/users'
import { categoriesRouter } from './routes/categories'
import { postsRouter } from './routes/posts'

const app = express()

const PORT = 3000

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/posts', postsRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
