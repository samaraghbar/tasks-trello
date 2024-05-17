class MoveTemplateAssertions{

theOldCardTemplate(){
cy.get('.js-sidebar-action-text').contains("Make template").should("be.visible");
return this;
};

theNewCardTemplate(){
cy.get('.icon-check light').first().should(be.visible);
return this;
};


};

export default MoveTemplateAssertions;