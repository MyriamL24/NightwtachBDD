var loginCommands={
	validateForm: function(){
		return this
			.waitForElementVisible('div[class=headermenu]', 1000)
			.click('@signin')
			.waitForElementVisible('div[class=auth-form-body]', 1000)
			.setValue('@ident', 'myriam.lopez@u-bordeaux.fr')
			.setValue('@passwd', 'EHVAlabkey')
			.waitForElementVisible('div.auth-form-body', 1000)			
			.click('@submit');		
	}
};

module.exports = {
  commands: [loginCommands],
  /*url: 'http://localhost:8080',*/
  url: "http://localhost:8080",
  elements: {
  	signin: 'a.labkey-nomenu-text-link',
    ident:  'input[id=email]',
    passwd: 'input[id=password]',
    submit: 'a.labkey-button.signin-btn'  	
  }
};