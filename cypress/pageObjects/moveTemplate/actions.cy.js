class MoveTemplateActions{

    openBoard(boardUrl){
        cy.visit(boardUrl);
      return this;
    };

clickOnEdit(){
cy.findbyTestId("card-name").click();
return this;
};

clickOnMove(){
cy.get('.js-move-card').contains("Move").click();
return this;
};

chooseDestination(){
cy.findbyTestId("move-card-popover-select-board-destination").trigger(1);
cy.findbyTestId("move-card-popover-move-button").click();
return this;
};

};

export default MoveTemplateActions;
