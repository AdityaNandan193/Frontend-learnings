// Objects in JavaScript

let userData = {
    "college name" : "jecrc",
    userName : "Aditya Nandan",
    userId : Symbol("id_12345"),
    age : 23,
    address : {
        street : "123 Main St",
        city : "Metropolis",
        zip : "12345"
    }
}
console.log(userData["college name"])  // accessing property with space in name
console.log(userData)
console.log(userData.userId);
userData.userId = Symbol("id_67890");
console.log(userData.userId);
// Symbol values are unique and immutable
userData.userName = "Nandan Aditya";
console.log(userData);

const empdata = {
    empName : "Vedansh ",
    empId : Symbol("emp_001"),
    empAge : 22
}
empdata.emplast = "Sharma"  // adding new property to the object
console.log(empdata);
console.log(empdata.emplast);
console.log(typeof empdata.empId);

 

// time and date in javascript
let currDate = new Date();
console.log(currDate);

console.log(typeof currDate);


// Arrays

let anotherUser = ["Aditya", "Nandan", 23, true, null, undefined];
console.log(anotherUser);
console.log(typeof anotherUser); // object

let refcopyarray = anotherUser; // reference copy
console.log(refcopyarray);

refcopyarray[1] = "Kumar"; // modifying the reference copy
console.log("After modifying refcopyarray:");
console.log("anotherUser:", anotherUser); // original array is also affected
console.log("refcopyarray:", refcopyarray); // modified array

// it happened because nonPrimitives datatypes are stored by reference not by value.
// so when we made a reference copy and modified it the original array also got modified.
// thus nonPrimitives are mutable in nature.
// so actually anotherUser and refcopyarray are pointing to the same memory location that's why 
// whatever change is made in one is reflected in the other.
// it is not like primitive datatypes where a copy is created and stored in different memory locations.

// some extra things

let isValue = "2abc";
console.log(Number(isValue)); // NaN
console.log(typeof NaN); // number

let anothervalue = "23";
console.log(typeof(anothervalue));
console.log(Number(anothervalue));

let value = number(anothervalue);
console.log(typeof(value));