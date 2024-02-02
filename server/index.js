import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { UserRouter } from './routes/user.js'

const app = express()
app.use(express.json()) //to handle json data
app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 204 }))
app.use('/auth', UserRouter)
dotenv.config()

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log('Database connected successfully')
    app.listen(process.env.PORT)
    console.log(`Listening on port ${process.env.PORT}`)
  })
  .catch((error) => {
    console.error('Database connection error:', error)
  })

export default app
