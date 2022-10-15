const db = require('../src/services/pg')

const insertEvents = async (events) => {
    return new Promise.all(events.map(async (event) => {
        const { id, first_name, last_name, email, event_date } = event
        try {
            const result = await db.query(
                `INSERT INTO carrot_events.events 
                    (id, first_name, last_name, email, event_date) 
                VALUES 
                    ($1, $2, $3, $4, $5) 
                RETURNING *`,
                [id, first_name, last_name, email, event_date]
            )
            console.log('Query response', event, result.rows)
            return result.rows[0]
        } catch (err) {
            console.error('Query error', err)
            return false
        }
    }))
}

const cleanUpDb = async () => {
    try {
        const result = await db.query(
            `DELETE FROM carrot_events.events`
        )
        console.log('Query response', result.rows)
        return true
    } catch (err) {
        console.error('Query error', err)
        return false
    }
}
