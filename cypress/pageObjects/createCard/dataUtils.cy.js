import { APIKey,APIToken, } from "../../support/constants.cy";



class sharedDataUtils{

    createBoard=(boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)

    };

createList= (boardId, listName)=>{
return cy.request("post",`https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${APIKey}&token=${APIToken}`);

}

deleteBoard = (boardId)=>{
return cy.request("Delete",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`);

}

createCard=(listId)=>{
    return cy.request("Post",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`)
}






}

export default sharedDataUtils;