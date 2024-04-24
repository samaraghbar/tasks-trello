Feature: Create Card functionality 

Scenario: Validate the User can Craete a New Card
Given The user navigate to the board
When Clicks on add a card button 
And Types in card Title input field
And Clicks on add card button
Then The card will be created successfully
