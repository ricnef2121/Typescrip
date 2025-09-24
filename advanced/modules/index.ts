// import { PI, generateid } from "./utils.module";
// import { User as Person } from "./utils.module";
import * as Utils from "./utils.module"
// const myNumber = 10 * PI;
const myNumber = 10 * Utils.PI;

// const myUser: Person = { id: generateid(), name: "Ric" };
const myUser: Utils.User = { id: Utils.generateid(), name: "Ric" };

console.log(myUser)

