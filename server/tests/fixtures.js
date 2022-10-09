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

module.exports = {
    generateEvent
};