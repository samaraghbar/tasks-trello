class CreateCardAssertions{

    cardDeleted(cardTitle){

        cy.findbyTestId("card-name").should("be.hidden");
        return this;
    };

};
export default CreateCardAssertions;
