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
let boardUrl, boardId,listId;
const listName = "My To-Do"
const DataUtils = new sharedDataUtils;

Before(()=>{

 
    DataUtils.createBoard(boardName).then((resp)=>{ 
    boardUrl = resp.body.url;
    boardId =resp.body.id;
   DataUtils.createList(boardId,listName).then((resp)=>{
    listId = resp.body.id;
   DataUtils.createCard(cardTitle,listId)
   });
});

cy.loginToTrello();


});


Given("The user clicks on card activites",()=>{


});

When("The user clicks on archive",()=>{


});

Then("The Card is deleted",()=>{


});