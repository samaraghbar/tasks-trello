class HideTemplateAssertions{

    TemplateCardNameIsHidden(){
        cy.findbyTestId('.card-name').should("be.hidden");
        return this;
    };

};

export default HideTemplateAssertions;
