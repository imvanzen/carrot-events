const { faker } = require('@faker-js/faker');
const { DateTime } = require('luxon')

const generateEvent = () => {
    const first_name = faker.name.firstName()
    const last_name = faker.name.lastName()

    return {
        first_name,
        last_name,
        email: faker.internet.email(first_name, last_name).toLowerCase(),
        event_date: faker.date.soon().toISOString()
    }
}

const generateEventWithId = () => {
    const newEvent = generateEvent();
    return {
        id: faker.datatype.uuid(),
        ...newEvent
    }
}

const generateEventWithIdAndCreatedAt = (days = 0) => {
    const newEventWithId = generateEventWithId()
    return {
        ...newEventWithId,
        created_at: DateTime.now().toUTC().minus({ days }).toISO(),
        updated_at: null,
        deleted_at: null
    }
}

const eventOne = generateEventWithIdAndCreatedAt(3);
const eventTwo = generateEventWithIdAndCreatedAt(2);
const eventThree = generateEventWithIdAndCreatedAt(1);

const testEvents = () => {
    return [
        generateEvent(),
        generateEvent(),
        generateEvent(),
        generateEvent(),
        generateEvent(),
        generateEvent(),
        generateEvent()
    ]
}

console.log(JSON.stringify(testEvents(), " ", 2));

module.exports = {
    eventOne,
    eventTwo,
    eventThree,
    generateEvent,
    generateEventWithId,
};