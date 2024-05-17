Feature: Move template

Scenario: Validate the user can movee teemplate 
Given Open board 
When Choose edit
And Choose move 
And Select destination and click on move 
Then The template is moved
    Feature Description