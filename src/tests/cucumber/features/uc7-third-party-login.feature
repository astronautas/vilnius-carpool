Feature: Third party login
  As an user
  I want to login using third-party
  So that I start entering trips easy

  @ignore
  Scenario: Login using g+
    Given I'm logged off
    When I press on g+ login
    And I enter
      | #username         | #password |
      | carpool@tiktai.lt | Muitines3 |
    Then I see ".profile" text "Developer"

  Scenario: Login using username
    Given I am logged off
    When Login with "user1@tiktai.lt"
    Then I see ".profile_Name" text "user1@tiktai.lt"
