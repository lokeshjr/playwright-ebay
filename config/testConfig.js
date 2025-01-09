module.exports = {
  baseUrl: "https://www.ebay.com",
  searchTerm: "book",
  cartExpectedCount: 1,
  timeout: 30000, // Default timeout for assertions
  apiEndpoint: "https://api.coindesk.com/v1/bpi/currentprice.json",
  expectedCurrencies: ["USD", "GBP", "EUR"],
  expectedGBPDescription: "British Pound Sterling",
};
