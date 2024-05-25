class CreateTemplateAssertions{

templateNameisVisible(){
cy.findbyTestId('._Ex_mdzYTq8Rj3').contains("This is a Template card.").should("be.visible");
return this;
};

thisCardIsATemplate(){
    cy.get('.T8p0iZePEoaO1J').contains("This card is a template.").should("be.visible");
    return this;
};


};

export default CreateTemplateAssertions;
