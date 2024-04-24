class createListAssertions{

    listNameisVisible(listName){
        cy.findByTestId("list-name").should("be.visible");
        return this;

    };


newListNameischanged(newName){
cy.findByTestId("list-name-textarea").should(contain,newName);
return this;
};


newListNameIsVisible(){
cy.findByTestId("list-name").should("be.visible");
return this;
};

listIsDeleted(){
cy.findByTestId("list-composer-button").should("be.visible");
return this;

};




};
export default createListAssertions;