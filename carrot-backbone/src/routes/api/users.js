module.exports = (router) => {
    router.get('/', (req, res) => {
        res.json({ message: 'ok' })
    })

    router.get('/:id', (req, res) => {
        res.json({ id: req.params.id })
    })

    router.post('/', (req, res) => {
        res.json({ message: req.body })
    })

    router.put('/:id', (req, res) => {
        res.json({ id: req.params.id, message: req.body })
    })

    router.delete('/:id', (req, res) => {
        res.json({ id: req.params.id, message: req.body })
    })

    return router
}