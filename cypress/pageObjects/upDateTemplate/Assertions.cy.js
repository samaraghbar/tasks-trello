class UpdateTemplateNameAssertions{

newNameIsUpdated(tempName){
cy.findbyTestId("card-back-title-input").contains(tempName).should("be.visible");
return this;

};


};

export default UpdateTemplateNameAssertions;