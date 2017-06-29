const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
  Given(/^I open Yahoo's search page$/, () => {
    const yahoo = client.page.yahoo();

    return yahoo
      .navigate()
      .waitForElementVisible('@body', 1000);
  });

  Then(/^the Yahoo search form exists$/, () => {
    const yahoo = client.page.yahoo();

    return yahoo.assert.visible('@searchBar');
  });

});