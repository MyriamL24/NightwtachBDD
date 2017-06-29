// features/step_definitions/google.js
const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  Given(/^User enter identifiant and password and then submit$/, () => {
  		const SignIn = client.page.LabkeyAuth();

		return SignIn
			.navigate()
			.validateForm();
	})
})
