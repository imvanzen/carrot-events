const express = require('express')
const routes = require('./routes')
const httpStatus = require('http-status')
const ApiError = require('./utils/ApiError')
const { errorConverter, errorHandler } = require('./utils/error')

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

app.use(errorConverter)
app.use(errorHandler)

module.exports = app