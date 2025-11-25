// check if a number is greater than another number

let number1 = 10;
let number2 = 20;

if(number1 > number2){
    console.log(`${number1} is greater than ${number2}`);
}
else{
    console.log(`${number1} is not greater than ${number2}`);
}

// check is a string is equal to another string 

let string1 = "Aditya";
let string2 = "Nandan";
let string3 = "Aditya";

if(string1 === string2 || string1 === string3){
    console.log(`${string1} is equal to ${string3}`);
}
else{
    console.log(`not equal`)
}

// check if a boolean value is true or false

let isloggedin = true;

if(isloggedin){
    console.log("User is logged in");
}

// check if an array is empty or not 

 let array = [];
 console.log(array.length);
 if(array.length === 0){
    console.log("Array is empty");
 }