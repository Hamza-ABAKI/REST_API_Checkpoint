const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: false,
  },
})
const User = model('User', userSchema)

module.exports = User
