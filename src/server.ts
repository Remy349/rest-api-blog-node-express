import 'dotenv/config'

import app from './app'

const PORT = (process.env.PORT || 3000) as number

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
