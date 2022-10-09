const express = require('express')
const router = express.Router()

router
    .get('/', (req, res) => res.json([{ id: 1 }, { id: 2 }]))
    .get('/:eventId', (req, res) => res.json({ id: req.params.eventId }))

module.exports = router