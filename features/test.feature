Feature: Login to Trello website

        Background:

            Given I am on login page


        Scenario Outline: As a registered user I want to login to website with bad data

            When I fill E-mail field with <email>

            And I fill Password field with <password>

            And I click Login button

            Then I see <error message> error message

        Examples:

            | email | password | error message |

            | kurak1993@gmail.com | asdasdads| Invalid password |


        Scenario Outline: As a registered user I want to login to website with good password

            When I fill E-mail field with <email>

            And I fill Password field with <password>

            And I click Login button

            Then I am logged to account and I am on account page

        Examples:

            | email | password |

            | kurak1993@gmail.com | Password123|

