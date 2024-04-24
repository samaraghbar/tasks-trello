class createListActions{

    clickInListname(){
    cy.findByTestId("list-name-textarea").click();
    return this; 
    };

    typeInListName(listName){
        cy.findByTestId("list-name-textarea").type(listName);
        return this;

    };

    addListButton(){
        cy.findByTestId("list-composer-add-list-button").click();
        return this; 
    };

clickOnListName(){
cy.findByTestId("list-name").click();
return this;
};

typeNewListName(newName){
cy.findByTestId("list-name-textarea").type(newName).enter();
};


clickOnListActions(){
cy.findByTestId("OverflowMenuHorizontalIcon").click();
return this;
};


DeleteBoardfirst(){
cy.findByTestId("OverflowMenuHorizontalIcon").first().click();
return this;
};


clickOnCloseButton(){
cy.findByTestId("popover-close-board-confirm").click();
return this;
};

clickOnPermanentlyDeleteBoard(){
cy.findByTestId("close-board-delete-board-button").click();
return this; 
};


deleteButton(){
    cy.findByTestId("close-board-delete-board-confirm-button").click();
    return this;
};



};
export default createListActions;