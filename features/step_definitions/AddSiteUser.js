// features/step_definitions/google.js
const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  Given(/^Person in charge of this task authenticates$/, () => {
  	const SignIn = client.page.LabkeyAuth();
		return SignIn
			.navigate()
			.validateForm();
	})
  Then(/^This person has got administrator permissions$/, () => {
  		return client 
  			.waitForElementVisible('th.labkey-wp-title-left', 1000)
  			.saveScreenshot('/screenshots/authenticate.png');
  			//.verify.visible('span[id=adminMenuPopupText]');
  	})
  Then(/^Administrator opens users administration$/, () => {
  		return client
  			.url('http://localhost:8080/user-showUsers.view?')
  	    	.waitForElementVisible('body', 1000);
  })
  Then(/^Adds users$/, () => {
  		return client
  			.url('http://localhost:8080/security-addUsers.view?');
  })
  Then(/^Users uploader display$/, () => {
  		return client
  			.waitForElementVisible('textarea',1000);
  })
  Then(/^Users'mail population$/, () => {
  		return client.
  			setValue('textarea[id=newUsers]', 'supp.indiv@mail.com')
  			.click('input#sendMail')
  			.click('a.labkey-button');
  })
  Then(/^Notification sending$/, () => {
  	const SignOut = client.page.LabkeyUnAuth();
		return SignOut
			.navigate()
			.Logout();
  })

})