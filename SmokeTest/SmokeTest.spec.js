import { test, expect } from '../fixtures/testSetup.js';

import smokeData from '../testData/SmokeTest.json' assert { type: 'json' };

import LoginPage from '../pages/LoginPage.js';
import Checkout from '../pages/Checkoutpage.js';
import Logout from '../pages/Logoutpage.js';

import { attachStepScreenshot } from '../Utils/screenshotUtils.js';



test.describe('Smoke Suite', () => {

  test('Smoke Test - Complete Purchase Flow', async ({ page }) => {

    // ======================================================
    // PAGE OBJECTS
    // ======================================================

    const loginPage = new LoginPage(page);
    const checkout = new Checkout(page);
    const logout = new Logout(page);


    // ======================================================
    // TEST DATA
    // ======================================================

    const data = smokeData.smokeTests[0];


    // ======================================================
    // STEP 01 - LOGIN
    // ======================================================

    await test.step(
      'Step 01: Enter credential and login',
      async () => {

        await loginPage.login(
          data.username,
          data.password
        );

        await attachStepScreenshot(
          page,
          '01 - Enter credential and login'
        );

      }
    );


    // ======================================================
    // STEP 02 - VERIFY LOGIN / LANDING PAGE
    // ======================================================

    await test.step(
      'Step 02: Verify user is successfully logged in',
      async () => {

        await expect(page.locator('.title'))
          .toHaveText('Products');

        await attachStepScreenshot(
          page,
          '02 - Verify Products page after login'
        );

      }
    );


    // ======================================================
    // STEP 03 - ADD PRODUCT TO CART
    // ======================================================

    await test.step(
      'Step 03: Add Sauce Labs Backpack to cart',
      async () => {

        await checkout.addToCart();

        await attachStepScreenshot(
          page,
          '03 - Add Sauce Labs Backpack to cart'
        );

      }
    );


    // ======================================================
    // STEP 04 - OPEN SHOPPING CART
    // ======================================================

    await test.step(
      'Step 04: Open shopping cart',
      async () => {

        await checkout.openCart();

        await attachStepScreenshot(
          page,
          '04 - Open shopping cart'
        );

      }
    );


    // ======================================================
    // STEP 05 - VERIFY PRODUCT IN CART
    // ======================================================

    await test.step(
      'Step 05: Verify Sauce Labs Backpack is present in cart',
      async () => {

        await expect(checkout.productName)
          .toHaveText(data.productName);

        await attachStepScreenshot(
          page,
          '05 - Verify Sauce Labs Backpack is present in cart'
        );

      }
    );


    // ======================================================
    // STEP 06 - PROCEED TO CHECKOUT
    // ======================================================

    await test.step(
      'Step 06: Proceed to checkout',
      async () => {

        await checkout.clickCheckout();

        await attachStepScreenshot(
          page,
          '06 - Proceed to checkout'
        );

      }
    );


    // ======================================================
    // STEP 07 - ENTER FIRST NAME
    // ======================================================

    await test.step(
      'Step 07: Enter customer first name',
      async () => {

        await checkout.enterFirstName(
          data.firstName
        );

        await attachStepScreenshot(
          page,
          '07 - Enter customer first name'
        );

      }
    );


    // ======================================================
    // STEP 08 - ENTER LAST NAME
    // ======================================================

    await test.step(
      'Step 08: Enter customer last name',
      async () => {

        await checkout.enterLastName(
          data.lastName
        );

        await attachStepScreenshot(
          page,
          '08 - Enter customer last name'
        );

      } 
    );


    // ======================================================
    // STEP 09 - ENTER POSTAL CODE
    // ======================================================

    await test.step(
      'Step 09: Enter customer postal code',
      async () => {

        await checkout.enterPostalCode(
          data.postalCode
        );

        await attachStepScreenshot(
          page,
          '09 - Enter customer postal code'
        );

      }
    );


    // ======================================================
    // STEP 10 - CONTINUE TO ORDER OVERVIEW
    // ======================================================

    await test.step(
      'Step 10: Continue to order overview',
      async () => {

        await checkout.clickContinue();

        await attachStepScreenshot(
          page,
          '10 - Continue to order overview'
        );

      }
    );


    // ======================================================
    // STEP 11 - VERIFY PRODUCT ON ORDER OVERVIEW
    // ======================================================

    await test.step(
      'Step 11: Verify product on order overview',
      async () => {

        await expect(checkout.productName)
          .toHaveText(data.productName);

        await attachStepScreenshot(
          page,
          '11 - Verify product on order overview'
        );

      }
    );


    // ======================================================
    // STEP 12 - FINISH ORDER
    // ======================================================

    await test.step(
      'Step 12: Finish and place the order',
      async () => {

        await checkout.clickFinish();

        await attachStepScreenshot(
          page,
          '12 - Finish and place the order'
        );

      }
    );


    // ======================================================
    // STEP 13 - VERIFY ORDER COMPLETION
    // ======================================================

    await test.step(
      'Step 13: Verify order completion message',
      async () => {

        await expect(checkout.completeMessage)
          .toHaveText(data.expectedCompleteMsg);

        await attachStepScreenshot(
          page,
          '13 - Verify order completion message'
        );

      }
    );


    // ======================================================
    // STEP 14 - OPEN NAVIGATION MENU
    // ======================================================

    await test.step(
      'Step 14: Open navigation menu',
      async () => {

        await logout.openMenu();

        await attachStepScreenshot(
          page,
          '14 - Open navigation menu'
        );

      }
    );


    // ======================================================
    // STEP 15 - LOGOUT
    // ======================================================

    await test.step(
      'Step 15: Logout from SauceDemo',
      async () => {

        await logout.logout();

        await attachStepScreenshot(
          page,
          '15 - Logout from SauceDemo'
        );

      }
    );


    // ======================================================
    // STEP 16 - VERIFY LOGOUT
    // ======================================================

    await test.step(
      'Step 16: Verify user is successfully logged out',
      async () => {

        await expect(logout.loginButton)
          .toBeVisible();

        await attachStepScreenshot(
          page,
          '16 - Verify user is successfully logged out'
        );

      }
    );

  });

});

