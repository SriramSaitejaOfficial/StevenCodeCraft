let favouriteCar = "Tesla"; //String variable
let age = 30; //Number variable
let isEmployed = true; //Boolean variable
let hobbies = ["reading", "traveling", "coding"]; //Array variable
let person = { name: "Alice", age: 25 }; //Object variable
let undefinedVariable; //Undefined variable
let nullVariable = null; //Null variable
let pi = 3.14; //Float variable
let bigNumber = 12345678901234567890n; //BigInt variable
let symbolVariable = Symbol("unique"); //Symbol variable
let date = new Date(); //Date variable
let regex = /ab+c/; //RegExp variable
let functionVariable = function() { return "Hello, World!"; }; //Function variable
let bigDecimal = 123.456; //BigDecimal variable (not a native type in JavaScript, but can be represented as a string or using libraries)
let buffer = new ArrayBuffer(16); //ArrayBuffer variable
let typedArray = new Uint8Array(buffer); //TypedArray variable
let mapVariable = new Map(); //Map variable
let setVariable = new Set(); //Set variable 
let weakMapVariable = new WeakMap(); //WeakMap variable
let weakSetVariable = new WeakSet(); //WeakSet variable
let promiseVariable = new Promise((resolve, reject) => { resolve("Promise resolved!"); }); //Promise variable
//Variables can be reassigned

favouriteCar = "Ford"; //Reassigning the variable
console.log(favouriteCar); //Output: Ford

//Variables can be declared using var, let, or const
//Using let allows for block scope, while var is function scoped
//Primitive data types in JavaScript include string, number, boolean, null, undefined, symbol, bigint
//Non-primitive data types include object, array, function, date, regex, map, set, weakmap, weakset, promise
//Primitives are immutable, meaning their value cannot be changed once created
//Non-primitives are mutable, meaning their properties can be changed
