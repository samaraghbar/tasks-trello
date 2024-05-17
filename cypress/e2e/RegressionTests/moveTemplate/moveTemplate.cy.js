/// <reference types = "cypress" />
import { Given, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import { APIKey, APIToken } from "../../../support/constants.cy";
import sharedDataUtils from "../../../pageObjects/createCard/dataUtils.cy";
import MoveTemplateActions from "../../../pageObjects/moveTemplate/actions.cy";
import MoveTemplateAssertions from "../../../pageObjects/moveTemplate/assertions.cy";

const MoveTemplateAction = new MoveTemplateActions();
const MoveTemplateAssertion = new MoveTemplateAssertions();

const cardTitle = "Samar Card"; 
const boardName = "My Board";
let boardUrl, boardId;
let listId, cardUrl, cardId;
let TempId;
const listName = "My To-Do"
const DataUtils = new sharedDataUtils;
const tempName = "Card Template"


Before(()=>{

 
    DataUtils.createBoard(boardName).then((resp)=>{ 
    boardUrl = resp.body.url;
    boardId =resp.body.id;

   DataUtils.createList(boardId,listName).then((resp)=>{
    listId= resp.body[0].id;


    DataUtils.createCard(listId,cardTitle);
});
    });

cy.loginToTrello();

});

Given("Open board",()=>{
MoveTemplateAction.openBoard(boardUrl);
});

When("Choose edit",()=>{
MoveTemplateAction.clickOnEdit();
});

When("Choose move",()=>{
MoveTemplateAction.clickOnMove();
});

When("Select destination and click on move",()=>{
MoveTemplateAction.chooseDestination();
});

Then("The template is moved",()=>{
MoveTemplateAssertion.theOldCardTemplate().theNewCardTemplate();
});



After(()=>{

    DataUtils.deleteBoard(boardId);
    
    });
    