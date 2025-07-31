let age :  string = "20";
let agmonths : number = 20;
let isSenior : boolean = true;
let person : object = {};

let fruists : Object[] = [{name: " apple"}]

let response : any = "Hola";
response = 20;
response = true;
response = ["hola", 123]

// void indicates no return value
function greet() : void {
    console.log("Hello, World!");
}

//  unknown is a type-safe version of any
let response2 : unknown = "Hola";
response2 = true;
if(response2){
    console.log(response2);
}

// null and undefined to represent absence of value
let response3 = null;
let response4 = undefined;


// combine types
let response5: string | undefined;
let mixed: string | number = "Hello"; 

// Custom types
type ResponseTypeService  =  number | undefined;

let reponseA : ResponseTypeService ;
let responseB : ResponseTypeService;
let responseC : ResponseTypeService;

reponseA?.toString().concat("test");
