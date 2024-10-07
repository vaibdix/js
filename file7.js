// console.log("data")
// console.error("erro msg")
// console.warn("warn msg")

// window.console.log("data")
// window.console.error("erro msg")
// window.console.warn("warn msg")
// window.console.log()

// console.log(window)

// alert("kya chal raha hai")
// console.dir()




let f1 = () => {
  return () => {
    let a = 10;
    console.log(a)
  }
}
console.log(f1()()) // undefined as clg(clg(a)) so inner gets exec but outer clg is undefined
f1()()

// f1()() is similar to below
let rf = f1()
rf()


let f2 = () => {
  let a = 10;
  let f3 = () => {
    console.log(a)
  }
  return f3;
}

let c = f2()
c()





let f3 = () => {
  let a = 10;
  let f4 = () => {
    console.log(a)
  }
  f4();
}
f3()

// Currying
// functional programming where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. Here's a brief explanation:
// Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument. The idea is to break down a function that takes multiple arguments into a series of functions, each taking one argument and returning a new function that takes the next argument, until all arguments have been provided.
// This can be useful when you have a function that is used in multiple places with the same set of arguments, as it allows you to create specialized versions of the function with some of the arguments already provided.


// Closures
// Closures are a fundamental concept in JavaScript that are closely related to the idea of lexical scoping.
// A closure is a function that has access to variables from an outer function, even after the outer function has finished executing. This is possible because the inner function "closes over" the variables it needs from the outer function, even after the outer function has returned.


// console.log(a)
// var a;

// console.log(a)
// let a;

// console.log(a)
// const a;



// CLOSURE
// ability of js engine to access data from parent function but that function is already destroyed then too it can access data is closure



let f8 = () => {
  let b = 20
  let f9 = () => {
    console.log(b)
  }
  f9()
}
f8()