Feature: End to end product page validation

    A user should able to see all the product and able to use all the Functionality.
    Scenario: As a user i should able to see all the products
        Given product page url 
        And A user should able to see product page by validating the title
        And Validate the number of products
        And Validate the name of the products
        And A user click on add to cart button it should change to remove cart status
        When add the product
        Then click on cart