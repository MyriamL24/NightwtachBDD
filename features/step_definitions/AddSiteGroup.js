// features/step_definitions/google.js
const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  Given(/^Person in charge of group adding authenticates$/, () => {
  	const SignIn = client.page.LabkeyAuth();
		return SignIn
			.navigate()
			.validateForm();
	})

  Then(/^This person has got administrator permissions for this task$/, () => {
  		return client 
  			.waitForElementVisible('th.labkey-wp-title-left', 1000)
  			.verify.visible('span[id=adminMenuPopupText]');
  	})

  Then(/^Administrator opens group administration$/, () => {
          return client
            .url('http://localhost:8080//security-permissions.view?t=sitegroups&returnUrl=%2Fhome%2Fproject-begin.view%3F')
  	//		  client.page.PageGroup().url('@AdmGroupURL')
            .waitForElementVisible('body', 1000); 	    	
  })

  Then(/^Creates new group$/, () => {
    var GroupPage = client.page.PageGroup();

  		return GroupPage
        .navigate()
        .setValue('@NewGrpFr', 'NewGrp')
        .click('@AddGrpValid');
  })

  Then(/^Group administration tool display$/, () => {
  		return client
  			.waitForElementVisible('div#panel-1059-innerCt',1000)
  })

  Then(/^Selects users or subgroup needed for new group$/, () => {    
      client
        .setValue('input[id=labkey-principalcombo-1058-inputEl]', 'supp.indiv')
        .click('span#button-1056-btnIconEl.x4-btn-icon-el');

      const SignOut = client.page.LabkeyUnAuth();
      return SignOut
        .navigate()
        .Logout();
  })

})