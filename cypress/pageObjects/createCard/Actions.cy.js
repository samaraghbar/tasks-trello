class CreateCardActions{

openBoard(){

    cy.visit(boardUrl);
    return this;
}

clickOnAddACardButton(){

    cy.findbyTestId("list-add-card-button").click();

return this;
};

typeInCardTitleInputField(cardTitle){
    cy.findbyTestId("list-card-composer-textarea").type(cardTitle);

return this;
};

clickOnAddCardButton(){
    cy.findbyTestId("list-card-composer-add-card-button").click();

return this;
};

openCard(cardUrl){
cy.visit(cardUrl);
return this;
 };



};
export default CreateCardActions;