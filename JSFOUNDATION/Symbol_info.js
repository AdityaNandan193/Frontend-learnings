// Different ways of printing in javascript

// Using console.log
console.log("Hello, World!");

process.stdout.write("Hello, World!\n");
console.table([{name: "Alice", age: 30}, {name: "Bob", age: 25}]);

let firstName = "Aditya";
let lastName = "Nandan";
let greeting = "have a great day!";   

console.log(`My name is ${firstName} ${lastName}`);
console.log(`Hello mr. ${firstName} ${lastName} , ${greeting}`);
// this method of printing is called string interpolation or template 

console.log(`Value is ${5*6}`);

let sym1 = Symbol("nandan");
let sym2 = Symbol("nandan");
console.log(sym1 == sym2)

// Symbol is a unique and immutable primitive value and may be used as the key of an Object property.
let a = Symbol("id");
let b = Symbol("id");
let c = a;
console.log(a === b); // false
console.log(a === c); // true it is same as a because it is assigned to a
// it is actually a reference type but it is primitive in nature

