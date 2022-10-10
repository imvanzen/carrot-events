const { faker } = require('@faker-js/faker');

const generateEvent = () => {
    const first_name = faker.name.firstName()
    const last_name = faker.name.lastName()

    return {
        first_name,
        last_name,
        email: faker.internet.email(first_name, last_name).toLowerCase(),
        event_date: faker.date.soon()
    }
}

const generateEventWithId = () => {
    const newEvent = generateEvent();
    return {
        id: faker.datatype.uuid(),
        ...newEvent
    }
}

const eventOne = generateEvent();
const eventTwo = generateEvent();
const eventThree = generateEvent();

module.exports = {
    eventOne,
    eventTwo,
    eventThree,
    generateEvent,
    generateEventWithId,
};