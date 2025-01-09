const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/homePage");
const { SearchResultsPage } = require("../pages/searchResultsPage");
const { ItemPage } = require("../pages/itemPage");
const { CartPage } = require("../pages/cartPage");
const { Logger } = require("../utils/logger");
const config = require("../config/testConfig");
test.describe("Ebay Cart Tests", () => {
  test("Verify item can be added to Cart using cart icon", async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    Logger.info("Navigating to eBay home page...");
    await homePage.navigate(config.baseUrl);
    Logger.success("Navigated to eBay successfully.");
    Logger.info(`Searching for item: ${config.searchTerm}`);
    await homePage.searchForItem(config.searchTerm);
    Logger.success("Search completed.");
    Logger.info("Clicking on the first item in search results...");
    const newPage = await searchResultsPage.clickFirstItem(); // Switch to new page
    Logger.success("Navigated to item details page in a new tab.");
    Logger.info("Adding item to cart...");
    const itemPage = new ItemPage(newPage); // Use the new page context
    await itemPage.addToCart();
    Logger.success("Item added to cart.");
    Logger.info("Verifying cart count on cart icon...");
    const cartPage = new CartPage(newPage);
    const isCartUpdated = await cartPage.verifyCartIconCount(
      config.cartExpectedCount
    );
    expect(isCartUpdated).toBeTruthy();
    Logger.success("Cart icon displays the correct item count.");
  });
});
