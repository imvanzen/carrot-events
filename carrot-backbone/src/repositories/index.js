const pg = require('../services/pg')

const events = require('./events')(pg)

module.exports = {
    events
}