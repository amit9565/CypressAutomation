Feature: Testing login for a standard user

    A standard user should have glitch free login experience

    Scenario: A standard user should be able to login to SwagLabs
        Given I launch the SwagLab site 
        And I insert the standard username
        And I insert the password
        When I click the Login button
        Then I should see the products page
      Scenario: A standard user should not able to login to SwagLabs
        Given I launch the SwagLab site 
        And I insert the wrong username
        And I insert the  correct password
        When I click on the Login button
        Then I should not be able to login

   
