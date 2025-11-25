// Different types of datatypes in javascript
// String
// Number
// Boolean
// Object
// Array
// Null -- never confuse null with zero.
// Undefined
// Symbol -- it is a unique and immutable primitive value.
// BigInt  

// old way of declaring variables
var name = "John"; // string
var age = 25; // number
var isStudent = true; // boolean

// new way of declaring variables
let city = "pune";
let score = 90;
let isloggedin = false;

// object
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28
};

let teatypes = ["green", "black", "herbal", "oolong"];

// these both are ways to declare the object.

let getScore = score ;
console.log(score);
console.log(getScore);
console.log(typeof getScore);


/* ============================================
   JAVASCRIPT DATA TYPES - DETAILED NOTES
   ============================================ */

/* 
   JavaScript data types are divided into TWO main categories:
   1. Primitive Data Types (7 types)
   2. Non-Primitive / Reference Data Types
*/

// ==========================================
// 1. PRIMITIVE DATA TYPES (7 types)
// ==========================================
// Primitives are immutable (cannot be changed) and stored by value

// 1.1 STRING - Text data
let userName = "Alice";
let message = 'Hello World';
let templateString = `My name is ${userName}`; // Template literal with backticks

// 1.2 NUMBER - Numeric values (integers and decimals)
let userAge = 25;
let price = 99.99;
let negativeNum = -10;
let infinityValue = Infinity;
let notANumber = NaN; // Not a Number (special numeric value)

// 1.3 BIGINT - Large integers beyond Number's safe range
let bigNumber = 9007199254740991n; // Note the 'n' at the end
let hugeBigInt = BigInt(9007199254740991);

// 1.4 BOOLEAN - True or false values
let isActive = true;
let hasAccess = false;

// 1.5 UNDEFINED - Variable declared but not assigned a value
let x;
console.log(x); // undefined

// 1.6 NULL - Intentional absence of value
let emptyUser = null; // Represents "nothing" or "empty"

// 1.7 SYMBOL - Unique identifier (ES6+)
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false (symbols are always unique)


// ==========================================
// 2. NON-PRIMITIVE / REFERENCE DATA TYPES
// ==========================================
// Reference types are mutable and stored by reference (memory address)

// 2.1 OBJECT - Collection of key-value pairs
let personObj = {
    name: "Alice",
    age: 30,
    isStudent: false,
    address: {
        city: "NYC",
        zip: 10001
    }
};

// 2.2 ARRAY - Ordered list of values
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "hello", true, null, {name: "Bob"}];

// 2.3 FUNCTION - Reusable block of code
function greet(name) {
    return `Hello, ${name}!`;
}
// Functions are objects in JavaScript

// 2.4 DATE - Date and time objects
let currentDate = new Date();
let specificDate = new Date('2025-11-14');

// 2.5 REGEXP - Regular expressions for pattern matching
let pattern = /[a-z]+/;
let regexPattern = new RegExp('[a-z]+');

// 2.6 MAP - Key-value pairs where keys can be any type
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set(1, 'number key');

// 2.7 SET - Collection of unique values
let uniqueNumbers = new Set([1, 2, 3, 3, 4]); // {1, 2, 3, 4}


// ==========================================
// KEY DIFFERENCES: PRIMITIVE vs REFERENCE
// ==========================================

// PRIMITIVE - Stored by VALUE (copy is created)
let a = 10;
let b = a; // b gets a COPY of the value
b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20

// REFERENCE - Stored by REFERENCE (points to same memory)
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 points to SAME array in memory
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (changed!)
console.log(arr2); // [1, 2, 3, 4]


// ==========================================
// TYPE CHECKING in JavaScript
// ==========================================

// Using typeof operator
console.log(typeof "hello");          // "string"
console.log(typeof 42);                // "number"
console.log(typeof true);              // "boolean"
console.log(typeof undefined);         // "undefined"
console.log(typeof Symbol());          // "symbol"
console.log(typeof 100n);              // "bigint"
console.log(typeof null);              // "object" ⚠️ (historical bug in JS)
console.log(typeof {});                // "object"
console.log(typeof []);                // "object" ⚠️ (arrays are objects)
console.log(typeof function(){});      // "function"

// Better ways to check specific types
console.log(Array.isArray([]));        // true
console.log(Array.isArray({}));        // false

// Check for null specifically
let value = null;
console.log(value === null);           // true

// Check if value is an object (but not null or array)
function isPlainObject(obj) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}


// ==========================================
// TRUTHY and FALSY VALUES
// ==========================================

// FALSY values (evaluate to false in boolean context):
// false, 0, -0, 0n, "", null, undefined, NaN

// TRUTHY values: Everything else!
// Examples: "hello", 1, [], {}, true, new Date(), etc.

if ("") {
    console.log("This won't print"); // "" is falsy
}

if ([]) {
    console.log("This WILL print"); // [] is truthy (even if empty!)
}


// ==========================================
// TYPE CONVERSION / COERCION
// ==========================================

// Implicit conversion (automatic)
console.log("5" + 2);        // "52" (number converted to string)
console.log("5" - 2);        // 3 (string converted to number)
console.log("5" * "2");      // 10 (both converted to numbers)

// Explicit conversion
console.log(String(123));    // "123"
console.log(Number("456"));  // 456
console.log(Boolean(0));     // false
console.log(Boolean(1));     // true

// Parsing
console.log(parseInt("10"));      // 10
console.log(parseFloat("10.5"));  // 10.5

