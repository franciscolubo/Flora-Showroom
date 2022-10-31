import express from 'express'
import route from './routes/clotheRoutes'
import connectDatabase from './database/db'
import cors from 'cors'
import 'dotenv/config'

import errorServerHandler from './middleware/errorServerHandler'
import errorClientHandler from './middleware/errorClientHandler'
import errorRouteHandler from './middleware/errorRouteHandler'

const server = express()
connectDatabase()

// Middlewares
server.use(express.json())
server.use(cors())

// Routes
server.use('/api/clothes', route)
server.use(errorServerHandler)
server.use(errorClientHandler)
server.use(errorRouteHandler)

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
