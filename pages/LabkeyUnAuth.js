var logoutCommands={
	Logout: function(){
		return this
			.waitForElementVisible('div[class=headermenu]', 1000)
			.click('@username')
			.click('@signout');
	}
};

module.exports = {
  commands: [logoutCommands],
  url: "http://localhost:8080",
  elements: {
  	username: "#userMenuPopupText",
  	signout: '#__lk-usermenu-signout-itemEl'
  }
};