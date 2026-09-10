class Logout {

  constructor(page) {
    this.page = page;

    // Hamburger menu button
    this.menuButton = page.locator('#react-burger-menu-btn');

    // Logout button
    this.logoutButton = page.locator('#logout_sidebar_link');

    // Login button on login page
    this.loginButton = page.locator('#login-button');
  }

  // Step 14 - Open navigation menu
  async openMenu() {
    await this.menuButton.click();

    await this.logoutButton.waitFor({
      state: 'visible'
    });
  }

  // Step 15 - Logout
  async logout() {
    // Menu is already open from openMenu()
    await this.logoutButton.click();

    await this.loginButton.waitFor({
      state: 'visible'
    });
  }
}

export default Logout;