import Page from "./page";

class AccountPage extends Page {

    get homeContainer() { return $('.home-sticky-container')}

    waitForLoad(){
        this.homeContainer.waitForDisplayed()
    }
}

export default new AccountPage();