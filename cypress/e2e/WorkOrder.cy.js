import home from '../selector/Home.locator'
import workorderlist from '../selector/WorkOrderList.locator'

describe('Verify work order list page @Sanity @Regression @WorkOrderList', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get(home.workOrderMenu).click();
  });

  it('TC_2 :: Verify title of the table after click on work order menu.', () => {
    cy.url().should('include', '/workOrders');
    const column = ['Due', 'WO #', 'Status', 'WO Title', 'Priority', 'Last Updated', 'Created On', 'Location'];
    column.forEach((value) => {
      cy.get(workorderlist.tableHeaders)
        .children()
        .should('contain', value);
    });
  });

  it('TC_3 :: Verify work order specific records and its various status is present from given data.', () => {
    cy.verifyColumnValue('Status', 'Open');
    cy.verifyColumnValue('Status', 'In Progress');
    cy.verifyColumnValue('Status', 'Complete');
    cy.verifyColumnValue('WO', '009');
    cy.verifyColumnValue('WO Title', 'Replace Strap');
    cy.verifyColumnValue('Priority', 'MEDIUM');
    cy.verifyColumnValue('Priority', 'HIGH');
    cy.verifyColumnValue('Priority', 'LOW');
    cy.verifyColumnValue('Last Updated', '10/14/19');
    cy.verifyColumnValue('Created On', '01/08/20');
    cy.verifyColumnValue('Location', '(NO LOCATIONS)');
    cy.verifyColumnValue('Location', 'LONG BEACH CONVENTION CENTER');
  });
});

  