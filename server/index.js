import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import User from './models/newUser.js'

const app = express()
app.use(express.json()) //to handle json data
app.use(cors())
dotenv.config()

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log('Database connected successfully')
    app.listen(process.env.PORT || 5000)
    console.log(`Listening on port ${process.env.PORT}`)
  })
  .catch((error) => {
    console.error('Database connection error:', error)
  })

app.post('/signup', async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  const newRegister = await newUser.save()
  res.json(newRegister)
})

export default app
