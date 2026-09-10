import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../Utils/screenshotUtils.js';

class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.message = page.locator('.app_logo');
    }

    async gotoURL() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {

        await test.step('After APP_URL open', async () => {
            await attachStepScreenshot(this.page, '01 - After APP_URL open');
        });

        await test.step('Enter username', async () => {
            await this.username.fill(username);
            await attachStepScreenshot(this.page, '02 - After username');
        });

        await test.step('Enter password', async () => {
            await this.password.fill(password);
            await attachStepScreenshot(this.page, '03 - After password');
        });

        await test.step('Click Login', async () => {
            await this.loginButton.click();
            await attachStepScreenshot(this.page, '04 - After login click');
        });
    }
}

export default LoginPage;