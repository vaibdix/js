const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor); // red green blue

const numbers = [1, 2, 3, 4, 5];
const [firstNum, , thirdNum] = numbers;
console.log(firstNum, thirdNum); // 1 3

const matrix1 = [[1, 2], [3, 4], [5, 6]];
let a = matrix1.flat(); // [1, 2, 3, 4, 5, 6]
console.log(a);

const matrix = [[1, 2], [3, 4], [5, 6]];
const [[num1, num2], [num3, num4], [num5, num6]] = matrix;
console.log(num1, num2, num3, num4, num5, num6); // 1 2 3 4 5 6

const user = { name: "Alice", age: 30, location: "Wonderland" };
const { name, age, location } = user;
console.log(name, age, location); // Alice 30 Wonderland

const point = { x: 10, y: 20 };
const { x: horizontal, y: vertical } = point;
console.log(horizontal, vertical); // 10 20

const book = { title: "JavaScript Basics", year: 2021 };
const { title, year, author = "Unknown Author" } = book;
console.log(title, year, author); // JavaScript Basics 2021 Unknown Author

function getProfile({ name, age, country }) {
    console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}
getProfile({ name: "Alice", age: 30, country: "Wonderland" });

const person = { name: "Bob", details: { age: 25, address: { city: "New York", country: "USA" } } };
const { name: personName, details: { age: personAge, address: { city, country } } } = person;
console.log(personName, personAge, city, country); // Bob 25 New York USA

const letters = ["a", "b", "c", "d", "e"];
const [firstLetter, ...remainingLetters] = letters;
console.log(firstLetter, remainingLetters); // a [ 'b', 'c', 'd', 'e' ]

const settings = { theme: "dark", notifications: true, layout: "grid", language: "en" };
const { theme, ...otherSettings } = settings;
console.log(theme, otherSettings); // dark { notifications: true, layout: 'grid', language: 'en' }

const originalArray = [1, 2, 3];
const newArray = [...originalArray];
newArray.push(4); // Modify the new array
console.log(originalArray, newArray); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]

const arr1 = [10, 20];
const arr2 = [30, 40];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [ 10, 20, 30, 40 ]

const start = [1, 2];
const end = [9, 10];
const concatenatedArray = [...start, ...end];
console.log(concatenatedArray); // [ 1, 2, 9, 10 ]

const car = { make: "Toyota", model: "Corolla" };
const carCopy = { ...car, year: 2022 }; // Modify the copy
console.log(car, carCopy); // { make: 'Toyota', model: 'Corolla' } { make: 'Toyota', model: 'Corolla', year: 2022 }

const defaults = { volume: 50, brightness: 80 };
const userSettings = { volume: 30 };
const mergedSettings = { ...defaults, ...userSettings };
console.log(mergedSettings); // { volume: 30, brightness: 80 }

function sum(a, b, c) {
    return a + b + c;
}
const numbersArray = [5, 10, 15];
const total = sum(...numbersArray);
console.log(total); // 30


let p = [10,20,30]
let calctotal = (...p) => {
    console.log(p);
    let sum = p.reduce((acc,val) => {
        return acc += val;
    })
    console.log(sum);
}
calctotal(100,200,300)
// In the line `let calctotal = (...p) => {`, the `...p` is using the **rest operator**. It collects all remaining arguments into an array. 

// Here's a brief explanation:
// - **Rest operator**: Used in function parameters to gather all remaining arguments into an array.
// - **Spread operator**: Used to spread elements of an array or object properties.

// In your code, `...p` inside the function parameter is the rest operator.

function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}
console.log(calculateTotal(10, 20, 30)); // 60

function combineArrays(...arrays) {
    return [].concat(...arrays);
}
console.log(combineArrays([1, 2], [3, 4], [5])); // [ 1, 2, 3, 4, 5 ]

let combineArrays = (...allArrays) => {
    return allArrays.flat()
}
console.log(combineArrays( [40,50,60], [70,80,90])) // [10, 20, 30, 40, 50, 60, 70, 80, 90];


const nums = [1, 2, 3, 4, 5];
const [firstNumDestructured, ...restNums] = nums;
console.log(firstNumDestructured, restNums); // 1 [ 2, 3, 4, 5 ]

const config = { host: "localhost", port: 3000, user: "admin", password: "1234" };
const { host, port, ...configRest } = config;
const updatedConfig = { ...configRest, user: "newAdmin" };
console.log(host, port, updatedConfig); // localhost 3000 { password: '1234', user: 'newAdmin' }
