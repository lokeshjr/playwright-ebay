const { test, expect } = require("@playwright/test");
const { Logger } = require("../utils/logger");
const config = require("../config/testConfig");
test.describe("Coindesk API Tests", () => {
  test("Verify the response contains expected BPIs and descriptions", async ({
    request,
  }) => {
    Logger.info("Sending GET request to Coindesk API...");
    const response = await request.get(config.apiEndpoint);
    Logger.info("Verifying response status...");
    expect(response.status()).toBe(200);
    Logger.success("Response status is 200.");
    Logger.info("Parsing the response JSON...");
    const responseBody = await response.json();
    Logger.info("Verifying the response contains 3 expected BPIs...");
    const bpiKeys = Object.keys(responseBody.bpi);
    expect(bpiKeys).toEqual(expect.arrayContaining(config.expectedCurrencies));
    expect(bpiKeys.length).toBe(3);
    Logger.success(
      `Response contains the expected BPIs: ${config.expectedCurrencies.join(
        ", "
      )}`
    );
    Logger.info("Verifying GBP's description matches the expected value...");
    const gbpDescription = responseBody.bpi.GBP.description;
    expect(gbpDescription).toBe(config.expectedGBPDescription);
    Logger.success(`GBP description is "${config.expectedGBPDescription}".`);
  });
});
