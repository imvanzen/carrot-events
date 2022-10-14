const config = require('config')
const Pool = require('pg-pool');

const {
    host,
    port,
    db,
    user,
    password
} = config.get('db')

const POSTGRES_USER = user
const POSTGRES_PASSWORD = password
const POSTGRES_HOST = host
const POSTGRES_PORT = port
const POSTGRES_DB = db

const connectionString = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`

const pool = new Pool({
    connectionString
})

module.exports = pool