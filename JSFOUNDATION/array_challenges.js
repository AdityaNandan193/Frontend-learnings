// Challenge 1

let teaFlavors = ["green tea", "black tea", "oolong tea"]
let firstTea = teaFlavors[0];
console.log(firstTea);

// another way of declaring an array

let coffeeFlavors = new Array("espresso", "latte", "cappuccino");
let lastCoffee = coffeeFlavors[coffeeFlavors.length - 1];
console.log(lastCoffee);

// Challenge 2

let teaTypes = ["green tea", "black tea", "oolong tea", "herbal tea", "white tea"];
console.log(teaTypes);
teaTypes[1] = "Jasmine tea";
console.log(teaTypes);

// Challenge 3

let citiesVisited = ["New York", "Los Angeles", "Chicago"];
citiesVisited.push("San Francisco");
console.log(citiesVisited);

// Challenge 4

let teaOrders = ["green tea", "black tea", "oolong tea"];
let lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(`Last order was: ${lastOrder}`);

// Challenge 5


/* ============================================
   SHALLOW COPY vs DEEP COPY - DETAILED NOTES
   ============================================ */

// What is a Soft/Shallow Copy?
// A shallow copy creates a new array, but if the array contains objects/arrays,
// those are still REFERENCED (not copied).

// === SHALLOW COPY (Soft Copy) ===

// Original array with nested objects
let originalArray = [
    { name: "green tea", price: 10 },
    { name: "black tea", price: 15 }
];

// Create shallow copy
let shallowCopy = [...originalArray]; // or Array.from() or slice()

// They are DIFFERENT arrays
console.log(originalArray === shallowCopy); // false

// But the OBJECTS inside are SAME (referenced)
console.log(originalArray[0] === shallowCopy[0]); // true (same object!)

// Modify object in shallow copy
shallowCopy[0].price = 20;

// Original is ALSO affected!
console.log(originalArray[0].price); // 20 - Changed!
console.log(shallowCopy[0].price);   // 20 - Changed!
// Both point to same object in memory


// === METHODS TO CREATE SHALLOW COPY ===

let teaFlavorsCopy = ["green tea", "black tea", "oolong tea"];

// Method 1: Spread operator (...)
let copy1 = [...teaFlavorsCopy];


// Method 2: Array.from()
let copy2 = Array.from(teaFlavorsCopy);

// Method 3: slice()
let copy3 = teaFlavorsCopy.slice();

// Method 4: concat()
let copy4 = [].concat(teaFlavorsCopy);

// All create shallow copies
console.log(copy1); // ["green tea", "black tea", "oolong tea"]


// === SHALLOW COPY - Works Fine for Primitives ===

// Array with ONLY primitives (strings, numbers, booleans)
let numbers = [1, 2, 3, 4, 5];

// Shallow copy
let numbersCopy = [...numbers];

// Modify copy
numbersCopy[0] = 999;

console.log(numbers);      // [1, 2, 3, 4, 5] - Original unchanged ✅
console.log(numbersCopy);  // [999, 2, 3, 4, 5] - Copy changed ✅

// Works perfectly because primitives are copied by value!


// === SHALLOW COPY - Problem with Nested Objects/Arrays ===

// Array with OBJECTS (nested data)
let teaOrdersNested = [
    { type: "green tea", quantity: 2 },
    { type: "black tea", quantity: 3 }
];

// Shallow copy
let ordersCopy = [...teaOrdersNested];

// Modify object in copy
ordersCopy[0].quantity = 999;

console.log(teaOrdersNested[0].quantity);   // 999 - Original changed! ❌
console.log(ordersCopy[0].quantity);        // 999 - Copy changed! ❌

// BOTH changed because they reference the SAME object!


// === VISUAL MEMORY DIAGRAM ===

// SHALLOW COPY
let original = [{ name: "tea" }];
let shallow = [...original];

// Memory:
// original → [Reference A]
//              ↓
//          { name: "tea" }
//              ↑
// shallow  → [Reference A]  (same reference!)

