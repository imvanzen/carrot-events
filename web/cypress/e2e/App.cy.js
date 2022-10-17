describe('The Home Page', () => {
  beforeEach('successfuly loads', () => {
    cy.visit('http://localhost:3000')
  })

  it('displays no events by default', () => {
    cy.get('.events-list tbody tr').should('have.length', 1)

    cy.get('.events-list tbody tr').first().should('have.text', 'No events')
  })

  let events; //closure variable
  before(async () => {
    events = await cy.fixture('events.json');
  })

  it('can add new event', () => {
    cy.get('#list-button-add-new').click()

    cy.wait(1000)

    const [eventOne] = events

    cy.get('#form-input-control-first-name').type(`${eventOne.first_name}`)
    cy.get('#form-input-control-last-name').type(`${eventOne.last_name}`)
    cy.get('#form-input-control-error-email').type(`${eventOne.email}`)
    cy.get('#form-input-control-event-date').type(`${eventOne.event_date}`)
    cy.get('#form-button-control-public').click()

    cy.wait(1000)

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })

    cy.get('.events-list tbody tr').should('have.length', 1)
    cy.get('.events-list tbody tr').last().get('td').first().should('have.text', `${eventOne.first_name}`)
  })

  it('can validate incorrect input', () => {
    cy.get('#list-button-add-new').click()

    cy.wait(1000)

    cy.get('#form-input-control-first-name').type(`123`)
    cy.get('#form-input-control-first-name-error-message').should('have.text', 'Please enter a valid first name')

    cy.get('#form-input-control-last-name').type(`321`)
    cy.get('#form-input-control-last-name-error-message').should('have.text', 'Please enter a valid last name address')

    cy.get('#form-input-control-error-email').type(`not a email`)
    cy.get('#form-input-control-error-email-error-message').should('have.text', 'Please enter a valid email address')

    cy.get('#form-input-control-event-date').type(`wrong`)
    cy.get('#form-input-control-event-date-error-message').should('have.text', 'Please enter a valid event date')
  })

  it('can go back by canceling', () => {
    cy.get('#list-button-add-new').click()

    cy.wait(1000)

    cy.get('#form-button-control-cancel').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
  })

  it('can edit event', () => {
    cy.get('#list-button-add-new').click()

    cy.wait(1000)

    cy.get('#form-button-control-cancel').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
  })
})