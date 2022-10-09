const express = require('express')
const routes = require('./routes')
const httpStatus = require('http-status')
const ApiError = require('./utils/ApiError')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * v1 Routes
 */
app.use('/v1', routes)

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
})

module.exports = app