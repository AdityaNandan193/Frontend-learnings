let addition = 4+3;
console.log("The sum is " + addition);

let score1 = 89;
let score2 = 90;

let average = (score1+score2)/2;
console.log("The average score is " + average);

console.log("The remainder of 10 divided by 3 is " + (10 % 3))
let a = 5;
console.log("power of a to 4 is " + (a ** 4));

let myscore = 10;
myscore++;
console.log("My score after increment is " + myscore);
myscore--;
console.log("My score after decrement is " + myscore);

// Comparison operators
/*
COMPARISON OPERATORS IN JAVASCRIPT
==================================

Comparison operators compare two values and return a boolean (true or false).

Basic Comparison Operators:
--------------------------

1. == (Equal to) - Compares values with type conversion
   Example:
   5 == "5"           // true (converts string to number)
   0 == false         // true
   null == undefined  // true

2. === (Strict equal to) - Compares values AND types (no conversion)
   Example:
   5 === "5"          // false (different types)
   5 === 5            // true
   0 === false        // false (different types)

3. != (Not equal to) - With type conversion
   Example:
   5 != "6"           // true
   5 != "5"           // false

4. !== (Strict not equal to) - No type conversion
   Example:
   5 !== "5"          // true (different types)
   5 !== 5            // false

5. > (Greater than)
   Example:
   10 > 5             // true
   5 > 10             // false

6. < (Less than)
   Example:
   5 < 10             // true
   10 < 5             // false

7. >= (Greater than or equal to)
   Example:
   10 >= 10           // true
   10 >= 5            // true

8. <= (Less than or equal to)
   Example:
   5 <= 10            // true
   5 <= 5             // true

Important Points:
----------------
- Always prefer === and !== over == and != to avoid unexpected type conversions
- String comparisons are lexicographic (dictionary order):
  "apple" < "banana"  // true
  "10" < "2"          // true (string comparison, not numeric)
  
- null and undefined are only equal to each other with ==:
  null == undefined   // true
  null === undefined  // false
  
- Comparing different types with relational operators converts to numbers:
  "10" > 5           // true (string "10" → number 10)

Best Practice:
-------------
Use strict equality (=== and !==) to avoid bugs from unexpected type coercion.
*/

// Assignment operators
/*
ASSIGNMENT OPERATORS IN JAVASCRIPT
==================================

Assignment operators assign values to variables.

Basic Assignment Operators:
--------------------------

1. = (Assignment) - Assigns a value to a variable
   Example:
   let x = 10;         // x is 10
   let name = "John";  // name is "John"

2. += (Addition assignment) - Adds and assigns
   Example:
   let x = 5;
   x += 3;             // x = x + 3 → x is now 8
   
   let str = "Hello";
   str += " World";    // str is now "Hello World"

3. -= (Subtraction assignment) - Subtracts and assigns
   Example:
   let x = 10;
   x -= 4;             // x = x - 4 → x is now 6

4. *= (Multiplication assignment) - Multiplies and assigns
   Example:
   let x = 5;
   x *= 3;             // x = x * 3 → x is now 15

5. /= (Division assignment) - Divides and assigns
   Example:
   let x = 20;
   x /= 4;             // x = x / 4 → x is now 5

6. %= (Remainder assignment) - Gets remainder and assigns
   Example:
   let x = 10;
   x %= 3;             // x = x % 3 → x is now 1

7. **= (Exponentiation assignment) - Raises to power and assigns
   Example:
   let x = 2;
   x **= 3;            // x = x ** 3 → x is now 8

Bitwise Assignment Operators:
----------------------------

8. &= (Bitwise AND assignment)
   Example:
   let x = 5;
   x &= 3;             // x = x & 3

9. |= (Bitwise OR assignment)
   Example:
   let x = 5;
   x |= 3;             // x = x | 3

10. ^= (Bitwise XOR assignment)
    Example:
    let x = 5;
    x ^= 3;            // x = x ^ 3

11. <<= (Left shift assignment)
    Example:
    let x = 5;
    x <<= 2;           // x = x << 2

12. >>= (Right shift assignment)
    Example:
    let x = 5;
    x >>= 1;           // x = x >> 1

Important Points:
----------------
- Compound assignment operators (+=, -=, etc.) are shorthand for longer expressions
- They modify the variable in place
- Common use with counters and accumulators:
  let count = 0;
  count += 1;        // Increment by 1 (same as count = count + 1)
  
  let total = 100;
  total -= 20;       // Subtract 20 from total

- += with strings performs concatenation:
  let message = "Hello";
  message += " World";  // message is "Hello World"

Best Practice:
-------------
Use compound assignment operators (+=, -=, etc.) instead of the longer form 
for cleaner, more readable code.
*/

