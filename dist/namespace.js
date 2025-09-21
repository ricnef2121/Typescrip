// keep order in the code
// inside we can put variables, functions, clasess
var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Ric");
    // console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
// In order to use the class User outside the namespace we need to export it
// const nUser = new DatabaseEntity.User("Nef");
// console.log(nUser)
