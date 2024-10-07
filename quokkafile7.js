let obj = {
  name : "tinku",
  age : 23
}

console.log(obj)
let z = Object.assign({}, obj)
console.log(z)

z.add = "Pune"
console.log(z)
console.log(obj)

// this keyword will point towards window object
console.log(this)

let func1 = function() {
  console.log(this)
}
func1()

let func2 = () => {
  console.log(this)
}
// arrow funciton when used with this will point to window obj and not to current object
func2()


let oobj = {
  name: 'tinku',
  age : 24,
  // regular function points to current object
  f1 : function() {
    console.log(this)
  },
  // arrow function in object points to window object
  f2 : () => {
    console.log(this)
  }
}
oobj.f1()
oobj.f2()



let func4 = () => {
  let a = 10;
  let func3 = () => {
    console.log(this);
  }
  func3();
}
func4();




// if this is used in nested function and is used with arrow function even thought arrow function
// points to window object here it will point to current obj even whenn using with arrow function
// arrow fxn generally points to window obj but in this scenario it points to cuuurent object this is because of lexical scopoing

let nobj = {
  name: "tinku",
  age : 22,
  func1 : function() {
    console.log("first this",this)
    let a = 10;
    // check age below when we have time
    // console.log(age)
    console.log(a)
    let nestedfunc = () => {
      console.log(a)
      // check age below when we have time
      // console.log(age)
      console.log("second this",this)
    }
    nestedfunc()
  }
}
nobj.func1()





