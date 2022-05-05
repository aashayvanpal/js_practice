const express = require('express')
const mongoose = require('mongoose')
const notesRouter = require('./routers/notes')

const url = 'mongodb://localhost/notesdb'
const app = express()


mongoose.connect(url)

const con = mongoose.connection
con.on('open', () => {
    console.log('connection success')
})

app.use(express.json())
app.get('/', (req, res) => {
    console.log('inside /notes')
    res.send('home url first')
})

app.use('/', notesRouter)


app.listen(3001, function () {
    console.log('listening to port 3001')
})