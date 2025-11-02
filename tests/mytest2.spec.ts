import { test, expect} from '@playwright/test';

test('Verify page URL', async ({page}) => {
    await page.goto('https://www.automationpractice.pl/index.php');
    let url:String = await page.url();
    console.log(url);

    await expect(page).toHaveURL(/automationpractice/);
})