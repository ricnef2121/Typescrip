class Animal {
    public name: string = "Generic animal";
    private age: number = 0;
    protected identity: string = "1111";

    constructor(){}

    sayHi(){
        console.log("Grrr", this.age)
    }
}

class Cat extends Animal {
    type: "Mestizo"
}

const myAnimal = new Animal();
myAnimal.sayHi();

const myCat = new Cat();
 