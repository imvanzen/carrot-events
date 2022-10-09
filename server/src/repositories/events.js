const uuid4 = require('uuid4')
const db = require('../services/pg')

const findAll = async () => {
    try {
        const result = await db.query('SELECT * FROM carrot_events.events WHERE deleted_at IS NULL ORDER BY created_at ASC', [])
        console.log('Query response', result)
        return result.rows
    } catch (err) {
        console.error('Query error', err)
        throw err
    }
}

const create = async (event) => {
    try {
        const { first_name, last_name, email, event_date } = event;
        const result = await db.query(
            `INSERT INTO carrot_events.events (id, first_name, last_name, email, event_date) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [uuid4(), first_name, last_name, email, event_date]
        )
        console.log('Query response', event, result)
        return result.rows[0]
    } catch (err) {
        console.error('Query error', err)
        throw err
    }
}

const findOne = async (id) => {
    try {
        const result = await db.query(
            'SELECT * FROM carrot_events.events WHERE id = $1 AND deleted_at IS NULL',
            [id]
        )
        console.log('Query response', id, result)
        return result.rows[0]
    } catch (err) {
        console.error('Query error', err)
        throw err
    }
}

const update = async (id, event) => {
    try {
        const { first_name, last_name, email, event_date } = event;
        const result = await db.query(
            `UPDATE carrot_events.events SET (
                first_name = $2,
                last_name = $3,
                email = $4,
                event_date = $5, 
                updated_at = NOW()
            ) 
            WHERE id = $1 AND deleted_at IS NULL
            RETURNING *`,
            [id, first_name, last_name, email, event_date]
        )
        console.log('Query response', event, result)
        return result.rows[0]
    } catch (err) {
        console.error('Query error', err)
        throw err
    }
}

const remove = async (id) => {
    try {
        const result = await db.query(
            `UPDATE carrot_events.events SET (
                deleted_at = NOW()
            ) 
            WHERE id = $1 AND deleted_at IS NULL
            RETURNING *`,
            [id]
        )
        console.log('Query response', id, result)
        return result.rows[0] !== null
    } catch (err) {
        console.error('Query error', err)
        throw err
    }
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove
}