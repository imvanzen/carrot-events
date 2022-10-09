const { faker } = require('@faker-js/faker');

const generateEvent = () => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    return {
        firstName,
        lastName,
        email: faker.internet.email(firstName, lastName).toLowerCase(),
        eventDate: faker.date.soon()
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