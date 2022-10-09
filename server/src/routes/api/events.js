const router = express.Router()

router
    .get('/', (req, res) => res.json([{ id: 1 }, { id: 2 }]))

module.exports = router