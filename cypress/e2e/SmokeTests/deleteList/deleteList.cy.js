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
    createBoardAssertion.checkBoardNameContainValue(boardName).checkBoardNameisVisible();
    createlistAction.clickInListname();
    createlistAction.typeInListName(listName);
    createlistAction.addListButton();
    createListAssertion.listNameisVisible(listName);
});

Given("The User Clicks on List actions",()=>{
createListAction.clickOnListActions();

});

When("Click on archives list to delete it",()=>{
cy.get('.js-close-list').contains("Archive this list").click();

});

Then("The list is deleted",()=>{
createListAssertion.listIsDeleted();

});


After(()=>{

    cy.wait(3000);
    createlistAction.DeleteBoardfirst();
    cy.wait(1000);
    cy.get('.js-close-board').contains("Close board").click();
    createlistAction.clickOnCloseButton();
    createlistAction.clickOnPermanentlyDeleteBoard();
    createlistAction.deleteButton();
    
    });
    