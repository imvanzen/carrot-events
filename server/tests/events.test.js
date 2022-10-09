const request = require('supertest')
const httpStatus = require('http-status')
const { faker } = require('@faker-js/faker')
const app = require('../src/app')
const { generateEvent } = require('./fixtures')

describe('Event routes', () => {
    let server, agent, newEvent

    beforeEach(done => {
        newEvent = generateEvent();

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
        const eventId = "123"
        const req = await agent
            .get(`/v1/events/${userId}`)
            .send()
            .expect(httpStatus.OK)

        expect(req.body).toEqual({ id: userId })
    })

    test('should return 404 and no event by ID', async () => {
        const eventId = "123"
        const req = await agent
            .get(`/v1/events/${userId}`)
            .send()
            .expect(httpStatus.NOT_FOUND)
    })

    test('should return 202 and create an event', async () => {
        const req = await agent
            .post(`/v1/events`)
            .send(newEvent)
            .expect(httpStatus.ACCEPTED)
    })

    test('should return 400 when creating event but any param in missed', async () => {
        await agent
            .post(`/v1/events`)
            .send({ ...newEvent, firstName: undefined })
            .expect(httpStatus.BAD_REQUEST)

        await agent
            .post(`/v1/events`)
            .send({ ...newEvent, lastName: undefined })
            .expect(httpStatus.BAD_REQUEST)

        await agent
            .post(`/v1/events`)
            .send({ ...newEvent, email: undefined })
            .expect(httpStatus.BAD_REQUEST)

        await agent
            .post(`/v1/events`)
            .send({ ...newEvent, eventDate: undefined })
            .expect(httpStatus.BAD_REQUEST)
    })

    test('should return 400 when creating an event but email format is in bad format', async () => {
        newEvent.email = "Bad format email"
        const req = await agent
            .post(`/v1/events`)
            .send(newEvent)
            .expect(httpStatus.BAD_REQUEST)
    })

    test('should return 400 when creating an event but date is in bad format', async () => {
        newEvent.eventDate = "Bad format event date"
        const req = await agent
            .post(`/v1/events`)
            .send(newEvent)
            .expect(httpStatus.BAD_REQUEST)
    })
})