import express from 'express'
import route from './routes/clotheRoutes'
import connectDatabase from './database/db'
import cors from 'cors'
import 'dotenv/config'
import errorHandler from './middleware/errorHandler'
import errorServerHandler from './middleware/errorServerHandler'

const server = express()
connectDatabase()

// Middlewares
server.use(express.json())
server.use(cors())

// Routes
server.use('/api/clothes', route)
server.use(errorServerHandler)
server.use(errorHandler)

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
