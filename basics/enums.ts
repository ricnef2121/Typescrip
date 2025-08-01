// enums allow you to define a set of named constants.
// list of static values
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// save staic values in a variable
enum Users {
    NormalUser = "normal",
    PayedUser = "payed",
    AdminUser = "admin",
    MegaUSer = "mega"
}

let myUser = Users.AdminUser;
if(myUser === Users.AdminUser) {
    console.log("You are an admin user"); 
}

 