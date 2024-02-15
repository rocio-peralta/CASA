import express from 'express'
// import bcryt from 'bcrypt'
const router = express.Router()
import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'
//  

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    return res.status(400).json({ message: 'User already exists' })
  }
  // const haspassword = await bcryt.hash(password, 10)
  const newUser = new User({
    username,
    email,
    password,
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
  // const validPassword = await bcryt.compare(password, user.password)
  if (!password === user.password) {
    return res.status(400).json({ status: false, message: 'Invalid password' })
  }
  const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  })
  res.cookie('token', token, { maxAge: 3600000, httpOnly: true })
  return res.json({ status: true, message: 'User logged in successfully' })
})

// router.post('/forgot-password', async (req, res) => {
//   const { email } = req.body
//   try {
//     const user = await User.findOne({ email })
//     if (!user) {
//       return res
//         .status(400)
//         .json({ status: false, message: 'User not registered' })
//     }
//     const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
//       expiresIn: '15m',
//     })

//     var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: '1rocioperalta@gmail.com',
//         pass: 'dvwa fdkb xnwu rfri',
//       },
//     })

//     var mailOptions = {
//       from: '1rocioperalta@gmail.com',
//       to: email,
//       subject: 'CASA -  Reset your password',
//       text: `http://localhost:5173/resetPassword/${token}`,
//     }

//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         return res
//           .status(400)
//           .json({ status: false, message: 'Error sending email' })
//       } else {
//         return res.status(200).json({ status: true, message: 'Email sent' })
//       }
//     })
//   } catch (err) {
//     console.log(err.message)
//   }
// })

// router.post('/reset-password/:token', async (req, res) => {
//   const { token } = req.params // Access the token property from req.params
//   const { password } = req.body
//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY)
//     const id = decoded.id
//     // const haspassword = await bcryt.hash(password, 10)
//     await User.findByIdAndUpdate({ _id: id }, { password })
//     return res
//       .status(200)
//       .json({ status: true, message: 'Password reset successfully' })
//   } catch (error) {
//     console.log('Error from server ' + error.message)
//     return res.status(400).json({ status: false, message: 'Invalid token' })
//   }
// })

const verifyUser = (req, res, next) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false, message: 'Access denied' })
    }
    const verified = jwt.verify(token, process.env.SECRET_KEY)
    req.userName = verified.username
    // console.log('Verified user: ' + req.userName);
    next()
  } catch (error) {
    return res.status(400).json({ status: false, message: 'Invalid token' })
  }
}
router.get('/verify', verifyUser, async (req, res) => {
  try {
    const user = req.userName
    return res.json({
      status: true,
      message: 'User verified',
      name: user,
    })
  } catch (error) {
    return res.status(500).json({ status: false, message: 'An error occurred' })
  }
})

router.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({ status: true, message: 'User logged out' })
})

export { router as UserRouter }
