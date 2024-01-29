import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { MongoClient, ServerApiVersion } from 'mongodb'
import User from './models/newUser.js'

const app = express()
app.use(express.json()) //to handle json data
app.use(cors())
dotenv.config()

// const client = new MongoClient(process.env.URL, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// })

// async function run() {
//   await client.connect()
//   console.log('Connected correctly to MongoDB server')
// }
// run().catch(console.dir)

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

// app.listen(process.env.PORT)
// console.log(`Listening on port ${process.env.PORT}`)
app.post('/users', async (req, res) => {
  res.send('Hello World')
  const newUser = new User({
    name: 'Rocio',
    email: '1rocio@gmail.com',
    password: '1234',
  })
  const createUser = await newUser.save()
  res.json('all good')
})

// app.post("/register", async(req, res) => {
//   res.send('hello world')
//   const newUser = new User ({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   })
//   const newRegister = await newUser.save();
//   res.json(newRegister);
//   })

export default app
