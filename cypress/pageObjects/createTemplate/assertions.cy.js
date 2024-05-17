class CreateTemplateAssertions{

templateNameisVisible(isTemplate){
cy.findbyTestId("card-back-title-input").should("be.visible");
return this;
};


};

export default CreateTemplateAssertions;
