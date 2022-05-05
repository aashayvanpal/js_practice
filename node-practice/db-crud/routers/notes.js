const express = require('express')
const router = express.Router()
const Note = require('../modules/Note')

// router.get('/', (req, res) => {
//     console.log('inside /notes')
//     res.send('home url second')
// })

router.get('/notes', async (req, res) => {
    // console.log('inside /notes')
    try {
        const notes = await Note.find()
        res.json(notes)

    } catch (err) {
        res.json({ 'error': err })
    }
    // res.send('all notes here')
})

router.get('/notes/:id', async (req, res) => {
    // console.log('inside /notes')
    try {
        const notes = await Note.findById(req.params.id)
        res.json(notes)

    } catch (err) {
        res.json({ 'error': err })
    }
    // res.send('all notes here')
})

router.patch('/notes/:id', async (req, res) => {
    // console.log('inside /notes')
    try {
        const notes = await Note.findById(req.params.id)
        notes.title = req.body.title
        const a1 = await notes.save()
        res.json(a1)

    } catch (err) {
        res.json({ 'error': err })
    }
    // res.send('all notes here')
})

router.delete('/notes/:id', async (req, res) => {
    // console.log('inside /notes')
    try {
        const notes = await Note.findById(req.params.id)
        notes.title = req.body.title
        const a1 = await notes.remove()
        res.json(a1)

    } catch (err) {
        res.json({ 'error': err })
    }
    // res.send('all notes here')
})

router.post('/notes', async (req, res) => {
    const note = new Note({ id: req.body.id, title: req.body.title })
    try {

        const a1 = await note.save()
        res.json(a1)
    } catch (err) { res.send(err) }
})


module.exports = router