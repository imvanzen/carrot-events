const pg = require('../services/pg')

const events = require('./events')(pg)
const users = require('./users')(pg)

module.exports = {
    users,
    events
}