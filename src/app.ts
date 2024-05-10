import express from 'express'
import morgan from 'morgan'

const app = express()

const PORT = 3000 || process.env.PORT

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (_req, res) => {
  return res.json({ message: 'OK' })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
