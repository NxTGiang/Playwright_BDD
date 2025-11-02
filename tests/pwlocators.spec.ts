import { test , expect, Locator} from '@playwright/test';



test("Verify Playwright locators", async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/");

    // 1. page.getByAltText() - identifier images (and similar elements) based on their alt attribute.
    // Use this locator when your element supports alt text such as image and area elements.
    const logo:Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

    // 2. page.getByText() - Find an element by the text it contains. You can match by a substring, exact string,
    // Locate by visible text
    // Use this locator to find non interactive elements like div, span, p etc.
    // For interactive elements like button, input, select etc., use getByRole() locator.

    // <p>Welcome to our store</p>
    // <div>hello</div>

    //const  text:Locator = page.getByText("Welcome to our store");
    //await expect(text).toBeVisible();

    // await expect(page.getByText("Welcome to our store")).toBeVisible(); // full string
    // await expect(page.getByText("Welcome to")).toBeVisible(); // provided substring

    await expect(page.getByText(/Welcome to\s+To\s+Our\s+Store/i)).toBeVisible(); // regular expression


    // 3. page.getByRole() - Locating by Role
    // Role locators include buttons, checkboxes, headings, links, lists, tables, and many more and follow W3C 
    // specifications for ARIA roles.
    // Prefer for interactive elements like button, input, etc.

    await page.getByRole("link", {name: "Register"}).click();
    await expect(page.getByRole("heading", {name: "Register"})).toBeVisible(); 

    // 4. page.getbyLabel() - Locate form control by lable's text
    // When to use: Ideal for form fields with visible labels.

    await page.getByLabel('First name').fill('John');
    await page.getByLabel('Last name').fill('Wick');
    await page.getByLabel('Email').fill('abc@gmail.com');

    // 5. page.getByPlaceholder() - Finds elements with a given placeholder text.
    // Best for inputs without a label but having a placeholder text.

    await page.getByPlaceholder('Search store').fill('Apple MacBook Pro 13-inch');

    // 6. page.getByTitle() to locate an element by its title attribute.
    // When to use: When your element has a meaningful title attribute.

    // const link:Locator = page.getByTitle('Shopping cart');
    // await expect(link).toHaveText('Cart');

    // 7. page.getByTestId() - Locate elements by the data-testid attribute.


})