// define que es una interfaz
// interfaces allow you to define the structure of an object
interface Person {
  name: string;
  description: string;
  code?: number;
  sayHello: () => string;
}

let person1: Person = {
  name: "John",
  description: "Development",
  code: 12,
  sayHello: () => "Hola",
};

person1.code = 10;
console.log(person1)

let secondPerson: Person = {
  name: "",
  description: "",
  sayHello: () => "Hola 2",
};

secondPerson.code?.toFixed();