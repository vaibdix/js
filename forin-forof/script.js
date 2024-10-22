let obj = {
  name: 'tinku',
  age: 23,
  add: 'pune'
}

// FOR IN -- SYNTAX -- introduced in 1997
// =====================================================================
// Behavior: It iterates over all enumerable properties of an object, 
// including inherited properties from the prototype chain.

// Limitations: It doesn't guarantee any particular order of iteration,
//  which can sometimes lead to unexpected results.

// for specific
for( a in obj ) {
  console.log(obj.add)
}

// another implementation
for( a in obj ) {
  console.log(obj[a])
}




// FOR OF -- SYNATX 
// =====================================================================
// Later alternatives: For arrays and array-like objects, newer constructs like "for...of" 
// (introduced in ES6/ES2015) and array methods like forEach() are often preferred.

let arr = [10,20,30,40,50]
for(val of arr) {
  console.log(val + 10)
}

// for ...in on array gives index
for(val in arr) {
  console.log(val)
}



// REMOVING AND GETTING 
let arr1 = [[10,20],[30,40],50]
let c = arr1.flat(1)
console.log(c)

let arr2 = [[10,20, [50,60, [70,8]]],[30,40],50]
let d = arr2.flat(3)
console.log(d)