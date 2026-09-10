import { test } from '@playwright/test';

class HomePage {

    constructor(page) {

        this.page = page;

        // Homepage Logo
        this.logo = page.locator('.app_logo');

        // Products
        this.products = page.locator('.inventory_item');

        // Menu Button
        this.menuButton = page.locator('#react-burger-menu-btn');

        // Cart
        this.cart = page.locator('.shopping_cart_link');

        // Product Names
        this.productNames = page.locator('.inventory_item_name');

    }


    // ======================================================
    // VERIFY HOMEPAGE
    // ======================================================

    async verifyHomePage() {

        await this.logo.waitFor();

        await test.info().attach('05 - Homepage Opened', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });

    }


    // ======================================================
    // OPEN MENU
    // ======================================================

    async openMenu() {

        await this.menuButton.click();

        await test.info().attach('06 - Menu Opened', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });

    }


    // ======================================================
    // OPEN CART
    // ======================================================

    async openCart() {

        await this.cart.click();

        await test.info().attach('07 - Cart Opened', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });

    }

}

export default HomePage;