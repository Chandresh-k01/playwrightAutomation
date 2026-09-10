class AddToCart {

    constructor(page) {

        this.page = page;

        // Products
        this.backpack = page.locator("[data-test='item-4-title-link']");
        this.bikeLight = page.locator("[data-test='item-0-title-link']");
        this.shirt = page.locator("[data-test='item-1-title-link']");
        this.jacket = page.locator("[data-test='item-5-title-link']");

        // Add to Cart button
        this.addToCartButton = page.locator("[data-test='add-to-cart']");

        // Cart
        this.cart = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');

        // Product name inside cart
        this.productName = page.locator('.inventory_item_name');
    }

    async openProduct(product) {
        await product.click();
    }

    async addProduct(button) {
        await button.click();
    }

    async openCart() {
        await this.cart.click();
    }
}

export default AddToCart;