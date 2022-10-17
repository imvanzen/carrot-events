const db = require('../src/services/pg')

const insertEvents = async (events) => {
    return Promise.all(events.map(async (event) => {
        const {
            id,
            first_name,
            last_name,
            email,
            event_date,
            created_at = new Date().toISOString(),
            updated_at = null,
            deleted_at = null
        } = event
        try {
            const result = await db.query(
                `INSERT INTO carrot_events.events 
                    (id, first_name, last_name, email, event_date, created_at, updated_at, deleted_at) 
                VALUES 
                    ($1, $2, $3, $4, $5, $6, $7, $8) 
                RETURNING *`,
                [id, first_name, last_name, email, event_date, created_at, updated_at, deleted_at]
            )
            // console.log('Query response', event, result.rows)
            return result.rows[0]
        } catch (err) {
            // console.error('Query error', err)
            return false
        }
    }))
}

const cleanUpDb = async () => {
    try {
        const result = await db.query(
            `DELETE FROM carrot_events.events`
        )
        // console.log('Query response', result.rows)
        return true
    } catch (err) {
        // console.error('Query error', err)
        return false
    }
}

module.exports = {
    insertEvents,
    cleanUpDb
}
