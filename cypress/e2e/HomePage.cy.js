describe('Verify Home Page feature  @Sanity @Regression @HomePage', ()=> {
    it('TC_1 :: Veirfy home page is loading and candidate UI text present', function() {
      cy.visit('/');
      cy.contains('UpKeep Candidate UI Project').should('be.visible');
      cy.contains('Home').should('be.visible');
      cy.contains('Work Orders').should('be.visible');
    });
  });
  