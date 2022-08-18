Feature: Show Basic Layout and Index

  Background:
    Given open index page

  Scenario: basic nav
    Then I see home layout

  Scenario: enter my name
    When type "Vitesse" then enter
    Then I see page redirect to "/hi/Vitesse"

  Scenario: hi page has default layout
    Given redirect to "/hi/Vitesse"
    Then I see default layout

  Scenario: click back to index
    Given redirect to "/hi/Vitesse"
    When click back button
    Then I see page redirect to "/"