// Logical operators
/*
LOGICAL OPERATORS IN JAVASCRIPT
================================

Logical operators are used to combine or invert boolean values and return a boolean result.

Basic Logical Operators:
-----------------------

1. && (Logical AND) - Returns true if BOTH operands are true
   Example:
   true && true        // true
   true && false       // false
   false && true       // false
   false && false      // false
   
   let age = 25;
   let hasLicense = true;
   if (age >= 18 && hasLicense) {
       console.log("Can drive");  // Executes if both conditions are true
   }

2. || (Logical OR) - Returns true if AT LEAST ONE operand is true
   Example:
   true || true        // true
   true || false       // true
   false || true       // true
   false || false      // false
   
   let isWeekend = true;
   let isHoliday = false;
   if (isWeekend || isHoliday) {
       console.log("No work today");  // Executes if either is true
   }

3. ! (Logical NOT) - Inverts the boolean value
   Example:
   !true               // false
   !false              // true
   
   let isLoggedIn = false;
   if (!isLoggedIn) {
       console.log("Please log in");  // Executes because isLoggedIn is false
   }

Short-Circuit Evaluation:
------------------------

AND (&&) - Stops at first falsy value
   let result = false && "Hello";     // false (doesn't check "Hello")
   let result2 = true && "Hello";     // "Hello"
   let result3 = 0 && "Hello";        // 0 (0 is falsy)

OR (||) - Stops at first truthy value
   let result = true || "Hello";      // true (doesn't check "Hello")
   let result2 = false || "Hello";    // "Hello"
   let result3 = 0 || "Default";      // "Default"

   // Common use: default values
   let username = userInput || "Guest";  // If userInput is empty, use "Guest"

Truthy and Falsy Values:
------------------------

Falsy values (treated as false in logical context):
   - false
   - 0
   - "" (empty string)
   - null
   - undefined
   - NaN

Truthy values - Everything else, including:
   - true
   - Any non-zero number
   - Any non-empty string
   - Objects and arrays (even empty ones)
   - "0" (string zero)
   - "false" (string false)

Combining Logical Operators:
---------------------------
   let age = 25;
   let hasTicket = true;
   let hasID = true;

   // Multiple conditions
   if (age >= 18 && (hasTicket || hasID)) {
       console.log("Entry allowed");
   }

   // Negation with combinations
   if (!(age < 18) && hasTicket) {
       console.log("Adult with ticket");
   }

Logical Assignment Operators (ES2021):
-------------------------------------

1. &&= (Logical AND assignment) - Assigns only if left side is truthy
   Example:
   let x = 10;
   x &&= 20;           // x is now 20 (because 10 is truthy)
   
   let y = 0;
   y &&= 20;           // y is still 0 (because 0 is falsy)

2. ||= (Logical OR assignment) - Assigns only if left side is falsy
   Example:
   let x = 0;
   x ||= 10;           // x is now 10 (because 0 is falsy)
   
   let y = 5;
   y ||= 10;           // y is still 5 (because 5 is truthy)

3. ??= (Nullish coalescing assignment) - Assigns only if left side is null or undefined
   Example:
   let x = null;
   x ??= 10;           // x is now 10
   
   let y = 0;
   y ??= 10;           // y is still 0 (0 is not null/undefined)

Important Points:
----------------
- Logical operators can work with non-boolean values
- They return the actual value, not just true/false (in expressions)
- Use parentheses () to clarify order of operations
- && has higher precedence than ||

Common Patterns:
---------------
   // Guard pattern (check before accessing)
   user && user.name       // Only access name if user exists

   // Default values
   let name = userName || "Anonymous";

   // Multiple fallbacks
   let value = option1 || option2 || option3 || "default";

   // Conditional execution
   isValid && processData();  // Only run if isValid is true

Best Practice:
-------------
- Use logical operators for combining conditions in if statements
- Leverage short-circuit evaluation for performance and safety
- Use ?? (nullish coalescing) instead of || when you want to allow falsy values like 0 or ""
*/

