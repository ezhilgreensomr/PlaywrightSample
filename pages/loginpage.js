// export class LoginPage {

//   constructor(page) {

//     this.page = page;

//     // Locators
//     this.username = page.locator('[name = "email"]');

//     this.password = page.locator('[name= "pass"]');

//     this.loginBtn = page.locator('//span[text()="Log in"]');

//   }

//   // Methods

//   async gotoLoginPage() {

//     await this.page.goto('https://www.facebook.com/');

//   }

//   async login(username, password) {

//     await this.username.fill(username);

//     await this.password.fill(password);

//     await this.loginBtn.click();

//   }

// }


// export class LoginPage {

//   constructor(page) {
//     this.page = page;
//   }

//   // Locators (methods inside)
//   username() {
//     return this.page.locator('[name="email"]');
//   }

//   password() {
//     return this.page.locator('[name="pass"]');
//   }

//   loginBtn() {
//     return this.page.locator('//span[text()="Log in"]');
//   }

//   async gotoLoginPage() {
//     await this.page.goto('https://www.facebook.com/');
//   }

//   createNewAccountBtn(){

//     return this.page.locator("//span[text()='Create new account']");
//   }

//   async login(user, pass) {
//     await this.username().fill(user);
//     await this.password().fill(pass);
//     // await this.loginBtn().click();
//   }
// }


import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

  constructor(page) {
    super(page);
    this.page = page;
  }

  // Locators (methods inside)
  username() {
    return this.page.locator('[name="email"]');
  }

  password() {
    return this.page.locator('[name="pass"]');
  }

  loginBtn() {
    return this.page.locator('//span[text()="Log in"]');
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.facebook.com/');
  }

  createNewAccountBtn(){

    return this.page.locator("//span[text()='Create new account']");
  }

  async login(user, pass) {
    
    await this.enterText(this.username(), user);

    await this.enterText(this.password(), pass);

    await this.clickButton(this.loginBtn());



  }
}