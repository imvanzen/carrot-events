const supertest = require('supertest')
const app = require('../src/app')


describe('App', () => {
    test('Does startup', async () => {
        const req = request(app)
            .get('/')
            .expect('200')
    })
})