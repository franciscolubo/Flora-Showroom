import express from 'express'
import route from './routes'
import connectDatabase from './db'
import cors from 'cors'
import 'dotenv/config'

const server = express()
connectDatabase()

// Middlewares

server.use(express.json())
server.use(cors())

// Routes

server.use('/api/clothes', route)

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
