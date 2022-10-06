const express = require('express')
const router = express.Router();

const users = require('./api/users')(router)
const events = require('./api/events')(router)

module.exports = {
    users,
    events
}