class createBoardAssertions{

    checkBoardNameContainValue(boardName){
        cy.findByTestId("board-name-display").should('contain',boardName);
        return this; 
    
    }
    checkBoardNameisVisible(){
        cy.findByTestId("board-name-display").should("be.visible");
        return this; 
    }
    
    closedBoard(){
        cy.findByTestId("close-board-big-message").should("be.visible");
        return this;
    }
  
}
export default createBoardAssertions;



