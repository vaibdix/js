// ////////////////////////////////////////////////////////
// rest
// ////////////////////////////////////////////////////////
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); 
console.log(sum(4, 5, 6, 7, 8)); 


const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); 
console.log(second); 
console.log(rest); 

function greet(greeting, separator = ', ', ...names) {
  return `${greeting} ${names.join(separator)}!`;
}

console.log(greet('Hello', 'Alice', 'Bob', 'Charlie'));
console.log(greet('Hi', 'Eve')); 

const person1 = { name: 'John', age: 30, city: 'New York', country: 'USA' };
const { name, ...restt } = person1;
console.log(name);
console.log(restt);

// //////////////////////////////////////////
//spread
//////////////////////////////////////////
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers); 


//  GOOD QUESTION
function sum(a, b, ...c) {
  return a + b + c;
}
const numbers = [1, 2, 3, 4];
console.log(sum(...numbers)); 


const originalArray = [1, 2, { innerProperty: 'value' }];
const clonedArray = [...originalArray];
console.log(clonedArray); 
console.log(clonedArray === originalArray); 
console.log(clonedArray[2] === originalArray[2]);
 


const person = { name: 'John', age: 30 };
const newPerson = { ...person, city: 'New York' };
console.log(newPerson);