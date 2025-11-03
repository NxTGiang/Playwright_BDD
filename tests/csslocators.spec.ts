/*
CSS (Cascading Style Sheets)

html + js + css

2 types of css locators:

1) absolute css locators
2) relative css locators

tag with id
tag with class
tag with attribute
tag with class and attribute

page.locator(css/xpath)

*/

import { test, expect, Locator } from '@playwright/test';

test("Verify css locators", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    //tag#id
    // const searchbox:Locator = page.locator("input#small-searchterms");
    // await searchbox.fill("books");

    // await expect(page.locator("input#small-searchterms")).toBeVisible();
    // await page.locator("input#small-searchterms").fill("books");
    

    //tag.class

    // await expect(page.locator("input.search-box-text")).toBeVisible();

    //tag[attribute=value]
    // await page.locator("input[name='q']").fill("books");
    // await page.locator("[name='q']").fill("books");


})