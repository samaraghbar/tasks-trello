class DeleteCardActions{

    openBoard(boardUrl){

        cy.visit(boardUrl);
        cy.wait(2000);
        cy.screenshot({capture:"fullPage"});
        return this;
    };


    chooseCard(){
        cy.findbyTestId("card-name").click();
        return this;
    };

    clickOnArchiveButton(){
        cy.get('.action-text').contains("Archive").click();
        return this;
    };




};

export default DeleteCardActions;