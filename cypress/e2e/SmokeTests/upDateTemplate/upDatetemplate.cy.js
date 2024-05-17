/// <reference types = "cypress" />
import { Given, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import { APIKey, APIToken } from "../../../support/constants.cy";
import sharedDataUtils from "../../../pageObjects/createCard/dataUtils.cy";
import UpdateTemplateNameAssertions from "../../../pageObjects/upDateTemplate/Assertions.cy";
import UpdateTemplateNameActions from "../../../pageObjects/upDateTemplate/Actions.cy";


const UpdateTemplateNameAction = new UpdateTemplateNameActions();
const UpdateTemplateNameAssertion = new UpdateTemplateNameAssertions();


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

Given("The User Open the board",()=>{
    openBoard(boardUrl);

});

When("Click on edit button",()=>{
UpdateTemplateNameAction.clickOnEditelist();

});

When("Enter new name",()=>{
UpdateTemplateNameAction.typeInNewName(tempName);

});


Then("The name is updated successfully",()=>{
UpdateTemplateNameAssertion.newNameIsUpdated(tempName);

});

After(()=>{

    DataUtils.deleteBoard(boardId);
    
    });