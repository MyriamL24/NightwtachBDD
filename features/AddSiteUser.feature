#features/AddSiteUser.feature

Feature: Labkey's site user adding 

Scenario: Add users to LabkeyServer

  Given Person in charge of this task authenticates
  Given This person has got administrator permissions
  Then Administrator opens users administration
  Then Adds users
  And Users uploader display
  Then Users'mail population
  And Notification sending
