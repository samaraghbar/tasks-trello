/// <reference types = "cypress" />
import { Given, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import { APIKey, APIToken } from "../../../support/constants.cy";
import sharedDataUtils from "../../../pageObjects/createCard/dataUtils.cy";
import CreateTemplateActions from "../../../pageObjects/createTemplate/actions.cy";
import CreateTemplateAssertions from "../../../pageObjects/createTemplate/assertions.cy";

const CreateTemplateAction = new CreateTemplateActions();
const CreateTemplateAssertion = new CreateTemplateAssertions();


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


Given("Open the needed board",()=>{
    CreateTemplateAction.openBoard(boardUrl);

});


When("Click on create template icon",()=>{
    DataUtils.createTemplate(listId,cardTitle,isTemplate);
});

Then("The template is created successfully",()=>{
CreateTemplateAssertion.templateNameisVisible(isTemplate);

});


After(()=>{

DataUtils.deleteBoard(boardId);

});
