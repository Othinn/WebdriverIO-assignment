import {Given} from 'cucumber';
import LoginPage from '../pageObjects/loginPage'



Given(/^I am on login page$/, function(){
    LoginPage.open()
    LoginPage.waitForLoad()
})