// Arithmetic operators
/*
ARITHMETIC OPERATORS IN JAVASCRIPT
==================================

Arithmetic operators perform mathematical operations on numbers.

Basic Arithmetic Operators:
--------------------------

1. + (Addition) - Adds two numbers
   Example:
   5 + 3              // 8
   let sum = 10 + 20; // 30

2. - (Subtraction) - Subtracts second number from first
   Example:
   10 - 4             // 6
   let diff = 50 - 20; // 30

3. * (Multiplication) - Multiplies two numbers
   Example:
   5 * 3              // 15
   let product = 7 * 8; // 56

4. / (Division) - Divides first number by second
   Example:
   20 / 4             // 5
   15 / 2             // 7.5
   10 / 0             // Infinity

5. % (Modulus/Remainder) - Returns remainder after division
   Example:
   10 % 3             // 1
   15 % 4             // 3
   20 % 5             // 0

6. ** (Exponentiation) - Raises first number to power of second
   Example:
   2 ** 3             // 8 (2 * 2 * 2)
   5 ** 2             // 25
   10 ** 0            // 1

Unary Arithmetic Operators:
--------------------------

7. ++ (Increment) - Increases value by 1
   Prefix: ++x (increment first, then return)
   Postfix: x++ (return first, then increment)
   
   Example:
   let x = 5;
   x++;               // x is now 6 (postfix)
   ++x;               // x is now 7 (prefix)
   
   let a = 5;
   let b = a++;       // b = 5, a = 6 (return then increment)
   let c = ++a;       // c = 7, a = 7 (increment then return)

8. -- (Decrement) - Decreases value by 1
   Prefix: --x (decrement first, then return)
   Postfix: x-- (return first, then decrement)
   
   Example:
   let x = 5;
   x--;               // x is now 4
   --x;               // x is now 3

9. + (Unary plus) - Converts operand to number
   Example:
   +"5"               // 5 (number)
   +true              // 1
   +false             // 0

10. - (Unary negation) - Converts to number and negates
    Example:
    -5                // -5
    -"10"             // -10
    -true             // -1

Important Points:
----------------
- Division by zero returns Infinity (not an error)
- % is remainder, not modulo (different for negative numbers)
- ** is right-associative: 2 ** 3 ** 2 = 2 ** 9 = 512
- Increment/decrement only work on variables, not values
- Mixing prefix/postfix in complex expressions can be confusing

Order of Operations (PEMDAS):
----------------------------
1. Parentheses ()
2. Exponentiation **
3. Multiplication *, Division /, Modulus %
4. Addition +, Subtraction -

Best Practice:
-------------
- Use parentheses to make order of operations clear
- Avoid using increment/decrement in complex expressions
- Be careful with floating-point arithmetic (0.1 + 0.2 !== 0.3)
*/

// Ternary/Conditional operator
/*
TERNARY/CONDITIONAL OPERATOR IN JAVASCRIPT
==========================================

The ternary operator is a shorthand for if-else statements. It's the only operator 
that takes three operands.

Syntax:
------
condition ? expressionIfTrue : expressionIfFalse

Examples:
--------

1. Basic usage:
   let age = 20;
   let canVote = age >= 18 ? "Yes" : "No";  // "Yes"
   
2. Assigning values:
   let score = 85;
   let grade = score >= 90 ? "A" : 
               score >= 80 ? "B" : 
               score >= 70 ? "C" : "F";
   
3. Inline conditions:
   console.log(temperature > 30 ? "Hot" : "Cold");
   
4. With function calls:
   let result = isValid ? processData() : showError();
   
5. Nested ternary (use sparingly):
   let speed = 100;
   let message = speed > 120 ? "Too fast" :
                 speed > 80 ? "Fast" :
                 speed > 50 ? "Normal" : "Slow";

Important Points:
----------------
- Returns a value (unlike if-else which is a statement)
- Both expressions are evaluated based on condition
- Can be nested but reduces readability
- Useful for inline conditional assignments
- Short-circuit evaluation applies

Best Practice:
-------------
- Use for simple conditions and assignments
- Avoid deeply nested ternary operators (use if-else instead)
- Keep expressions short and readable
- Format multi-line ternary for clarity
*/

