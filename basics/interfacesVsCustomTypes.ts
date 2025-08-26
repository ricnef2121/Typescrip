// las interfaces nos permiten extender cierta funcionalidad
// podemos extender interfaces de otra interfaz

//los types tambien se pueden extender

interface Persona {
    nombre: string;
    edad: number;
}

interface Empleado extends Persona {
    charge: string;
}

const newEmpleado: Empleado = {
    nombre: "Ric",
    edad: 33,
    charge: ""
}

type humano = {
    nombre: string;
    edad: number;
}

interface Geek extends humano {
    hoobies: string[];
}

const newGeek: Geek = {
    nombre: "Ric",
    edad: 33,
    hoobies: []
}

// Union types 
// lo usamos para extender o unir un type con un type

type User = {
    id: number;
}

// type mas nuevas propiedades para crear un nuevo type
type Admin = User & {
    token: string;
}

type Disposable = {
    isDispoable: boolean;
}

// type con interfaces
type Employee = User & Disposable;


const myAdmin: Admin = {
    id: 1,
    token: "abc"
}

// types te permiten ser muy especifico
type Size = "S" | "M" | "L" | "XL";
type RandomValue = string | number | boolean;

//cosas que los interfaces pueden brindar y los types no
// - se pueden acomplar sin necesidad de hacerlo manualmente

// esta interface existe en otro archivo

interface Point {
    x: number;
    y: number;
}

// y podemos sobreescribirla agregando un nuevo campo , esto solo funcionara en el archivo en donde necesitemos que este modificado
interface Point {
    z: number;
}   