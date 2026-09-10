import { test, expect } from '@playwright/test';

import addToCartData from '../testData/AddToCart.json';

import LoginPage from '../pages/LoginPage.js';
import AddToCart from '../pages/AddToCartpage.js';


test('TC 1 - Login and Add Product to Cart', async ({ page }) => {

    const login = new LoginPage(page);
    const cart = new AddToCart(page);

    const data = addToCartData.addToCartTests[0];


    // LOGIN
    await login.gotoURL();

    await login.login(
        data.username,
        data.password
    );


    // Verify Login
    await expect(login.message).toHaveText('Swag Labs');


    // Open Bolt T-Shirt
    await cart.openProduct(cart.shirt);


    // Add Product to Cart
    await cart.addProduct(cart.addToCartButton);


    // Verify Cart Badge
    await expect(cart.cartBadge).toHaveText(data.expectedMsg);


    // Open Cart
    await cart.openCart();


    // Verify Product
    await expect(cart.productName).toHaveText(data.productName[2]);

});