// String operators
/*
STRING OPERATORS IN JAVASCRIPT
==============================

String operators are used to work with string values.

1. + (Concatenation) - Joins two or more strings
   Example:
   "Hello" + " " + "World"        // "Hello World"
   let firstName = "John";
   let lastName = "Doe";
   let fullName = firstName + " " + lastName;  // "John Doe"
   
   // Concatenating with numbers (converts to string)
   "Score: " + 100                // "Score: 100"
   5 + " items"                   // "5 items"
   "5" + 5                        // "55" (both become strings)

2. += (Concatenation assignment) - Appends string and assigns
   Example:
   let message = "Hello";
   message += " World";           // "Hello World"
   message += "!";                // "Hello World!"

Template Literals (Modern approach):
-----------------------------------
   Using backticks ` and ${} for interpolation
   
   let name = "Alice";
   let age = 25;
   let message = `My name is ${name} and I am ${age} years old`;
   // "My name is Alice and I am 25 years old"
   
   // Multi-line strings
   let text = `Line 1
   Line 2
   Line 3`;
   
   // Expression evaluation
   let price = 100;
   let tax = 0.1;
   console.log(`Total: $${price * (1 + tax)}`);  // "Total: $110"

Important Points:
----------------
- + operator behaves differently with strings vs numbers
- If any operand is a string, + performs concatenation
- "5" + 5 = "55" (string), but "5" - 5 = 0 (number)
- Template literals are preferred in modern JavaScript

Best Practice:
-------------
- Use template literals (` `) instead of string concatenation
- Be aware of type coercion when mixing strings and numbers
- Use toString() or String() for explicit conversions
*/

// Type operators
/*
TYPE OPERATORS IN JAVASCRIPT
============================

Type operators are used to check or determine the type of values.

1. typeof - Returns the type of a variable or expression
   
   Syntax: typeof operand
   
   Examples:
   typeof 42                      // "number"
   typeof "Hello"                 // "string"
   typeof true                    // "boolean"
   typeof undefined               // "undefined"
   typeof null                    // "object" (known bug in JavaScript)
   typeof {name: "John"}          // "object"
   typeof [1, 2, 3]               // "object"
   typeof function() {}           // "function"
   typeof Symbol("id")            // "symbol"
   typeof 10n                     // "bigint"
   
   let x;
   console.log(typeof x);         // "undefined"
   
   let age = 25;
   if (typeof age === "number") {
       console.log("Age is a number");
   }

2. instanceof - Tests if object is an instance of a class/constructor
   
   Syntax: object instanceof Constructor
   
   Examples:
   let arr = [1, 2, 3];
   arr instanceof Array           // true
   arr instanceof Object          // true
   
   let date = new Date();
   date instanceof Date           // true
   date instanceof Object         // true
   date instanceof Array          // false
   
   function Person(name) {
       this.name = name;
   }
   let john = new Person("John");
   john instanceof Person         // true
   john instanceof Object         // true
   
   "hello" instanceof String      // false (primitive, not object)
   new String("hello") instanceof String  // true (object)

Important Points:
----------------
- typeof null returns "object" (historical bug, not fixed for compatibility)
- typeof returns "object" for arrays and null
- Use Array.isArray() to check for arrays
- instanceof checks the prototype chain
- Primitives won't return true for instanceof (except when wrapped as objects)

Best Practice:
-------------
- Use typeof for primitive type checking
- Use instanceof for object type checking
- Use Array.isArray() instead of instanceof Array
- Be careful with typeof null (use === null instead)
*/

// Nullish coalescing operator
/*
NULLISH COALESCING OPERATOR (??) IN JAVASCRIPT
==============================================

The nullish coalescing operator (??) returns the right operand when the left 
operand is null or undefined, otherwise returns the left operand.

Syntax:
------
leftValue ?? rightValue

Examples:
--------

1. Basic usage:
   let name = null;
   let displayName = name ?? "Guest";     // "Guest"
   
   let count = undefined;
   let value = count ?? 10;               // 10
   
2. Difference from || (Logical OR):
   let score = 0;
   console.log(score || 100);             // 100 (0 is falsy)
   console.log(score ?? 100);             // 0 (0 is not null/undefined)
   
   let text = "";
   console.log(text || "Default");        // "Default" ("" is falsy)
   console.log(text ?? "Default");        // "" ("" is not null/undefined)
   
3. Chaining multiple values:
   let value = option1 ?? option2 ?? option3 ?? "default";
   
4. With optional values:
   let userAge = user.age ?? 18;          // Use 18 if age is null/undefined
   
5. Function parameters:
   function greet(name) {
       name = name ?? "Friend";
       console.log(`Hello, ${name}!`);
   }
   greet();                               // "Hello, Friend!"
   greet(null);                           // "Hello, Friend!"
   greet("Alice");                        // "Hello, Alice!"

When to Use ?? vs ||:
--------------------
Use ?? when:
- You want to allow falsy values like 0, "", false
- You only want to replace null or undefined

Use || when:
- You want to replace any falsy value (0, "", false, null, undefined, NaN)

Important Points:
----------------
- Only null and undefined trigger the right operand
- Cannot combine directly with && or || without parentheses
  // Error: value ?? default || other
  // Correct: (value ?? default) || other
  
- More precise than || for default values
- Added in ES2020

Best Practice:
-------------
- Use ?? instead of || when you want to preserve 0, "", and false
- Prefer ?? for default parameter values
- Combine with optional chaining (?.) for safe property access
*/

