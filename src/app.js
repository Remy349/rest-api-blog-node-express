import express from 'express'
import morgan from 'morgan'
import { categoriesRouter } from './routes/categories.js'

const app = express()

const PORT = 3000 || process.env.PORT

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/categories', categoriesRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
