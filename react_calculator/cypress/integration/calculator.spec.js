describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display of the running total' , () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23')
  })

  it('should update the result of the arithmetical operations' , () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should chain multiple operations together' , () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-7.444444444444445')
  })

  it('should have an expected output for a range of numbers' , () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-7.634444444444444')
  })

  it ('should divide by zero' , () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error')

  })

  it ('should display positive numbers' , () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '24');
  })

  it('should display decimals numbers' , () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#operator-divide').click();
    cy.get('#number9').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','2.346938775510204')
  })

  it('should display large numbers' , () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#number9').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','-4.959604938271605')
  })
})