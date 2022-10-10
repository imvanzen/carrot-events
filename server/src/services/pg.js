const config = require('config')
const { Pool } = require('pg');

const {
    host,
    port,
    db,
    user,
    password
} = config.get('db')

const pool = new Pool({
    host,
    port,
    db,
    user,
    password
})

module.exports = pool