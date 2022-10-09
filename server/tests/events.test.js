const request = require('supertest')
const httpStatus = require('http-status')
const app = require('../src/app')

describe('Event routes', () => {
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

    test('should return 200 and list of events', async () => {
        const req = await agent
            .get('/v1/events')
            .send()
            .expect(httpStatus.OK)

        expect(req.body).toEqual([{ id: 1 }, { id: 2 }])
    })

    test('should return 200 and event by ID', async () => {
        const userId = "123";
        const req = await agent
            .get(`/v1/events/${userId}`)
            .send()
            .expect(httpStatus.OK)

        expect(req.body).toEqual({ id: userId })
    })

    test('should return 404 and no event by ID', async () => {
        const userId = "123";
        const req = await agent
            .get(`/v1/events/${userId}`)
            .send()
            .expect(httpStatus.NOT_FOUND)
    })
})