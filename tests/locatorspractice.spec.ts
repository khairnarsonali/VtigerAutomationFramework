import { test, expect } from "@playwright/test";

test('locator practice', async ({ page }) => {
    await page.goto('http://www.automationpractice.pl/index.php');
    await page.locator('#search_query_top').fill('T-shirts');
    await page.locator('button[name="submit_search"]').click();

    await expect(page.locator('.product-name')).toContainText('Faded Short Sleeve T-shirts');
});