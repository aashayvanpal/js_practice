const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send('welcome to nodejs')
    // res.json({ 'msg': 'welcome to nodejs' })
})

app.get('/user', function (req, res) {
    const id = req.query.id
    res.send('welcome User' + id)
})

app.get('/user/:id', function (req, res) {
    const id = req.params.id
    res.send('welcome User ' + id)
})

app.listen(3001, function () {
    console.log('listening to port 3001')
})