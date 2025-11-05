import { test, expect, Locator } from "@playwright/test"

//Text Input / Text Box/ Input BO

test('Text Inout Actions', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    const textBox:Locator = page.locator('#name');

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    const maxlength: string | null = await textBox.getAttribute("maxlength"); //return value of maxlength attribute of the element

    await expect(maxlength).toBe('15');

    await textBox.fill("John Cena");

    //console.log("Input value: ", await textBox.inputValue());
    await expect( await textBox.inputValue()).toBe('John Cena');

    await page.waitForTimeout(3000);


});

//Radio button 

test('Radio button Actions', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    const maleRadio:Locator = page.locator('#male'); //Male radio

    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();

    expect(await maleRadio.isChecked()).toBe(false);

    await maleRadio.check();
    await expect(maleRadio).toBeChecked();


    // await page.waitForTimeout(3000);


});

//Checkbox

test.only('Checkbox Actions', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    //Capture specific checkbox
    const sundayCheckbox:Locator = page.getByLabel('Sunday');
    await sundayCheckbox.check();

    await expect(sundayCheckbox).toBeChecked();

    //Capture all checkboxes
    const days:string[] = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];

    const checkboxes:Locator[] = days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(7);
/* 
    for(const checkbox of checkboxes)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    } */

    //uncheck last 3 checkboxes
/* 
    for(const checkbox of checkboxes.slice(-3))
    {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    } */

    // if check -> uncheck, if uncheck -> check
/*     for(const checkbox of checkboxes)
    {
        if(await checkbox.isChecked()){
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else
        {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    } */

    //random check
/* 
    const indexes:number[]=[1, 3, 6];

    for(const i of indexes)
    {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked(); 
    }
 */
    //select bassed on label
    const weekname:string = "Friday";

    for(const label of days)
    {
        if(label.toLowerCase()===weekname.toLowerCase())
        {
            const checkbox = page.getByLabel(weekname);
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }


    await page.waitForTimeout(3000);


});