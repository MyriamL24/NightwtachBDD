#features/AddSiteUser.feature

Feature: Labkey's site group adding 

Scenario: Add group to LabkeyServer

  Given Person in charge of group adding authenticates
  Given This person has got administrator permissions for this task
  Then Administrator opens group administration
  Then Creates new group
  And Group administration tool display
  Then Selects users or subgroup needed for new group
