describe('The Home Page', () => {
  it('successfuly loads', () => {
    cy.visit('http://localhost:3000')
  })

  it('displays no events by default', () => {
    cy.get('.events-list tbody tr').should('have.length', 1)

    cy.get('.events-list tbody tr').first().should('have.text', 'No events')
  })

  it('can add new events by clicking button from events list', () => {
    cy.get('#list-button-add-new').click()

    const event = cy.fixture('event.json')

    cy.get('#form-input-control-first-name').type(`${event.first_name}`)
    cy.get('#form-input-control-last-name').type(`${event.last_name}`)
    cy.get('#form-input-control-error-email').type(`${event.email}`)
    cy.get('#form-input-control-event-date').type(`${event.event_date}`)

    // 
    // 
    // 
    // form-button-control-cancel
    // form-button-control-public
  })
})