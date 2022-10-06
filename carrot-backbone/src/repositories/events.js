module.exports = (db) => {
    const findAll = async () => {
        try {
            const result = await db.query(`SELECT * FROM carrot_events.events`, [])
            console.log('Query response', result)
            return result
        } catch (err) {
            console.error('Query error', err)
            throw err
        }
    }

    return {
        findAll
    }
}