// Optional chaining operator
/*
OPTIONAL CHAINING OPERATOR (?.) IN JAVASCRIPT
=============================================

The optional chaining operator (?.) allows you to safely access nested object 
properties without having to check if each reference is valid.

Syntax:
------
obj?.property
obj?.[expression]
func?.()

Examples:
--------

1. Property access:
   let user = {
       name: "John",
       address: {
           city: "New York"
       }
   };
   
   console.log(user?.name);                    // "John"
   console.log(user?.address?.city);           // "New York"
   console.log(user?.contact?.phone);          // undefined (no error)
   
   // Without optional chaining (old way):
   let phone = user && user.contact && user.contact.phone;
   
   // With optional chaining (modern):
   let phone = user?.contact?.phone;

2. Array access:
   let users = null;
   console.log(users?.[0]);                    // undefined (no error)
   
   let arr = [1, 2, 3];
   console.log(arr?.[5]);                      // undefined

3. Function calls:
   let obj = {
       method: function() {
           return "Hello";
       }
   };
   
   console.log(obj.method?.());                // "Hello"
   console.log(obj.nonExistent?.());           // undefined (no error)
   
4. Combining with nullish coalescing:
   let displayName = user?.profile?.name ?? "Anonymous";
   
5. Dynamic property access:
   let prop = "address";
   let city = user?.[prop]?.city;

Important Points:
----------------
- Short-circuits: if left side is null/undefined, right side is not evaluated
- Returns undefined if chain breaks (doesn't throw error)
- Works with properties, array elements, and function calls
- Can be chained multiple times
- Added in ES2020

Common Use Cases:
----------------
   // API responses
   let userName = response?.data?.user?.name;
   
   // Event handlers
   element?.addEventListener?.('click', handler);
   
   // Optional callbacks
   onSuccess?.();
   
   // Nested arrays
   let firstItemName = data?.items?.[0]?.name;

Best Practice:
-------------
- Use when accessing deeply nested properties
- Combine with ?? for default values
- Don't overuse - if property should always exist, regular access is clearer
- Great for optional data from APIs or user input
*/

// Comma operator
/*
COMMA OPERATOR (,) IN JAVASCRIPT
================================

The comma operator evaluates multiple expressions and returns the value of the last expression.

Syntax:
------
expression1, expression2, expression3, ...

Examples:
--------

1. Basic usage:
   let result = (5, 10, 15);      // result = 15 (last value)
   
2. Multiple variable declarations:
   let a = 1, b = 2, c = 3;       // Common use
   
3. In for loops:
   for (let i = 0, j = 10; i < j; i++, j--) {
       console.log(i, j);
   }
   
4. Evaluating multiple expressions:
   let x = (console.log("First"), console.log("Second"), 42);
   // Logs: "First", "Second"
   // x = 42
   
5. Returning multiple operations (returns last):
   function increment(x) {
       return (x++, x);            // Increments, then returns
   }

Important Points:
----------------
- All expressions are evaluated left to right
- Only the last expression's value is returned
- Commonly used in for loop initialization and updates
- Rarely used in other contexts (can reduce readability)
- Has lowest precedence of all operators

Common Uses:
-----------
   // Multiple loop variables
   for (let i = 0, len = arr.length; i < len; i++) { }
   
   // Multiple updates in loop
   for (let i = 0; i < 10; i++, console.log(i)) { }

Best Practice:
-------------
- Primary use: variable declarations and for loop expressions
- Avoid in other contexts as it reduces code readability
- If you need multiple operations, use separate statements instead
*/


