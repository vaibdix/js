// Promise
// promises are obj in js
// promises are used to handle async task
// promise has 3 states pending, resolve, reject
// pending -- when it is neither resolved nor rejected
// resolved -- when promise if fullfiled,
//          -- when resolved calls then block
//          -- and we can pass some argu with it
//          -- it returns something from endpoint
// reject --  not fullfilled
//        -- calls catch block
//        -- catch used to handle erros or exceptions 
//        -- no promise cant be in resolved or reject at same time
//        -- when it does not return something from endpoint

// some async task in JS will internally return promise we ust have to handle that promise using then and catch block -- fetch() 


/////////////////////////////////////////////////////
let p1 = new Promise((resolve, reject) => {
    let a = 10;
    if (a == 10) {
        resolve()
    } 
    else {
        reject()
    }
})

p1.then(() => console.log("TSB"))
p1.catch(() => console.log("FSB"))



// RESOLVE -- resolve invocation
/////////////////////////////////////////////////////

console.log("first");
let p2 = new Promise((resolve, reject) => {
    let a = 10 + 20
    resolve(a)
})
p2.then((val) => console.log(val))
p2.catch((err) => console.log(err))
console.log("false");


// REJECT -- error invocation
/////////////////////////////////////////////////////
console.log("first");
let p3 = new Promise((resolve, reject) => {
    let a = 10 + 20
    reject("something went wrong")
})
p3.then((val) => console.log(val))
p3.catch((err) => console.log(err))
console.log("last");



// Fetching -- API
// Fetch returns a promise by default
// thats why we can use .then chain
/////////////////////////////////////////////////////
fetch('https://api.github.com/users/octocat')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });



// FAILED to fetch -- api
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err)
    })


// EXAMPLE for resolve and reject cannot be at same time
function examplePromise() {
    return new Promise((resolve, reject) => {
        const condition = true; // Change this to false to see the reject case

        if (condition) {
            resolve('Promise resolved successfully!');
        } else {
            reject('Promise rejected.');
        }
    });
}

examplePromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });