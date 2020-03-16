import Page from "./page";

class LoginPage extends Page {

    get loginAndPasswordContainer() { return $('.login-password-container')}
    get emailInput() { return this.loginAndPasswordContainer.$('#user')}
    get passwordInput() { return this.loginAndPasswordContainer.$('#password')}
    get loginButton() { return this.loginAndPasswordContainer.$('#login')}
    get errorMessage() { return $('#error .error-message')}

    fillEmailInput(email){
        this.emailInput.waitForDisplayed()
        this.emailInput.setValue(email)
    }

    fillPasswordInput(password){
        this.passwordInput.waitForDisplayed()
        this.passwordInput.setValue(password)
    }

    getErrorMessage(){
        this.errorMessage.waitForDisplayed(5000)
        return this.errorMessage.getText()
    }

    open(){
        super.open('login')
    }

    waitForLoad(){
        this.loginAndPasswordContainer.waitForDisplayed(10000)
    }
}

export default new LoginPage();