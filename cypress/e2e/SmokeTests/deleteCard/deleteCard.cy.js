/// <reference types = "cypress" />
import { Given, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import { APIKey, APIToken } from "../../../support/constants.cy";
import sharedDataUtils from "../../../pageObjects/createCard/dataUtils.cy";
import DeleteCardActions from "../../../pageObjects/deleteCard/actions.cy";
import DeleteCardAssertions from "../../../pageObjects/deleteCard/assertions.cy";



const cardTitle ="Samar Card"; 
const boardName ="My Board";
let boardUrl, boardId;
let listId, cardId ;
const listName ="My To-Do"
const DataUtils =new sharedDataUtils;
const DeleteCardAction =new DeleteCardActions;
const DeleteCardAssertion =new DeleteCardAssertions;

Before(()=>{

 
    DataUtils.createBoard(boardName).then((resp)=>{ 
    boardUrl = resp.body.url;
    boardId =resp.body.id;

   DataUtils.createList(boardId,listName).then((resp)=>{
    listId = resp.body[0].id;


    DataUtils.createCard(listId,cardTitle)
    cardId = resp.body.id;
   });
});

cy.loginToTrello();

});


Given("Open Board",()=>{
DeleteCardAction.openBoard(boardUrl);

});

When("Choose needed card",()=>{
DeleteCardAction.chooseCard();

});

When("Click on archive card",()=>{
DeleteCardAction.clickOnArchiveButton()
DeleteCardAction.clickOnDelete()
});


Then("Card is successfully deleted",()=>{
DeleteCardAssertion.cardIsDeleted(cardTitle);

});

After(()=>{

DataUtils.deleteBoard(boardId);

});