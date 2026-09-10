import { test, expect } from '@playwright/test';

import checkoutData from '../testData/Checkout.json';

import LoginPage from '../pages/LoginPage.js';

import Checkout from '../pages/Checkoutpage.js';


test('TC 1 - Login and Checkout Product', async ({ page }) => {

    const login = new LoginPage(page);

    const checkout = new Checkout(page);

    // Selecting first dataset from JSON
    const data = checkoutData.checkoutTests[0];


    // ================= LOGIN =================

    await login.gotoURL();

    await login.login(
        data.username,
        data.password
    );


    // Verify Login
    await expect(login.message).toHaveText('Swag Labs');


    // ================= ADD PRODUCT =================

    await checkout.addToCart();


    // ================= OPEN CART =================

    await checkout.openCart();


    // Verify Product
    await expect(checkout.productName).toHaveText(data.productName);


    // ================= CHECKOUT =================

    await checkout.clickCheckout();


    // ================= CUSTOMER INFORMATION =================

    await checkout.enterFirstName(data.firstName);

    await checkout.enterLastName(data.lastName);

    await checkout.enterPostalCode(data.postalCode);


    // ================= CONTINUE =================

    await checkout.clickContinue();


    // Verify Product on Overview
    await expect(checkout.productName).toHaveText(data.productName);


    // ================= FINISH =================

    await checkout.clickFinish();


    // ================= VERIFY ORDER =================

    await expect(checkout.completeMessage).toHaveText(data.expectedMsg);

});