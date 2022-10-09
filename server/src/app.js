const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * v1 Routes
 */
app.use('/v1', routes)

module.exports = app