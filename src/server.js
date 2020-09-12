const express = require("express")
const mongose = require('mongoose')
const routes = require('./routes')

const app = express()

// db connection mongodb
mongose.connect('mongodb+srv://SimpleCrudNode:crudnode@cluster0.4njdn.mongodb.net/crudnode?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(express.json())
app.use(routes)

// senha mongodb crudnode
app.listen(3000, function () {
    console.log('server running')
})
