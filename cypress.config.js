const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  e2e: {

    //specPattern: "**/*.feature",
    specPattern:"**/*.{feature,cy.js}",
    
    baseUrl:"https://trello.com/",
    chromeWebSecurity: false,
   
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("file:preprocessor", cucumber());
        },

        watchForFileChanges:true,
        screenshotOnRunFailure:true,
        screenshotsFolder:"MyScreenShots",
        trashAssetsBeforeRuns:true, 

  },

 
});
