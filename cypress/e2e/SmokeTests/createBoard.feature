Feature: Create New Board
Scenario: Validate that the user can create a new board
Given The user login in trello website
When Clicks on create button in navbar
And Choose create Board option
And Type in Board title input field the board name
And Choose workspace
And Clicks on create button
Then the Board will be created successfully
