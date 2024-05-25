class CreateTemplateActions{

    openBoard(boardUrl){
        cy.visit(boardUrl);
      return this;
    };

    ChooseCard(){
      cy.findbyTestId("card-name").click();
      return this;
    };
    
    makeTemplateOption(){
      cy.get('.action-text').contains("Make template").click();
      return this;
    };

    closeTheCardListOption(){
      cy.findbyTestId("CloseIcon").click();
      return this;
    };

};

export default CreateTemplateActions;

