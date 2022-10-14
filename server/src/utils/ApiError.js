class ApiError extends Error {
    constructor(statusCode, message, stack = '') {
        super(message)
        this.statusCode = statusCode
        if (stack) {
            this.stack = stack
        } else {
            this.stack = Error.captureStackTrace(this, this.constructor)
        }
    }
}

module.exports = ApiError