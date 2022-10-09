const express = require('express')
const router = express.Router()
const events = require('./api/events')

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'))

router.use('/events', events)

module.exports = router