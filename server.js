const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')

var configDB = require('./config/database.js');
var db

// MongoClient.connect('mongodb+srv://demo:demo@studentlist-h2k5x.mongodb.net/studentlist?retryWrites=true', (err, database) => {
//   if (err) return console.log(err)
//   db = database
//   app.listen(process.env.PORT || 3000, () => {
//     console.log('listening on 3000')
//   })
// })

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('studentlist').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {studentlist: result})
  })
})

app.post('/studentlist', (req, res) => {
  db.collection('messages').save({name: req.body.name}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})




-app.post('/messages', (req, res) => {
  -  db.collection('messages').save({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0}, (err, result) => {
  +app.post('/studentlist', (req, res) => {
  +  db.collection('messages').save({name: req.body.name}, (err, result) => {

// app.put('/messages', (req, res) => {
//   db.collection('messages')
//   .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
//     $set: {
//       thumbUp:req.body.thumbUp + 1
//     }
//   }, {
//     sort: {_id: -1},
//     upsert: true
//   }, (err, result) => {
//     if (err) return res.send(err)
//     res.send(result)
//   })
// })


// app.put('/messages/thumbDown', (req, res) => {
//   db.collection('messages')
//   .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
//     $set: {
//       thumbDown:req.body.thumbDown + 1
//     }
//   }, {
//     sort: {_id: -1},
//     upsert: true
//   }, (err, result) => {
//     if (err) return res.send(err)
//     res.send(result)
//   })
// })


// app.delete('/messages', (req, res) => {
//   db.collection('messages').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
//     if (err) return res.send(500, err)
//     res.send('Message deleted!')
//   })
// })