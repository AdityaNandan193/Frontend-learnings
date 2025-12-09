// standard function 

// function greet(name){
//     console.log(`Hello, mr ${name}`)
// }
// greet("Aditya");

//  challenge 1

function makeTea(typeofTea){
    return `making you a cup of ${typeofTea} tea.`;
}
let result = makeTea("green");
// console.log(result);

// challenge 2

function orderTea(teatype){
    function confirmOrder(){
        return `Order confirmed: ${teatype} tea.`;
    }
    result = confirmOrder();
    return result;
}
let order1 = orderTea("black");
// console.log(order1);

// challenge 3
// arrow function :-
const calculateTotal = (price, quantity) => {
    return price * quantity;
}
// or another way 

// const calculateTotal2 = (price, quantity) => price * quantity;

let totalCost = calculateTotal(100,9);
// console.log(`Total cost is ${totalCost}`)

// challenge 4

function makingTea(teaType){
    return `Making a cup of ${teaType} tea.`;
}
function processTeaOrder(callingfunc){
    let orderResult = callingfunc("earl grey");
    console.log(orderResult);
}
processTeaOrder(makingTea);


// Function as a parameter
function greet(name) {
    return `Hello, ${name}!`;
}

// Another function that RECEIVES a function as parameter
function processUser(userName, callingfunc) {
    let result = callingfunc(userName);  // Call the passed function
    console.log(result);
}

// Pass greet function as an argument
processUser("Alice", greet);  // Output: Hello, Alice!


// challenge 5

function createTeaMaker(name){
    let score = 100;
    return function makeTea(teaType){
        score -= 10;
        return `Making a cup of ${teaType} tea for ${name}. Your score is ${score}.`;
    }
}

let teaforAditya = createTeaMaker("Aditya");
let tea1 = teaforAditya("milk");
console.log(tea1);
let tea2 = teaforAditya("green");
console.log(tea2);


/* ============================================
   JAVASCRIPT FUNCTIONS - NOTES
   ============================================

   1. BASIC FUNCTION SYNTAX:
      function name(parameters) {
          return value;
      }
      - Reusable code block
      - Can accept parameters, return values

   2. ARROW FUNCTIONS (ES6):
      const name = (params) => expression
      const name = (params) => { statements }
      
      Key differences:
      - Shorter syntax
      - No own 'this' (inherits from parent)
      - No 'arguments' object
      - Cannot use 'new'
      
      Use for: callbacks, short functions
      Don't use for: object methods, constructors

   3. FUNCTIONS AS PARAMETERS (CALLBACKS):
      function process(data, callback) {
          let result = callback(data);
          return result;
      }
      
      - Pass functions to other functions
      - Enables flexible, reusable code
      - Used in: array methods, event handlers, async operations
      
      Example: array.map(num => num * 2)

   4. CLOSURES:
      function outer(x) {
          let data = x;
          return function inner(y) {
              return data + y;  // inner remembers 'data'
          }
      }
      
      - Inner function remembers outer function's variables
      - Variables persist across multiple calls
      - Creates private data (encapsulation)
      - Each closure is independent
      
      Use for: private variables, state preservation, factory functions

   5. PARAMETER vs ARGUMENT:
      Parameter: Variable in function definition (placeholder)
      Argument: Actual value passed when calling (real data)
      
      function greet(name) { }  // 'name' is parameter
      greet("Alice");           // "Alice" is argument

   ============================================ */






