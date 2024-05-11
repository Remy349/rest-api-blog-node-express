import 'dotenv/config'

import express from 'express'
import morgan from 'morgan'
import { categoriesRouter } from './routes/categories'

const app = express()

const PORT = 3000

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/categories', categoriesRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