// When you change shallow[0].name, both see the change!


// === DEEP COPY (Hard Copy) - Solution ===

// DEEP COPY - Creates completely independent copy

let teaOrdersDeep = [
    { type: "green tea", quantity: 2, details: { brand: "Lipton" } },
    { type: "black tea", quantity: 3, details: { brand: "Twinings" } }
];

// Method 1: JSON.parse + JSON.stringify (most common)
let deepCopy1 = JSON.parse(JSON.stringify(teaOrdersDeep));

// Method 2: structuredClone() (modern browsers)
let deepCopy2 = structuredClone(teaOrdersDeep);

// Now modify deep copy
deepCopy1[0].quantity = 999;
deepCopy1[0].details.brand = "NewBrand";

console.log(teaOrdersDeep[0].quantity);        // 2 - Original unchanged! ✅
console.log(deepCopy1[0].quantity);            // 999 - Copy changed! ✅

console.log(teaOrdersDeep[0].details.brand);   // "Lipton" - Unchanged! ✅
console.log(deepCopy1[0].details.brand);       // "NewBrand" - Changed! ✅

// Completely independent!


/* ============================================
   COMPARISON TABLE
   ============================================

   Method                           Type      Nested Objects Safe?    Performance
   --------------------------------------------------------------------------------
   [...arr]                         Shallow   ❌ No                   ⚡ Fast
   Array.from()                     Shallow   ❌ No                   ⚡ Fast
   arr.slice()                      Shallow   ❌ No                   ⚡ Fast
   JSON.parse(JSON.stringify())     Deep      ✅ Yes*                 🐌 Slower
   structuredClone()                Deep      ✅ Yes                  ⚡ Fast

   *JSON method has limitations (no functions, undefined, symbols, dates become strings)
   
   ============================================ */


/* ============================================
   SUMMARY
   ============================================

   Soft/Shallow Copy:
   ✅ Creates new array
   ✅ Safe for primitives (numbers, strings, booleans)
   ❌ Nested objects/arrays are still referenced
   ⚡ Fast performance
   Use: [...arr], slice(), Array.from()

   Deep/Hard Copy:
   ✅ Creates completely independent copy
   ✅ Safe for nested objects/arrays
   ✅ No shared references
   🐌 Slower performance
   Use: structuredClone() or JSON.parse(JSON.stringify())

   Rule of thumb:
   - Simple arrays with primitives → Use shallow copy
   - Arrays with objects/nested data → Use deep copy
   
   ============================================ */


/* ============================================
   WHEN TO USE SHALLOW vs DEEP COPY
   ============================================ */

// === RULE 1: Array with PRIMITIVES ===
// When array contains ONLY primitives (numbers, strings, booleans, null, undefined, symbols)
// → Shallow copy is ENOUGH (and faster!)

let primitiveArray = [1, 2, 3, "hello", true, null];
let shallowCopyPrimitive = [...primitiveArray];     // ✅ Works perfectly
let deepCopyPrimitive = structuredClone(primitiveArray); // ✅ Also works, but unnecessary

// Both work the same for primitives
shallowCopyPrimitive[0] = 999;
console.log(primitiveArray[0]);      // 1 - Unchanged ✅
console.log(shallowCopyPrimitive[0]); // 999 - Changed ✅

// Conclusion: For primitives, shallow copy = deep copy (in effect)
// Use shallow copy for better performance


// === RULE 2: Array with NON-PRIMITIVES (Objects/Arrays) ===
// When array contains objects, arrays, or nested structures
// → MUST use DEEP COPY to avoid shared references

let nonPrimitiveArray = [
    { name: "tea", price: 10 },
    { name: "coffee", price: 15 }
];

// ❌ SHALLOW COPY - NOT SAFE for objects
let shallowCopyObject = [...nonPrimitiveArray];
shallowCopyObject[0].price = 999;
console.log(nonPrimitiveArray[0].price); // 999 - Original changed! ❌
console.log(shallowCopyObject[0].price); // 999 - Both changed! ❌

