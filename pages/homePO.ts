export class HomePO {
    private home_title_label: string;
    private home_email_input: string;
    private home_password_input: string;

    constructor() {
        this.home_title_label = '#StickyContainer > div.ui.fluid.container > div.main-content > div > h1';
        this.home_email_input = '#admin_email';
        this.home_password_input = '#admin_password';
    }

    public validatePage(): void {
        browser.$(this.home_title_label).waitForExist();
        browser.$(this.home_email_input).waitForExist();
    }

    public homeTitleLabel(): WebdriverIO.Element {
        return browser.$(this.home_title_label);
    }

    public homeEmailInput(): WebdriverIO.Element {
        return browser.$(this.home_email_input);
    }

    public homePasswordInput(): WebdriverIO.Element {
        return browser.$(this.home_password_input);
    }
}
