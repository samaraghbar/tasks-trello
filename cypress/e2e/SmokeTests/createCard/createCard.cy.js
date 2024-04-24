/// <reference types = "cypress" />
import { Given, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import CreateCardActions from "../../../pageObjects/createCard/Actions.cy";
import CreateCardAssertions from "../../../pageObjects/createCard/Assertions.cy";
import { APIKey, APIToken } from "../../../support/constants.cy";
import sharedDataUtils from "../../../pageObjects/createCard/dataUtils.cy";

const createCardAction = new CreateCardActions();
const createCardAssertion = new CreateCardAssertions(); 

const cardTitle = "Samar Card"; 
const boardName = "My Board";
let boardUrl, boardId;
const listName = "My To-Do"
const DataUtils = new sharedDataUtils;

Before(()=>{

 
    DataUtils.createBoard(boardName).then((resp)=>{ 
    boardUrl = resp.body.url;
    boardId =resp.body.id;
   DataUtils.createList(boardId,listName);

})
cy.loginToTrello();

});



Given("The user navigate to the board",()=>{
   
createCardAction.openBoard(boardUrl);

});

When("Clicks on add a card button",()=>{
createCardAction.clickOnAddACardButton();

});

When("Types in card Title input field",()=>{
createCardAction.typeInCardTitleInputField(cardTitle);
});

When("Clicks on add card button",()=>{
createCardAction.clickOnAddCardButton();
});

Then("The card will be created successfully",()=>{


});

after(()=>{
    cy.wait(3000)
    DataUtils.deleteBoard(boardId);
})