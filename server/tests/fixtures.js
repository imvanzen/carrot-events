const faker = require('faker');

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

module.exports = {
    generateEvent,
    generateEventWithId,
};