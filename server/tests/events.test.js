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

    test('should return 200 and list of events', async () => {
        await insertEvents([eventOne, eventTwo, eventThree])
        return await agent
            .get('/v1/events')
            .send()
            .expect(httpStatus.OK)
            .expect(res => {
                console.log(JSON.stringify(res));
                res.body = [eventOne, eventTwo]
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
                res.body = eventWithId;
            })
    })

    test('should return 404 and no event by ID', async () => {
        const eventId = "123"
        return await agent
            .get(`/v1/events/${eventId}`)
            .send()
            .expect(httpStatus.BAD_REQUEST)
            .expect((res) => {
                res.body.message = "\"eventId\" must be a valid GUID";
            })
    })

    test('should return 202 and create an event', async () => {
        return await agent
            .post(`/v1/events`)
            .send(newEvent)
            .expect(httpStatus.ACCEPTED)
            .expect((res) => {
                res.body = newEvent;
            })
    })

    test('should return 400 when creating event but first_name param in missed', async () => {
        return await agent
            .post(`/v1/events`)
            .send({ ...newEvent, first_name: undefined })
            .expect(httpStatus.BAD_REQUEST)
            .expect((res) => {
                res.body.message = "\"first_name\" is not allowed to be empty";
            })
    })

    test('should return 400 when creating event but last_name param in missed', async () => {
        return await agent
            .post(`/v1/events`)
            .send({ ...newEvent, last_name: undefined })
            .expect(httpStatus.BAD_REQUEST)
            .expect((res) => {
                res.body.message = "\"last_name\" is not allowed to be empty";
            })
    })

    test('should return 400 when creating event but email param in missed', async () => {
        return await agent
            .post(`/v1/events`)
            .send({ ...newEvent, email: undefined })
            .expect(httpStatus.BAD_REQUEST)
            .expect((res) => {
                res.body.message = "\"email\" is not allowed to be empty";
            })
    })

    test('should return 400 when creating event but event_date param in missed', async () => {
        return await agent
            .post(`/v1/events`)
            .send({ ...newEvent, event_date: undefined })
            .expect(httpStatus.BAD_REQUEST)
            .expect((res) => {
                res.body.message = "\"event_date\" is not allowed to be empty";
            })
    })

    test('should return 400 when creating an event but email format is in bad format', async () => {
        newEvent.email = "Bad format email"
        return await agent
            .post(`/v1/events`)
            .send(newEvent)
            .expect(httpStatus.BAD_REQUEST)
            .expect((res) => {
                res.body.message = "\"email\" must be a valid email";
            })
    })

    test('should return 400 when creating an event but date is in bad format', async () => {
        newEvent.eventDate = "Bad format event date"
        return await agent
            .post(`/v1/events`)
            .send(newEvent)
            .expect(httpStatus.BAD_REQUEST)
            .expect((res) => {
                res.body.message = "\"event_date\" must be in iso format";
            })
    })
})