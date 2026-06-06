// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.facebook.com/");

//     await page.getByLabel("Email address or mobile number").fill("abc@gmail.com");
//     // await page.getByRole("textbox", {name: 'Email address or mobile number'}).fill("abc@gmail.com");
    
//     await page.getByRole("textbox", {name: 'password'}).fill("abc123");

//     await page.getByRole("button", {name: "Log in"}).click();

//     await page.waitForTimeout(5000);

//     await page.close();


// });

// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.instagram.com/");

//     // await page.getByLabel("Mobile number, username or email").fill("abc@gmail.com");
//     await page.getByRole("textbox", {name: 'Mobile number, username or email'}).fill("abc@gmail.com");
    
//     await page.getByRole("textbox", {name: 'Password'}).fill("abc123");

//     // await page.getByRole("button", {name: "Log in"}).click();

//     await page.waitForTimeout(5000);

//     await page.close();


// });



// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://facebook.com/");

//     // await page.getByLabel("Mobile number, username or email").fill("abc@gmail.com");
//     const username = page.getByRole("textbox", {name: 'Email address or mobile number'});

//     await username.fill('greensomr');

//     await username.dblclick();

//     await username.click({button: 'right'});
   

//     // await page.getByRole("button", {name: "Log in"}).click();

//     await page.waitForTimeout(5000);

//     await page.close();


// });


// import {test} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://vinothqaacademy.com/mouse-event/");

//     await page.locator("#doubleBtn").dblclick();

//     await page.locator("#rightBtn").click({button:'right'});

//     // await page.getByLabel("Mobile number, username or email").fill("abc@gmail.com");
    
//     const source = page.locator("#dragItem");

//     const target = page.locator("#dropZone");

//     await source.dragTo(target);

//     // await page.getByRole("button", {name: "Log in"}).click();

//     await page.waitForTimeout(5000);

//     await page.close();


// });


// import {test} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.greenstechnologys.com/");
   
//     const locator = page.getByRole('link', {name: 'COURSES', exact: true});

//     await locator.hover();

//     await page.waitForTimeout(5000);

//     await page.close();


// });


// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://facebook.com/");

//     // await page.getByLabel("Mobile number, username or email").fill("abc@gmail.com");
//     const username = page.getByRole("textbox", {name: 'Email address or mobile number'});

//     await username.click();

//     await page.keyboard.type("greens");

//     await page.keyboard.press('Control+A');

//     await page.keyboard.press('Control+C');

//     await page.keyboard.press('Tab');

//     await page.keyboard.press('Control+V');
    
//     await page.keyboard.press('Enter');
   

//     // await page.getByRole("button", {name: "Log in"}).click();

//     await page.waitForTimeout(5000);

//     await page.close();


// });


// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://demo.automationtesting.in/Alerts.html");
  
//     // const btn = page.getByRole('button', {name: 'click the button to display an alert box:'});

//     // const btn = page.locator("button[onclick='alertbox()']");

//     const btn1 = page.getByRole('link', {name: 'Alert with Textbox'});
//     await btn1.click();

//     const btn2 = page.locator("button[onclick='promptbox()']");

//     page.on('dialog', async (dialog)=>{
    
//         const msg = dialog.message();
//         console.log(msg);
//         await dialog.accept("hello");
//     })

//     await btn2.click();

//     await page.waitForTimeout(5000);

//     await page.close();


// });


// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.ironspider.ca/forms/dropdowns.htm");
  
//     // const btn = page.getByRole('button', {name: 'click the button to display an alert box:'});

//     // const btn = page.locator("button[onclick='alertbox()']");

//     const drop = page.locator("select[name='coffee2']option");

//     // await drop.selectOption(["milk2", "skim"]);
//     // await drop.selectOption([{label: "Milk (2%)"}, {label: "Skim Milk"}]);
//     const datas = await drop.allTextContents();
//     console.log(datas);


//     await page.waitForTimeout(5000);

//     await page.close();


// });



// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://demo.automationtesting.in/Windows.html");
  
    
//   let [tab1] = await Promise.all([

//     page.waitForEvent('popup'),
//     page.getByRole('button', {name: 'click'}).click()

//    ]);

//    await tab1.getByRole('button',{name: 'About'}).click();


//     await page.waitForTimeout(5000);

//     await page.close();


// });


//Multiple Tabs



// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page,context})=>{

//     await page.goto("https://demo.automationtesting.in/Windows.html");
  
//     await page.getByRole('link', {name: 'Open Seperate Multiple Windows'}).click();
    
//     let [tab1] = await Promise.all([

//     context.waitForEvent('page'),
//     page.getByRole('button', {name: 'click'}).click()

//    ]);

//     let tab2 = await context.waitForEvent('page');
// // await tab1.waitForLoadState(); 
// // await tab2.waitForLoadState();


//     console.log("TAB1 URL:", await tab1.title());
// console.log("TAB2 URL:", await tab2.title());

//     await tab2.getByRole('button',{name: 'About'}).click();

//     await tab1.locator("#email").fill('hello');

//     await page.waitForTimeout(5000);


// });




// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.facebook.com/");

//     await page.getByLabel("Email address or mobile number").fill("abc@gmail.com");
//     // await page.getByRole("textbox", {name: 'Email address or mobile number'}).fill("abc@gmail.com");
    
