import { test, expect } from '@playwright/test';

import logoutData from '../testData/Logout.json';
import LoginPage from '../pages/LoginPage.js';
import Logoutpage from '../pages/Logoutpage.js';

test('TC 1 - Login and Logout', async ({ page }) => {

    const login = new LoginPage(page);
    const logout = new Logoutpage(page);

    const data = logoutData;

    // Open Application
    await login.gotoURL();

    // Login
    await login.login(
        data.username,
        data.password
    );

    // Verify Login
    await expect(login.message.first()).toHaveText(data.expected);

    // Open Menu
    await logout.openMenu();

    // Logout
    await logout.logout();

    // Verify Logout
    await expect(logout.loginButton).toBeVisible();

});