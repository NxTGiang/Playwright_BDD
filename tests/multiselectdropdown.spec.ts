import { test, expect, Locator } from "@playwright/test";

test("Multi select dropdown", async ({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //1) select option from dropdown 

    // await page.locator('#colors').selectOption(['Red', 'Blue', 'Green']); //visible text
    // await page.locator('#country').selectOption(['red', 'green', 'white']); //value attribute
    // await page.locator('#country').selectOption([{label: 'Red'}, {label: 'Green'}]); //label 
    // await page.locator('#country').selectOption([{index: 1}, {index:3}]); //index

    //2) check number of options in the dropdown
    const dropdownOptions:Locator = page.locator('#colors>option');
    await expect(dropdownOptions).toHaveCount(7);

    //3) check an option present in the dropdown
    const optionsText:string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
    console.log(optionsText);

    expect(optionsText).toContain('Greem');

    //4) printing options from the dropdown
    for(const option of optionsText)
    {
        console.log(option);
    }



    

})