//     await page.getByRole("textbox", {name: 'password'}).fill("abc123");

//     let btn =  page.getByRole("button", {name: "Log in"})

//     await expect(btn).toBeHidden();

//     await btn.click();

//     await page.waitForTimeout(5000);

//     await page.close();

// });



// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://vinothqaacademy.com/iframe/");


//     // let customerId = page.getByRole("textbox", {name: "Enter Customer ID/User ID"});

//     let frame = page.frameLocator("[name='employeetable']");

//     await frame.locator("#nameInput").fill("ezhil");

//     await customerId.fill("greens");
  
//     await page.waitForTimeout(5000);

//     await page.close();

// });




// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout: 60000, waitUntil: "domcontentloaded"});

//     // await page.waitForTimeout(55000);

//     let trow = page.locator("#customers tr");

//     let count  = await trow.count();

//     console.log(count);

//     await page.waitForTimeout(5000);

//     await page.close();

// });


// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout: 60000, waitUntil: "domcontentloaded"});

//     // await page.waitForTimeout(55000);

//     let trow = page.locator("#customers th");

//     let count  = await trow.count();

//     console.log(count);

//     await page.waitForTimeout(5000);

//     await page.close();

// });

// Full Table Print

// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout: 60000, waitUntil: "domcontentloaded"});

//     // await page.waitForTimeout(55000);

//     let trow = page.locator("#customers");

//     console.log(await trow.textContent());

    
//     await page.waitForTimeout(5000);

//     await page.close();

// });



//Specific Cell Value Get

// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout: 60000, waitUntil: "domcontentloaded"});

//     // await page.waitForTimeout(55000);

//     let trow = page.locator("#customers tr:nth-child(2) td:nth-child(2)");

//     console.log(await trow.textContent());
    
//     await page.waitForTimeout(5000);

//     await page.close();

// });


// //All Rows Print
// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout: 60000, waitUntil: "domcontentloaded"});

//     // await page.waitForTimeout(55000);

//     let trow = page.locator("#customers tr");

//     let count = await trow.count();

//     for(let i=0; i<count; i++){

//         let rowText = await trow.nth(i).textContent();

//         console.log(rowText);
//     }
    
//     await page.waitForTimeout(5000);

//     await page.close();

// });





// //All Rows Print
// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout: 60000, waitUntil: "domcontentloaded"});

//     // await page.waitForTimeout(55000);

//     let trow = page.locator("#customers tr:nth-child(2)");

//     console.log(await trow.textContent());
    

   
    
//     await page.waitForTimeout(5000);

//     await page.close();

// });



//All Rows Print
// import {test,expect} from "@playwright/test";

// test('login test2 - Invalid', async({page})=>{

//     await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout: 60000, waitUntil: "domcontentloaded"});

//     // await page.waitForTimeout(55000);

//     let trow = page.locator("#customers th");

//     let count = await trow.count();
//     console.log(count);

//     for(let i=0; i<count; i++){

//         let data = await trow.nth(i).textContent();
//         console.log(data);
//     }
   
//     await page.waitForTimeout(5000);

//     await page.close();

// });







// //All Rows Print
// import {test,expect} from "@playwright/test";
// import { LoginPage } from "../pages/loginpage";
// import { SignUp } from "../pages/SignupPage";

// test('login test2 - Invalid', async({page})=>{

//     // await page.goto("https://www.facebook.com/", {timeout: 60000, waitUntil: "domcontentloaded"});

//     let loginpage = new LoginPage(page);

//     await loginpage.gotoLoginPage();

//     await loginpage.login("abc123","abc");

//     await loginpage.createNewAccountBtn().click();

//     let signuppage = new SignUp(page);

//     await signuppage.enterFirstandSurName("abc","abc123");
   
//     await page.waitForTimeout(5000);

//     await page.close();

// });










// import {test,expect} from "@playwright/test";
// import { LoginPage } from "../pages/loginpage";
// import { SignUp } from "../pages/SignupPage";

// const XLSX =  require('xlsx');

// const workbook = XLSX.readFile("C:\\Users\\Lenovo\\Documents\\PlaywrightProject\\testdata\\TestDatas1.xlsx");
// const worksheet = workbook.Sheets["Sheet1"];

// const testdata = XLSX.utils.sheet_to_json(worksheet);
// console.log(testdata);

// for(const data of testdata){


// test(`login test2 - ${data.username}`, async({page})=>{

//     await page.goto("https://www.facebook.com/", {timeout: 60000, waitUntil: "domcontentloaded"});

//     let loginpage = new LoginPage(page);

//     await loginpage.gotoLoginPage();

//     await loginpage.login(data.username, data.password);
   
//     await page.waitForTimeout(5000);

//     await page.close();

// });

// }



//All Rows Print
import {test,expect} from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { SignUp } from "../pages/SignupPage";

test('login test2 - Invalid', async({page})=>{

    await page.goto("https://www.facebook.com/", {timeout: 60000, waitUntil: "domcontentloaded"});

    let loginpage = new LoginPage(page);

    await loginpage.login("abc123","abc");


    await loginpage.createNewAccountBtn().click();

    let signuppage = new SignUp(page);

    await signuppage.enterFirstandSurName("abc","abc123");
   
    await page.waitForTimeout(5000);

    await page.close();

    console.log("hello");

});













