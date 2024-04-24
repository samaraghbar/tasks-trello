/// <reference types = "cypress" />
import { Given, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import createBoardActions from"../../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/assertions.cy";


const createBoardAction = new createBoardActions();
const boardName = "My first Board";
const createBoardAssertion = new createBoardAssertions();


Given("The user login in trello website" , ()=>{
    cy.loginToTrello()
   cy.wait(3000)
});

When("Clicks on create button in navbar", ()=>{
createBoardAction.clickOnCreateButton();

});

When("Choose create Board option", ()=>{
    createBoardAction.chooseCreateBoardOption();

});

When("Type in Board title input field the board name", ()=>{

    createBoardAction.typeInBoardtitle(boardName);
});

When("Choose workspace", ()=>{

});

When("Clicks on create button", ()=>{
createBoardAction.createWorkSpaceButton();

});

Then("the Board will be created successfully",()=>{
createBoardAssertion.checkBoardNameContainValue(boardName).checkBoardNameisVisible();

});

