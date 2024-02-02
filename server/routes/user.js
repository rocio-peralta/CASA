import express from 'express'
import bcryt from 'bcrypt'
const router = express.Router()
import { User } from '../models/User.js'

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    return res.json({ message: 'User already exists' })
  }
  const haspassword = await bcryt.hash(password, 10)
  const newUser = new User({
    username,
    email,
    password: haspassword,
  })
  await newUser.save()
  return res.json({ message: 'User created successfully' })
})

export { router as UserRouter }
