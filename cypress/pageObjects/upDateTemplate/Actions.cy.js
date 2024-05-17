class UpdateTemplateNameActions{

    openBoard(boardUrl){
        cy.visit(boardUrl);
      return this;
    };

    clickOnEditelist(){
        cy.get("T8p0iZePEoaO1J").contains("This card is a template.").click();
        return this;
    };

    typeInNewName(tempName){
        cy.findbyTestId("card-back-title-input").click().type(tempName);
        return this; 
    };




};

export default UpdateTemplateNameActions;
