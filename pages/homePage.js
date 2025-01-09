class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = '[aria-label="Search for anything"]';
    this.searchButton = "#gh-btn";
  }
  async navigate(baseUrl) {
    await this.page.goto(baseUrl, { waitUntil: "domcontentloaded" });
    await this.page.waitForSelector(this.searchBox);
  }
  async searchForItem(item) {
    await this.page.fill(this.searchBox, item);
    await this.page.click(this.searchButton);
  }
}
module.exports = { HomePage };
