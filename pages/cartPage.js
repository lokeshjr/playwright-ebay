class CartPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = "#gh-cart"; // Selector for the cart icon
    this.cartCount = "#gh-cart-n"; // Selector for the cart count element
  }
  /**
   * Wait for the cart count element to be visible and have a non-empty value.
   * @param {number} timeout - Maximum wait time for the cart count to update.
   */
  async waitForCartCountUpdate(timeout = 10000) {
    await this.page.waitForSelector(this.cartCount, {
      timeout, // Wait until the cart count becomes visible
    });
  }
  /**
   * Verify if the cart icon displays the expected number of items.
   * @param {number} expectedCount - The expected number of items in the cart.
   * @param {number} timeout - Maximum wait time for the cart count to update.
   */
  async verifyCartIconCount(expectedCount, timeout = 10000) {
    // await this.waitForCartCountUpdate(timeout); // Wait for the cart count to be visible
    const cartItemCount = await this.page.textContent(this.cartCount);
    return parseInt(cartItemCount.trim()) === expectedCount;
  }
}
module.exports = { CartPage };
