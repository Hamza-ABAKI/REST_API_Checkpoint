// const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const Users = require('./models/User')
const connectDB = require('./DataBase/ConnectDB')
app.use(express.json())
connectDB()

/*****************************Create Users****************************/

// app.post('/api/users', (req, res) => {
//   Users.create(req.body)

//     .then(res.send('Users added successfully'))
//     .catch((err) => res.send('Somthing went wrong when added users', err))
// })

/******************GET :  RETURN ALL USERS****************************/

// app.get('/api/users', async (req, res) => {
//   await Users.find()
//     .then((data) => res.json(data))
//     .catch((err) => console.log('Failed to get Users', err))
// })

/**************POST :  ADD A NEW USER TO THE DATABASE *****************/

// app.post('/api/users', (req, res) => {
//   new Users(req.body)
//     .save()
//     .then(() => res.send('Add new user succeeded'))
//     .catch((err) => console.log('Failed to add new user', err))
// })

/*********************PUT : EDIT A USER BY ID ***********************/

// app.put('/api/users/:id', (req, res) => {
//   Users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//     .then((data) => res.json(data))
//     .catch((err) => console.log('Update failed', err))
// })

/*********************DELETE : REMOVE A USER BY ID  ***********************/

// app.delete('/api/users/:id', (req, res) => {
//   Users.findByIdAndRemove(req.params.id, (err) => {
//     err ? res.send('Deletion failed', err) : res.send('Deletion succeeded')
//   })
// })

/****************************Server creation*******************************/

app.listen(port, (err) => {
  err
    ? console.log('OUPS!!! Somthing went wrong', err)
    : console.log(`Listening on port: ${port}`)
})
