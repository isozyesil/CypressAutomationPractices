const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  projectId: 'b9bqf2',
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000, 
  pageLoadTimeout:10000,
  projectId: "9jwhgc",
  reporter:"mochawesome",
 
 
  env:
  {
    url:"https://rahulshettyacademy.com/angularpractice/"

  },

 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/Integration/Examples/*.js',
    
  },
});
