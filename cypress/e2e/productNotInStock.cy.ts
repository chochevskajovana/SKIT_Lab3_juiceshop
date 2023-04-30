import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/productsNotInStock/productsNotInStock.methods";

describe('template spec', () => {
  var login = new LoginMethods();
  var products = new ProductMethods();

  beforeEach(function () {
    login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
    login.login('chochevska@mail', 'Jovana1#');
    login.verifySuccessfullLogin();
  })

  it('User should not be able to add a product into basket (with POM)', () => {
    products.addItemToBasket('Juice Shop Coaster');
    cy.get('.fa-3x.warn-notification').should('have.text', '0');
  })
})