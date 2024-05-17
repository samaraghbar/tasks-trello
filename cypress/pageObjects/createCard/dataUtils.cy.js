import { APIKey,APIToken, } from "../../support/constants.cy";



class sharedDataUtils{

    createBoard=(boardName)=>{
        return cy.request("Post",`https://api.trello.com/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)

    };

createList= (boardId, listName)=>{
return cy.request("Post",`https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${APIKey}&token=${APIToken}`);

};

deleteBoard = (boardId)=>{
return cy.request("Delete",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`);

};


createCard=(listId)=>{
    return cy.request("Post",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`);
};


deleteCard = (cardId)=>{
return cy.request("Delete",`https://api.trello.com/1/cards/${cardId}?key=${APIKey}&token=${APIToken}`);
};

createTemplate(listId,cardTitle,isTemplate){
    return cy.request({
        method: "POST",
        url: `https://api.trello.com/1/cards?name=${cardTitle}&idList=${listId}&key=${APIKey}&token=${APIToken}`,
        header: "Accept: application/json",
        body: {name: cardTitle, isTemplate: isTemplate},
});

};
};

export default sharedDataUtils;