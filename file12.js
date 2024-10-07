
// creating obj using contructor and this keyword
function CreateObj(name, add, contact) {
  this.name = name
  this.add = add
  this.contact = contact
}

let obj1 = new CreateObj("Tinku", "pune", 1231231231)
console.log(obj1)
let obj2 = new CreateObj("Rinku", "Mumbai", 312312123)
console.log(obj2)



// THIS -- keyword using call
// bind -- helps link some data using this keyword
// let superhero = {
//   name: "spiderman",
//   gf: "merry",
//   auntName: "may",
//   uncleName: "Ben"
// }
// function myfunc() {
//   console.log(this)
// }
// myfunc.call(superhero)



// V2
let superhero1 = {
  name: "spiderman",
  gf: "merry",
  auntName: "may",
  uncleName: "Ben"
}

function myfunc(realname) { // when we use function with this it transforms it into constructor function
  console.log(this.name)
  console.log(this.realname)
  this.realname = realname // cannot log before this line
  console.log(this.realname)
  console.log(this)
}

myfunc.call(superhero1, "peter parker") //modifies original superhero1
console.log(superhero1)



// APPLY
// apply here data needs to be in []
function nameadd(realname, add) {
  // this.realname = realname
  console.log(realname, add)
}
nameadd.apply(superhero1, ["peterpan", "nyc"])
console.log(superhero1) //does not change original data



// BIND
// bind only binds data and does not call function like apply() and call()
// also gives ref so needs to store in something to log it
function nameadd2(realname2, add2) {
  // this.realname = realname2
  console.log(realname2, add2)
}
let b = nameadd2.bind(superhero1, "perterpan2", "NYC2")
b() // call needed to be explicit
console.log(superhero1) //does not change original data