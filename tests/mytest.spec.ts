import { test, expect} from '@playwright/test';
import { CLIENT_RENEG_LIMIT } from 'tls';

test('Verify page title', async ({page}) => {
    await page.goto('https://www.automationpractice.pl/index.php');
    let title:String = await page.title();
    console.log(title);

    await expect(page).toHaveTitle('My Shop');
})