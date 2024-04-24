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
const newName = "Samar List"

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

Given("The User click on list name",()=>{
createListAction.clickOnListName();

});

When("The User Type the New list Name and enter",()=>{
createlistAction.typeNewListName(newName);

});

Then("Make sure that list name is changed",()=>{
createListAssertion.newListNameischanged(newName).newListNameIsVisible();

});


After(()=>{

    cy.wait(3000);
    createlistAction.DeleteBoardfirst();
    cy.wait(1000);
    cy.get('.js-close-board').contains("Close board").first().click();
    createlistAction.clickOnCloseButton();
    createlistAction.clickOnPermanentlyDeleteBoard();
    createlistAction.deleteButton();
    
    });
    