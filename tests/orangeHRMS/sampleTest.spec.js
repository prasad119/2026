const {test, expect} = require('@playwright/test');
import {ai} from "@zerostep/playwright";

test('sample test', async ({ page }) => {
    const aiA = {page,test};
    await page.goto('https://www.google.com');
    const result = await ai("What are all the languages supported by Google?",aiA);
    console.log(result);
    await ai("enter India in the search field",aiA);
    await ai("click on Try it button",aiA);
});