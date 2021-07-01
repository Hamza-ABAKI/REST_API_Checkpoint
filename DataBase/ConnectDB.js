const mongoose = require('mongoose')
require('dotenv').config({ path: './config/.env' })

const connectDB = () => {
  mongoose
    .connect(process.env.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connection to Data Base succeeded'))
    .catch(() => console.log('Fail to connect to Data Base'))
}

module.exports = connectDB
