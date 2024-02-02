import express from 'express'
import bcryt from 'bcrypt'
const router = express.Router()
import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    return res.status(400).json({ message: 'User already exists' })
  }
  const haspassword = await bcryt.hash(password, 10)
  const newUser = new User({
    username,
    email,
    password: haspassword,
  })
  await newUser.save()
  return res
    .status(200)
    .json({ status: true, message: 'User created successfully' })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({ status: false, message: 'User not found' })
  }
  const validPassword = await bcryt.compare(password, user.password)
  if(!validPassword){
    return res.status(400).json({ status: false, message: 'Invalid password' })
  }
  const token = jwt.sign({ username: user.username}, process.env.SECRET_KEY, { expiresIn: '1h' })
  res.cookie('token', token, { maxAge: 3600000, httpOnly: true })
  return res.json({ status: true, message: 'User logged in successfully' })
})

export { router as UserRouter }
