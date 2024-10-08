let obj = {
    name: "John",
}
// prototype of array
let arr = [10, 20]
console.log(arr.__proto__);

// protoype is blueprint of datatype
console.log(obj.__proto__);

// prototype is object
console.log(obj.__proto__.__proto__);

let num = 10
console.log(num.__proto__);

let str = "string"
console.log(str.__proto__);

let bool = true
console.log(bool.__proto__);

let func = function () { }
console.log(func.__proto__);

let obj3 = new Object()
console.log(obj3.__proto__);


// Inheritance using prototype
let obj1 = { name: "tinku" }
let obj2 = { surname: "pandey" }

console.log(obj1.__proto__);
console.log(obj1.name);

obj1.__proto__ = obj2;

console.log(obj1.__proto__);
console.log(obj1.surname);






// overriding predefined function using prototype
let myObject = {
    myMethod: function () {
        console.log("Original method");
    }
};
myObject.myMethod = function () {
    console.log("Overridden method");
};

myObject.myMethod();



// destructuring
let backpack = {
    weight: 10,
    color: 'blue',
    size: 'medium'
}

let { weight, color, size } = backpack;
console.log(weight, color, size);









