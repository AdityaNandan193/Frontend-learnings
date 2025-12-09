// Import prompt-sync for user input
import promptSync from 'prompt-sync';
const prompt = promptSync();

// challenge 1 
let i = 0;
let sum = 0;

while(i<=5){
    sum += i;
    i++;
}
console.log(`The sum of first 5 natural numbers is: ${sum}`);

// Challenge 2

let j = 5;
let arr = [];

while(j>0){
    arr.push(j);
    j--;
}
arr.reverse();
console.log("Array of first 5 natural numbers:", arr);

// Challenge 3

// let teaCollection = [];
// let tea;

// do{
//     tea = prompt(`enter your favourite tea (type stop to 
//         finish):`)
//         if(tea !== "stop"){
//             teaCollection.push(tea);
//         }
// } while(tea !== "stop");
// console.log("your favourite teas are:", teaCollection)

// challenge 4

let total = 0;
let k =0;
do{
    total += k;
    k++;
} while(k<=3);
console.log(`the sum of first 3 natural number is : ${total}`)

// challenge 5
let array = [2,4,6,8,10];
  let multipliedNumbers = [];

for(let i= 0; i<array.length;i++){
    multipliedNumbers.push(array[i]*2);
}
console.log("Array after multiplying each element by 2:", multipliedNumbers);

// challenge 6

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let citylist = [];

for(let i=0; i<cities.length;i++){
    citylist.push(cities[i]);
}
console.log("List of cities:", citylist);

// challenge 7
let tea = ["Green Tea", "Black Tea", "Oolong Tea", "chai" ,"White Tea"];
let newtea = [];

for(let i=0; i<tea.length; i++){
    if(tea[i] === "chai"){
        break;
    }
    else{
        newtea.push(tea[i]);
    }
}
console.log("Teas until 'chai':", newtea);

// challenge 8

let citybucket = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "paris", "Miami"];
let visitedCities = [];

for(let i=0; i<citybucket.length; i++){
    if(citybucket[i] === "paris"){
        continue;
    }
    visitedCities.push(citybucket[i]);
}
console.log("Visited cities excluding 'paris':", visitedCities);

// challenge 9

let numbers = [1,2,3,4,5,6,7,8,9,10];
let smallerNumbers = [];

for( let nums of numbers){
    if(nums === 4){
        break;
    }
    smallerNumbers.push(nums);
}
console.log("Numbers until 4:", smallerNumbers);

// challenge 10

let teas = ["Green Tea", "Black Tea", "Oolong Tea", "herbal tea" ,"White Tea"];
let prefferedTeas = [];

for(let tea of teas){
    if(tea === "herbal tea"){
        continue;
    }   
    else{
        prefferedTeas.push(tea);
    }

}
console.log("Preferred teas excluding 'herbal tea':", prefferedTeas);

// challenge 11
let cityPopulation = {
    "New York": 8419600,
    "Los Angeles": 3980400,
    "Chicago": 2716000,
    "Houston": 2328000,
    "Berlin": 3769000,
    "Phoenix": 1690000
}
let cityNames = {};
for(let city in cityPopulation){
    if(city === "Berlin"){
        break;
    }
    cityNames[city] = cityPopulation[city];
}
console.log("City names and populations until 'Berlin':", cityNames);

// challenge 12

let worldcities = {
    "Sydney" : 5000000,
    "Tokyo" : 13929286,
    "Paris" : 2140526,
    "London" : 8982000,
    "Rome" : 2873000
}
let largecities = {};

for(let city in worldcities){
    if(worldcities[city] < 3000000){
        continue;
    }
    largecities[city] = worldcities[city];
}
console.log("Cities with population 3 million or more:", largecities);  

// challenge 13

let diffteas = ["earl grey","chai" , "green tea", "black tea", "oolong tea"];
let availableTeas = [];

diffteas.forEach(function(tea){
    if(tea === "chai"){
        return;
    }
    availableTeas.push(tea);
})
console.log(availableTeas);

// challenge 14

let newnumbers  = [10,20,30,7,50];
let doublednumbers = [];

newnumbers.forEach(function(num){
    if(num === 7){
        return;
    }
    doublednumbers.push(num*2);
})
console.log(doublednumbers);

// challenge 15

let lastteas = ["green tea", "black tea", "chai", "oolong   tea", "white tea"];
let shortTeas = [];

for(let tea of lastteas){
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea);
}
console.log("Teas with names 10 characters or less:", shortTeas);