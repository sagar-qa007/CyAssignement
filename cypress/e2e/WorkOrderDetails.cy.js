import home from '../selector/Home.locator'
import workOrderDetails from '../selector/WorkOrderDetails.locator'

describe('Verify work order details page @Sanity @Regression @WorkOrderDetails', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get(home.workOrderMenu).click();
    cy.url().should('include', '/workOrders');
  });

  afterEach(() => {
    cy.go(-1);
  });

  it('TC_4 :: Verify on clicking on record it should open the work order details page with open status. (ID:024)', () => {
    cy.getNthElementByTextAndTestId('024', 'work-order-row', 0).then(($element) => {
      expect($element).to.exist;
      cy.wrap($element).click();
    });
    cy.url().should('match', /\/workOrders\/.+/);
    cy.contains('(No Title)').should('be.visible');
    cy.contains(workOrderDetails.workOrderTitleId, '#024');
    cy.contains('Priority').should('be.visible');
    cy.contains('MEDIUM').should('be.visible');
    cy.contains('Updated:').should('be.visible');
    cy.contains('04/26/20 11:46:00 pm').should('be.visible');
    cy.contains('Category').should('be.visible');
    cy.contains('Meter').should('be.visible');
    cy.contains('Created').should('be.visible');
    cy.contains('04/26/20 11:46:00 pm', { exact: true }).should('be.visible');
    cy.get(workOrderDetails.workOrderEditBtn).should('exist');
  });

  it('TC_5 :: Verify on clicking on record it should open the work order details page with in progress status. (ID:036)', () => {

    cy.getNthElementByTextAndTestId('036', 'work-order-row', 0).then(($element) => {
      expect($element).to.exist;
      cy.wrap($element).click();
    });
    cy.url().should('match', /\/workOrders\/.+/);
    cy.contains('gary admin delete test').should('be.visible');
    cy.contains(workOrderDetails.workOrderTitleId, '#036');
    cy.contains('Priority').should('be.visible');
    cy.contains('HIGH').should('be.visible');
    cy.contains('Updated:').should('be.visible');
    cy.contains('04/02/20 11:14:25 pm').should('be.visible');
    cy.contains('Category').should('be.visible');
    cy.contains('Created').should('be.visible');
    cy.contains('04/02/20 10:30:14 pm', { exact: true }).should('be.visible');
    cy.contains('Hollywood Building').should('be.visible');
    cy.get(workOrderDetails.workOrderEditBtn).should('exist');
   
  });

  it('TC_6 :: Verify on clicking on record it should open the work order details page with complete status. (ID:014)', () => {

    cy.getNthElementByTextAndTestId('014', 'work-order-row', 0).then(($element) => {
      expect($element).to.exist;
      cy.wrap($element).click();
    });
    cy.url().should('match', /\/workOrders\/.+/);
    cy.contains('Replace Strap').should('be.visible');
    cy.contains('Oculus Strap is Worn Out').should('be.visible');
    cy.contains(workOrderDetails.workOrderTitleId, '#014');
    cy.contains('Priority').should('be.visible');
    cy.contains('MEDIUM').should('be.visible');
    cy.contains('Updated:').should('be.visible');
    cy.contains('10/14/19 11:17:19 pm').should('be.visible');
    cy.contains('Category').should('be.visible');
    cy.contains('Damage').should('be.visible');
    cy.contains('Created').should('be.visible');
    cy.contains('10/14/19 11:17:19 pm', { exact: true }).should('be.visible');
    cy.contains('Locations').should('be.visible');
    cy.contains('Long Beach Convention Center').should('be.visible');
    cy.get(workOrderDetails.workOrderEditBtn).should('exist');
   
  });

  it('TC_7 :: Verify on clicking on record it should open the work order details page with No location. (ID:008)', () => {

    cy.getNthElementByTextAndTestId('008', 'work-order-row', 0).then(($element) => {
      expect($element).to.exist;
      cy.wrap($element).click();
    });
    cy.url().should('match', /\/workOrders\/.+/);
    cy.contains('Replace Strap').should('be.visible');
    cy.contains(workOrderDetails.workOrderTitleId, '#008');
    cy.contains('Oculus Strap is Worn Out').should('be.visible');
    cy.contains('Priority').should('be.visible');
    cy.contains('MEDIUM').should('be.visible');
    cy.contains('Updated:').should('be.visible');
    cy.contains('10/14/19 11:16:54 pm').should('be.visible');
    cy.contains('Category').should('be.visible');
    cy.contains('Damage').should('be.visible');
    cy.contains('Created').should('be.visible');
    cy.contains('10/14/19 11:16:54 pm', { exact: true }).should('be.visible');
    cy.contains('Locations').should('be.visible');
    cy.contains('(No Locations)').should('be.visible');
    cy.get(workOrderDetails.workOrderEditBtn).should('exist');
   
  });

  it('TC_8 :: Verify on clicking on record it should open the work order details page with With location. (ID:017)', () => {

    cy.getNthElementByTextAndTestId('017', 'work-order-row', 0).then(($element) => {
      expect($element).to.exist;
      cy.wrap($element).click();
    });
    cy.url().should('match', /\/workOrders\/.+/);
    cy.contains('Screen Is Dirty').should('be.visible');
    cy.contains(workOrderDetails.workOrderTitleId, '#017');
    cy.contains('Oculus Screen Is Dirty. Please wipe clean').should('be.visible');
    cy.contains('Priority').should('be.visible');
    cy.contains('LOW').should('be.visible');
    cy.contains('Updated:').should('be.visible');
    cy.contains('10/14/19 11:24:25 pm').should('be.visible');
    cy.contains('Category').should('be.visible');
    cy.contains('Cleaning').should('be.visible');
    cy.contains('Created').should('be.visible');
    cy.contains('10/14/19 11:24:25 pm', { exact: true }).should('be.visible');
    cy.contains('Locations').should('be.visible');
    cy.contains('Torrance Memorial').should('be.visible');
    cy.get(workOrderDetails.workOrderEditBtn).should('exist');
    
  });

});

  
describe('Verify work order details validations @Sanity @Regression', () => {

  it('TC_9 :: Verify non-existing Work Order ID will show a relevant error', () => {
    cy.visit('/workOrders/sampleFailedCase');
    cy.url().should('match', /\/workOrders\/.+/);
    cy.contains('This work order ID does not exist').should('be.visible');
  });
});