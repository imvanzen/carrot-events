const express = require('express')
const routes = require('./routes')

const app = express()

/**
 * v1 Routes
 */
app.use('/v1', routes)

module.exports = app