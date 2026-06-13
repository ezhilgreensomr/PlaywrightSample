
// export class SignUp{

//     constructor(page){

//         this.page = page;

//     }

//     getFirstName(){

//         let firstname = this.page.getByRole("textbox", {name: "Name First name Surname"});

//         return firstname;
//     }

//     getSurName(){

//         return this.page.getByPlaceholder("Surname");
//     }

//     async enterFirstandSurName(firstname,surname){

//         await this.getFirstName().fill(firstname);
//         await this.getSurName().fill(surname);
//     }
// }
