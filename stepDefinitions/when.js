import { When } from 'cucumber'
import LoginPage from '../pageObjects/loginPage'

When(/^I fill E-mail field with ([^"]*)$/, function(arg) {
    LoginPage.fillEmailInput(arg)
})

When(/^I fill Password field with ([^"]*)$/, function(arg) {
    LoginPage.fillPasswordInput(arg)
})

When(/^I click Login button$/, function() {
    LoginPage.loginButton.click()
})

