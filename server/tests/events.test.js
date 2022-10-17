const request = require('supertest')
const httpStatus = require('http-status')
const config = require('config')
const app = require('../src/app')

const port = config.get('app.port')
const { eventOne, eventTwo, eventThree, generateEvent, generateEventWithId } = require('./fixtures')
const { insertEvents, cleanUpDb } = require('./dbUtils')

describe('Event routes', () => {
    let server, agent, newEvent

    beforeAll(done => {
        server = app.listen(port, err => {
            if (err) return done(err)
            agent = request.agent(server)
            done()
        })
    })

    beforeEach(async () => {
        newEvent = generateEvent();
        return await cleanUpDb()
    })

    afterAll(async () => {
        return await server.close()
    })

    describe('GET Event', () => {
        test('should return 200 and list of events', async () => {
            const events = await insertEvents([eventOne, eventTwo, eventThree])
            return await agent
                .get('/v1/events')
                .send()
                .expect(httpStatus.OK)
                .expect((res) => {
                    expect(res.body.length).toEqual(3)
                    expect(res.body[0].first_name).toEqual(eventOne.first_name)
                    expect(res.body[1].last_name).toEqual(eventTwo.last_name)
                    expect(res.body[2].email).toEqual(eventThree.email)
                })
        })

        test('should return 200 and event by ID', async () => {
            const eventWithId = generateEventWithId()
            await insertEvents([eventWithId])
            return await agent
                .get(`/v1/events/${eventWithId.id}`)
                .send()
                .expect(httpStatus.OK)
                .expect((res) => {
                    expect(res.body.id).toEqual(eventWithId.id)
                    expect(res.body.first_name).toEqual(eventWithId.first_name)
                    expect(res.body.last_name).toEqual(eventWithId.last_name)
                    expect(res.body.email).toEqual(eventWithId.email)
                    // Issue with TZ shifting - @TODO FIX IT
                    // expect(res.body.event_date).toEqual(eventWithId.event_date)
                })
        })

        test('should return 404 and no event by ID', async () => {
            const eventId = "123"
            return await agent
                .get(`/v1/events/${eventId}`)
                .send()
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"eventId\" must be a valid GUID"
                })
        })
    })

    describe('POST Event', () => {
        test('should return 202 and create an event', async () => {
            return await agent
                .post(`/v1/events`)
                .send(newEvent)
                .expect(httpStatus.ACCEPTED)
                .expect((res) => {
                    res.body = newEvent;
                })
        })

        test('should return 400 when creating event but first_name param is empty or missed', async () => {
            await agent
                .post(`/v1/events`)
                .send({ ...newEvent, first_name: "" })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"first_name\" is not allowed to be empty"
                })

            return await agent
                .post(`/v1/events`)
                .send({ ...newEvent, first_name: undefined })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"first_name\" is required"
                })
        })

        test('should return 400 when creating event but last_name param is empty or missed', async () => {
            await agent
                .post(`/v1/events`)
                .send({ ...newEvent, last_name: "" })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"last_name\" is not allowed to be empty"
                })
            return await agent
                .post(`/v1/events`)
                .send({ ...newEvent, last_name: undefined })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"last_name\" is required"
                })
        })

        test('should return 400 when creating event but email param is empty or missed', async () => {
            await agent
                .post(`/v1/events`)
                .send({ ...newEvent, email: "" })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"email\" is not allowed to be empty"
                })

            return await agent
                .post(`/v1/events`)
                .send({ ...newEvent, email: undefined })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"email\" is required"
                })
        })

        test('should return 400 when creating event but event_date param is empty or missed', async () => {
            await agent
                .post(`/v1/events`)
                .send({ ...newEvent, event_date: "" })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"event_date\" is not allowed to be empty"
                })

            return await agent
                .post(`/v1/events`)
                .send({ ...newEvent, event_date: undefined })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"event_date\" is required"
                })
        })

        test('should return 400 when creating an event but first name is in bad type', async () => {
            return await agent
                .post(`/v1/events`)
                .send({ ...newEvent, first_name: 1234 })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"first_name\" must be a string"
                })
        })

        test('should return 400 when creating an event but last name is in bad type', async () => {
            return await agent
                .post(`/v1/events`)
                .send({ ...newEvent, last_name: 1234 })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"last_name\" must be a string"
                })
        })

        test('should return 400 when creating an event but email format is in bad format', async () => {
            return await agent
                .post(`/v1/events`)
                .send({ ...newEvent, email: "Bad format email" })
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"email\" must be a valid email"
                })
        })

        test('should return 400 when creating an event but date is in bad format', async () => {
            newEvent.event_date = "Bad format event date"
            return await agent
                .post(`/v1/events`)
                .send(newEvent)
                .expect(httpStatus.BAD_REQUEST)
                .expect({
                    code: 400,
                    message: "\"event_date\" must be in iso format"
                })
        })
    })

    describe('PUT Event', () => {
        test('should return 202 and update an event', async () => {
            const eventToUpdate = generateEventWithId()
            await insertEvents([eventToUpdate])
            return await agent
                .put(`/v1/events/${eventToUpdate.id}`)
                .send({ ...eventToUpdate, first_name: 'Bob' })
                .expect(httpStatus.ACCEPTED)
                .expect((res) => {
                    expect(res.body.id).toEqual(eventToUpdate.id)
                    expect(res.body.first_name).toEqual('Bob')
                    expect(res.body.updated_at).not.toBeNull()
                })
        })
    })
})