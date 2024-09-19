const mongoose = require('mongoose')
const mongoURL = 'mongodb://localhost:27017'
mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})
const db = mongoose.connection

//event listeners
db.on('connected', () => {
    console.log('Connected to MongoDB')
})
db.on('error', (err) =>{
    console.log(`${err}: Unable to connect to mongodb`)
})
db.on('disconnected', () =>{
    console.log('Disconnected from MongoDB')
})
module.exports = db