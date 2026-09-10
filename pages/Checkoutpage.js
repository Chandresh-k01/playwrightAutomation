import { test } from '@playwright/test';

class Checkout {

    constructor(page) {

        this.page = page;

        this.addProductButton = page.locator(
            '[data-test="add-to-cart-sauce-labs-backpack"]'
        );

        this.cart = page.locator('.shopping_cart_link');

        this.checkoutButton = page.locator('#checkout');

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');

        this.productName = page.locator('.inventory_item_name');

        this.finishButton = page.locator('#finish');

        this.completeMessage = page.locator('.complete-header');
    }


    async addToCart() {
        await this.addProductButton.click();
        await test.info().attach('05 - Product Added To Cart', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });
    }


    async openCart() {
        await this.cart.click();
    }


    async clickCheckout() {
        await this.checkoutButton.click();
    }


    async enterFirstName(firstName) {
        await this.firstName.fill(firstName);
    }


    async enterLastName(lastName) {
        await this.lastName.fill(lastName);
    }


    async enterPostalCode(postalCode) {
        await this.postalCode.fill(postalCode);
    }


    async clickContinue() {
        await this.continueButton.click();
    }


    async clickFinish() {
        await this.finishButton.click();
    }
}

export default Checkout;