// ✅ DEEP COPY - SAFE for objects
let deepCopyObject = structuredClone(nonPrimitiveArray);
deepCopyObject[0].price = 500;
console.log(nonPrimitiveArray[0].price); // 999 - Original unchanged ✅
console.log(deepCopyObject[0].price);    // 500 - Only copy changed ✅


// === DECISION TREE ===
/*
   Does your array contain objects/arrays?
   │
   ├─ NO (only primitives) 
   │  └─→ Use SHALLOW COPY [...arr] or slice()
   │      ✅ Faster
   │      ✅ Simpler
   │      ✅ Works perfectly
   │
   └─ YES (has objects/arrays)
      └─→ Use DEEP COPY structuredClone() or JSON.parse(JSON.stringify())
          ✅ Safe from shared references
          ✅ Truly independent copies
*/


// === REAL-WORLD EXAMPLES ===

// Example 1: Shopping cart (objects) - NEED DEEP COPY
let cart = [
    { item: "laptop", price: 999, quantity: 1 },
    { item: "mouse", price: 25, quantity: 2 }
];
let cartBackup = structuredClone(cart); // ✅ Deep copy needed


// Example 2: Simple todo list (strings) - SHALLOW COPY IS FINE
let todos = ["Buy milk", "Clean room", "Study JavaScript"];
let todosCopy = [...todos]; // ✅ Shallow copy is enough


// Example 3: User IDs (numbers) - SHALLOW COPY IS FINE
let userIds = [101, 102, 103, 104];
let userIdsCopy = userIds.slice(); // ✅ Shallow copy is enough


// Example 4: Nested product data (objects with nested objects) - NEED DEEP COPY
let products = [
    {
        id: 1,
        name: "Laptop",
        specs: { ram: "16GB", storage: "512GB" },
        reviews: [{ rating: 5 }, { rating: 4 }]
    }
];
let productsCopy = structuredClone(products); // ✅ Deep copy needed


/* ============================================
   QUICK REFERENCE
   ============================================
   
   Array Type               Best Method            Why
   ─────────────────────────────────────────────────────────
   [1, 2, 3]               [...arr]               Primitives
   ["a", "b", "c"]         slice()                Primitives
   [true, false]           Array.from()           Primitives
   
   [{}, {}]                structuredClone()      Objects
   [[], []]                structuredClone()      Arrays
   [{a: {b: 1}}]          structuredClone()      Nested
   
   ============================================ */

// === PERFORMANCE NOTE ===
// Shallow copy: ⚡ Very fast (just copies references)
// Deep copy: 🐌 Slower (creates new objects recursively)
// → Use shallow copy when possible for better performance!


   let arr1 = [1,2,3];
   let arr2 = [...arr1];
   let arr3 = arr1.slice();

   // these both above methods are used for the same purpose of creating a shallow copy of the array .
   console.log(arr1 === arr2); // false
    
   arr1.push(4);
   console.log(arr1);
   console.log(arr2);



   // Challenge 6
//    merging two arrays into a new array without modifying the original arrays.

let array1 = [1,2,3];
let array2 = [4,5,6];

let mergedArray = [...array1, ...array2];

console.log(mergedArray); // [1,2,3,4,5,6]
console.log(array1); // [1,2,3] - original unchanged
console.log(array2); // [4,5,6] - original unchanged

let mergedArray2 = array1.concat(array2);
console.log(mergedArray2);
// actually (...) it is called the spread operator which spreads the elements of the array into individual elements while creating the new array.

// challenge 7 :-
let teaMenu = ["green tea", "black tea", "oolong tea"];
let teaMenulength = teaMenu.length;
console.log(teaMenulength);

// challenge 8 :-
let citylist = ["kyoto", "London", "New York", "San Francisco"];

let isLondonInList = citylist.includes("London");
console.log(isLondonInList);

let imp_city = ["patna", "Jaipur" , "Pune" , "Mathura"];
console.log(imp_city.indexOf("Jaipur"));
// so this method can be used to find the index of a particular element in the array. If the element is found it returns the index otherwise it returns -1.