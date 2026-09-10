import { test, expect } from '@playwright/test';

import homePageData from '../testData/HomePage.json';

import LoginPage from '../pages/LoginPage.js';

import HomePage from '../pages/HomePage.js';


test('TC 1 - Verify Home Page', async ({ page }) => {

    // Create Page Objects
    const login = new LoginPage(page);

    const home = new HomePage(page);

    // Get Test Data
    const data = homePageData.homePageTests[0];


    // ======================================================
    // OPEN APPLICATION
    // ======================================================

    await login.gotoURL();


    // ======================================================
    // LOGIN
    // ======================================================

    await login.login(
        data.username,
        data.password
    );


    // ======================================================
    // VERIFY HOMEPAGE
    // ======================================================

    await home.verifyHomePage();

    await expect(home.logo).toHaveText(
        data.expectedLogo
    );


    // ======================================================
    // VERIFY PRODUCTS COUNT
    // ======================================================

    await expect(home.products).toHaveCount(
        data.expectedProductCount
    );


    // ======================================================
    // VERIFY MENU BUTTON
    // ======================================================

    await expect(home.menuButton).toBeVisible();


    // ======================================================
    // VERIFY CART
    // ======================================================

    await expect(home.cart).toBeVisible();

});