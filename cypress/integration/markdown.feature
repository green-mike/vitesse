Feature: Show Markdown

  Background:
    Given redirect to "about"

  Scenario: navigate to about
    Given open index page
    When click about button
    Then I see page redirect to "/about"

  Scenario: pre language exist
    Then pre language exist



