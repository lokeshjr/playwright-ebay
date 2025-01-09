class ItemPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = "a#atcBtn_btn_1";
  }
  async addToCart() {
    await this.page.waitForSelector(this.addToCartButton, { visible: true });
    await this.page.click(this.addToCartButton);
    await this.page.waitForLoadState("networkidle");
  }
}
module.exports = { ItemPage };
