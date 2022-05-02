const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/notesdb')

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function () {
    console.log("db connection successful!")
})

app.get('/', function (req, res) {
    res.send('hello first trial')
})

app.post('/note', function (req, res) {
    console.log('saved the note')
    const NoteSchema = new mongoose.Schema({
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
        },
    });

    const noteSc = mongoose.model("Note", NoteSchema)
    const note = new noteSc({ 'id': '1', 'title': 'note1' })
    note.save()
    res.send(note);
})

app.listen(3001, function () { console.log('listening to port 3001') })