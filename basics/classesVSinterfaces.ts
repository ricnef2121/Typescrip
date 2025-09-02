// interface is a contract at follow
// inidicates what properties and methods we should have
interface PersonI {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    token: string;
    sayHello: () => string;
}


class PersonClass {
    sayHello() {
        console.log("Grrrrr")
    }
}

const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();

// interface can be impelemented 
// and class can be extended 

interface PetI {
    sayHello: () => string;
}

class PetClass {
    sayHello() {
        return "Grrrrr"
    }
}

// if we implement an interface in a class , this class must follow the contract
class Dog implements PetI {
    sayHello(){
        return "Woof Woof"
    }
}

//if we extend a class, the new class will have all the properties and methods of the parent class
class Kitty extends PetClass {}
const miCat = new Kitty();
miCat.sayHello();