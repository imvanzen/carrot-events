'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

// Constants
const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || '127.0.0.1'

// App
app.get('/', (req, res) => {
    res.json({ message: 'ok' })
});

const routes = require('./src/routes')

app.use('/users', routes.users)
app.use('/events', routes.events)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)