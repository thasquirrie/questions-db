var express = require('express')
var bodyParser = require('body-parser')

var { ObjectID } = require('mongodb')

var { mongoose } = require('./db/mongoose')
var { Question } = require('./models/questions')

var app = express()

app.use(bodyParser.json())

app.post('/questions', (req, res) => {
    var question = new Question({
        text: req.body.text
    })

    question.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(400).send(err)
    });
})

app.get('/questions', (req, res) => {
    Question.find().then((questions) => {
        res.send({ questions })
    }).catch((err) => {
        res.status(400).send(err)
    });
})

app.listen(3000, () => {
    console.log(`Started on port 3000`)
})