class SearchResultsPage {
  constructor(page) {
    this.page = page;
    this.firstItem = '(//div[contains(@class, "s-item__title")]/span)[3]'; // XPath for the first item
  }
  async clickFirstItem() {
    await this.page.waitForSelector(this.firstItem);
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"), // Wait for a new tab or page to open
      this.page.click(this.firstItem), // Click the first item
    ]);
    await newPage.waitForLoadState("domcontentloaded");
    return newPage; // Return the new page object
  }
}
module.exports = { SearchResultsPage };
