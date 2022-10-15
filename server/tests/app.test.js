const request = require('supertest')
const httpStatus = require('http-status')
const app = require('../src/app')
const config = require('config')
const port = config.get('app.port')

describe('App Status routes', () => {
    let server, agent;

    beforeEach(done => {
        server = app.listen(port, err => {
            if (err) return done(err)
            agent = request.agent(server)
            done()
        })
    })

    afterEach(done => {
        if (!server) return done()
        server.close(done)
    })

    test('should return 200', async () => {
        const req = await agent
            .get('/v1/status')
            .send()
            .expect(httpStatus.OK)
    })
})