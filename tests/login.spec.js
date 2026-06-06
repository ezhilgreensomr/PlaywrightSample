// import {test, expect} from "@playwright/test"

// test('login test - valid user', async ({page})=>{

//     await page.goto("https://www.facebook.com/");

//     const title = await page.title();
//     console.log(title);

//     const url =  page.url();
//     console.log(url);

//     await page.setViewportSize({width: 1920, height: 1080});

//     await page.waitForTimeout(3000);

//     // page.close();

// });



// test('login test - invalid user', async ({page})=>{

//     await page.goto("https://www.greenstechnologys.com/");

//     const title = await page.title();
//     console.log(title);

//     const url =  page.url();
//     console.log(url);

//     await page.waitForTimeout(3000);

//     // await page.locator('//input[@name="email"]').fill('ezhil@gmail.com');
//     let txt = await page.locator("//p[contains(text(),'Training and Placements')]").textContent();
//     console.log(txt);
//     // page.close();
// });




test('login test - invalid user', async ({page})=>{

    await page.goto("https://www.greenstechnologys.com/");

    const title = await page.title();
    console.log(title);

    const url =  page.url();
    console.log(url);

    await page.waitForTimeout(3000);

    // await page.locator('//input[@name="email"]').fill('ezhil@gmail.com');
    let txt = await page.locator("//p[contains(text(),'Training and Placements')]").textContent();
    console.log(txt);
    // page.close();
});