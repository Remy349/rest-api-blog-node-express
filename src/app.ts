import express from 'express'
import morgan from 'morgan'

import { usersRouter } from './routes/users'
import { categoriesRouter } from './routes/categories'
import { postsRouter } from './routes/posts'
import { authRouter } from './routes/auth'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/posts', postsRouter)

export default app
