/// <reference types = "cypress" />
import { Given, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import { APIKey, APIToken } from "../../../support/constants.cy";
import sharedDataUtils from "../../../pageObjects/createCard/dataUtils.cy";
import HideTemplateActions from "../../../pageObjects/hideTemplate/Actions.cy";
import HideTemplateAssertions from "../../../pageObjects/hideTemplate/Assertions.cy";

const HideTemplateAction = new HideTemplateActions();
const HideTemplateAssertion = new HideTemplateAssertions();

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

Given("Open Board",()=>{
HideTemplateAction.openBoard(boardUrl);

});

When("Choose edit",()=>{
HideTemplateAction. ChooseEdit();

});

When("Choose hide from list",()=>{
HideTemplateAction.chooseHideFromList();
});

Then("Template is hidden",()=>{
HideTemplateAssertion.TemplateCardNameIsHidden();

});


After(()=>{

    DataUtils.deleteBoard(boardId);
    
    });
    