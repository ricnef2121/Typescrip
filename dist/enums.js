// enums allow you to define a set of named constants.
// list of static values
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// save staic values in a variable
var Users;
(function (Users) {
    Users["NormalUser"] = "normal";
    Users["PayedUser"] = "payed";
    Users["AdminUser"] = "admin";
    Users["MegaUSer"] = "mega";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
if (myUser === Users.AdminUser) {
    console.log("You are an admin user");
}
