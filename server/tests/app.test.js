const request = require('supertest')
const httpStatus = require('http-status')
const app = require('../src/app')

describe('App Status routes', () => {
    let server, agent;

    beforeEach(done => {
        server = app.listen(5001, err => {
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