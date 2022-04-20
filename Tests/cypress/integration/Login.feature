Feature: Signup
  Signup with Phone number

  @SignupPage
  Scenario: No input Phone number and No check Policy
    Then SubmitButton is "Disable"

  @SignupPage
  Scenario: No input Phone number
    When I check the Policy-Checker
    Then SubmitButton is "Disable"

  @SignupPage
  Scenario: No check Policy
    When I fill phone-number "0926244589"
    Then SubmitButton is "Disable"

  @SignupPage
  Scenario: Login pass
    When I fill phone-number "0926244589"
    And I check the Policy-Checker
    Then SubmitButton is "not Disable"