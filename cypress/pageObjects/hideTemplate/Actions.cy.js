class HideTemplateActions{

    openBoard(boardUrl){
        cy.visit(boardUrl);
      return this;
    };

    ChooseEdit(){
        cy.findbyTestId("card-name").click();
        return this;
    };

chooseHideFromList(){
    cy.get('.js-sidebar-action-text').contains("Hide from list").click();
    return this;
};



};

export default HideTemplateActions; 