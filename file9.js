let obj = {
  name : "tinku",
  age : 23,
  intro : () => {
    console.log(`hello name is ${obj.name} and age is ${obj.age}`)
  }
}
obj.intro()


// merge two obj
let obj1 = {
  name : "tinku",
  age : 23
}
let obj2 = {
  add : "Pune"
}
Object.assign(obj1, obj2)
console.log(obj1) // merging to obj1

// below creating new obj from obj1 and obj2 with {} -- becoming target and obj1,obj2 as source
let obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)


let person = {
  name : "tinku",
  age : 23
}

// shallow copy
let person2 = person
console.log(person)
person2.add = "asd"
console.log(person2) // this makes moditfication to person
// this is becoz of referencing

// Stringifying is done to send js data converted to JSON type of data into db
let jsonperson = JSON.stringify(person)
console.log(jsonperson)

// parse converts JSON obj to JS Object
let newperson = JSON.parse(jsonperson)
console.log(newperson)

// deep copy
// cannot modify newcopyobj
// so first perform stringify and parse
newperson.newadd = "new data"
console.log(newperson)
console.log(person)
// in above person it wont add newperson to original data



