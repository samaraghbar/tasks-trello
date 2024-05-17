class DeleteCardAssertions{

cardIsDeleted(cardTitle){
    cy.findbyTestId("card-name").should("be.hidden");
    return this;
};



};

export default DeleteCardAssertions; 