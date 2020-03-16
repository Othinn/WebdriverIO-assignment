import { Then } from 'cucumber'
import AccountPage from '../pageObjects/accountPage';
import LoginPage from '../pageObjects/loginPage';

    
Then(/^I am logged to account and I am on account page$/, function(){
    AccountPage.waitForLoad()
})

Then(/^I see ([^"]*) error message$/, function(arg){
    LoginPage.getErrorMessage().should.equal(arg)
})

 