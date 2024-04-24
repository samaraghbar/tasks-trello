/// <reference types = "cypress" />
import { Given, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import createBoardActions from"../../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/assertions.cy";
import createListActions from "../../../pageObjects/createlist/actions.cy";
import createListAssertions from "../../../pageObjects/createlist/assertions.cy";

const createBoardAction = new createBoardActions();
const boardName = "My first Board";
const createBoardAssertion = new createBoardAssertions();

const createlistAction = new createListActions();
const listName = "To-Do"
const createListAssertion = new createListAssertions();


Before(()=>{
    cy.loginToTrello();
    cy.wait(3000);
    createBoardAction.clickOnCreateButton();
    createBoardAction.chooseCreateBoardOption();
    createBoardAction.typeInBoardtitle(boardName);
    createBoardAction.createWorkSpaceButton();
});


Given("Click on add a list and type listname",()=>{

  createlistAction.clickInListname();
  createlistAction.typeInListName(listName);

});


When("Click on addlist button",()=>{
createlistAction.addListButton();
});


Then("The new list will be added",()=>{
createListAssertion.listNameisVisible(listName);

});


//After(()=>{

//cy.wait(3000);
//createlistAction.DeleteBoardfirst();
//cy.wait(1000);
//cy.get('.js-close-board').contains("Close board").click();
//createlistAction.clickOnCloseButton();
//createlistAction.clickOnPermanentlyDeleteBoard();
//createlistAction.deleteButton();

//});

