import { test, expect } from '@playwright/test';

test('End To End Execution TestCase', async ({ page }) => {

  await test.step('Open SauceDemo website', async () => {
    await page.goto('https://saucedemo.com/');
  });

  await test.step('Enter username', async () => {
    await page.fill('#user-name', 'standard_user');
  });

  await test.step('Enter password', async () => {
    await page.fill('#password', 'secret_sauce');
  });

  await test.step('Click Login button', async () => {
    await page.click('#login-button');
  });

  await test.step('Verify user is successfully logged in', async () => {
    await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
  });

  await test.step('Add Bolt T-Shirt to cart', async () => {
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  });

  await test.step('Open shopping cart', async () => {
    await page.click('#shopping_cart_container');
  });

  await test.step('Click Checkout button', async () => {
    await page.click('.checkout_button');
  });

  await test.step('Enter first name', async () => {
    await page.fill('#first-name', 'standard_user');
  });

  await test.step('Enter last name', async () => {
    await page.fill('#last-name', 'secret_sauce');
  });

  await test.step('Enter postal code', async () => {
    await page.fill('#postal-code', '12345');
  });

  await test.step('Continue to checkout overview', async () => {
    await page.click('#continue');
  });

  await test.step('Finish the order', async () => {
    await page.click('#finish');
  });

  await test.step('Verify order is successfully completed', async () => {
    await expect(page.locator('.complete-header'))
      .toContainText('Thank you for your order!');
  });

});