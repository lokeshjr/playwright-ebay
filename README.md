# Playwright eBay Automation Project

## Description

This project uses Playwright to automate interactions with the eBay website. It includes scripts for various tasks such as searching for items, bidding, and checking order statuses.

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Usage

To run the automation scripts, use the following command:

```bash
npx playwright test
```

You can also specify individual test files:

```bash
npx playwright test tests/cart.spec.ts --project=chrome --headed
```

## API Tests

To run the API tests, use the following command:

```bash
npx playwright test tests/coindesk.spec.ts
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
