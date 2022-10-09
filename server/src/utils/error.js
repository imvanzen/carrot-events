const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')

const errorConverter = (err, req, res, next) => {
    let error = err
    if (!(error instanceof ApiError)) {
        const statusCode = httpStatus.INTERNAL_SERVER_ERROR
        const message = error.message || httpStatus[statusCode]
        error = new ApiError(statusCode, message, err.stack)
    }
    next(error)
}

const errorHandler = (err, req, res, next) => {
    const response = {
        code: err.statusCode,
        message: err.message,
        stack: err.stack,
    }

    res.status(err.statusCode).send(response)
}

module.exports = {
    errorConverter,
    errorHandler,
}