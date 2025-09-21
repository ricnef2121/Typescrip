// keep order in the code

// inside we can put variables, functions, clasess
namespace DatabaseEntity {
    export class User{
        constructor(public name: string){}
    }

    const myUser = new User("Ric");
    // console.log(myUser);
    
}

// In order to use the class User outside the namespace we need to export it
// const nUser = new DatabaseEntity.User("Nef");
// console.log(nUser)