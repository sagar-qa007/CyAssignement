import home from '../selector/Home.locator'
import workOrderDetails from '../selector/WorkOrderDetails.locator'

describe('Verify Edit work order feature @Sanity @Regression @WorkOrderEdit', () => {
  let formattedDate;
  beforeEach(() => {
    cy.visit('/');
    cy.get(home.workOrderMenu).click();
    cy.url().should('include', '/workOrders');
    const currentDate = new Date();
    formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  });

  afterEach(() => {
    cy.go(-1);
  });

  it('TC_10 :: Verify user cancel edit for the in progress order (ID:009)', () => {
    cy.getNthElementByTextAndTestId('009', 'work-order-row', 0).then(($element) => {
      expect($element).to.exist;
      cy.wrap($element).click();
    });

    cy.contains(workOrderDetails.workOrderTitleId, '#009');
    cy.get(workOrderDetails.workOrderEditBtn).click();
    cy.get(workOrderDetails.workOrderTitleInput).click();
    cy.get(workOrderDetails.workOrderTitleInput).clearAndType('Automation Cancel Test case Title.');
    cy.get(workOrderDetails.workOrderDescInput).click();
    cy.get(workOrderDetails.workOrderDescInput).clearAndType('Automation Cancel Test case Desc.');
    cy.get(workOrderDetails.workOrderPriorityDown).click();
    cy.get(workOrderDetails.workOrderHighPriority).click();
    cy.get(workOrderDetails.workOrderCancelBtn).click();

    cy.contains('Replace Strap').should('be.visible');
    cy.contains(workOrderDetails.workOrderTitleId, '#009');
    cy.contains('Oculus Strap is Worn Out').should('be.visible');
    cy.contains('MEDIUM').should('be.visible');
    cy.get(workOrderDetails.workOrderEditBtn).should('exist');

  });

  it('TC_11 :: Verify user save edit for the in progress order (ID:011)', () => {
    cy.getNthElementByTextAndTestId('011', 'work-order-row', 0).then(($element) => {
      expect($element).to.exist;
      cy.wrap($element).click();
    });

    cy.contains(workOrderDetails.workOrderTitleId, '#011');
    cy.get(workOrderDetails.workOrderEditBtn).click();
    cy.get(workOrderDetails.workOrderTitleInput).click();
    cy.get(workOrderDetails.workOrderTitleInput).clearAndType('Automation Cancel Test case Title with Save.');
    cy.get(workOrderDetails.workOrderDescInput).click();
    cy.get(workOrderDetails.workOrderDescInput).clearAndType('Automation Cancel Test case Desc with Save.');
    cy.get(workOrderDetails.workOrderPriorityDown).click();
    cy.get(workOrderDetails.workOrderHighPriority).click();
    cy.get(workOrderDetails.workOrderSaveBtn).click();

    cy.contains('Automation Cancel Test case Title with Save.').should('be.visible');
    cy.contains(workOrderDetails.workOrderTitleId, '#011');
    cy.contains('Automation Cancel Test case Desc with Save.').should('be.visible');
    cy.contains('HIGH').should('be.visible');
    cy.get(workOrderDetails.workOrderEditBtn).should('exist');
    cy.contains(formattedDate).should('be.visible');
  });

  it('TC_12 :: Verify user revisit same work order and data is stored (ID:011)', () => {
    cy.getNthElementByTextAndTestId('011', 'work-order-row', 0).then(($element) => {
      expect($element).to.exist;
      cy.wrap($element).click();
    });

    cy.contains(workOrderDetails.workOrderTitleId, '#011');
    cy.contains('Automation Cancel Test case Title with Save.').should('be.visible');
    cy.contains('Automation Cancel Test case Desc with Save.').should('be.visible');
    cy.contains('HIGH').should('be.visible');
    cy.get(workOrderDetails.workOrderEditBtn).should('exist');
    cy.contains(formattedDate).should('be.visible');
  });

  it('TC_13 :: Verify user can not save data with none priority. (ID:011)', () => {
    cy.getNthElementByTextAndTestId('011', 'work-order-row', 0).then(($element) => {
      expect($element).to.exist;
      cy.wrap($element).click();
    });

    cy.contains(workOrderDetails.workOrderTitleId, '#011');
    cy.get(workOrderDetails.workOrderEditBtn).click();
    cy.get(workOrderDetails.workOrderPriorityDown).click();
    cy.get(workOrderDetails.workOrderPriorityList).eq(0).click();
    cy.get(workOrderDetails.workOrderSaveBtn).click();
    cy.get(workOrderDetails.workOrderEditBtn).should('not.be.visible');
  });
});

  