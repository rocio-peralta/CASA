import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const userShcema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  password: String,
})

const userModel = mongoose.model('signup', userShcema)

export default userModel
