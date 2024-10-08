// both have same callback values like (value, index, whilearray) => {}
// foreach -- cannot return, 
// map -- can return


let arr = [10, 20, 30, 40, 50, 60, 70, 80]
let values = arr.forEach((val, i, wa) => {
    console.log(val)
    return val + 100
});
console.log(values);
// cannot return in forEach


let arr1 = [10, 20, 30, 40, 50, 60, 70, 80]
let values1 = arr.map((val, i, wa) => {
    console.log(val)
    return val + 100
});
console.log(values1);
// returns in array format


let arr2 = [1, 2, 3, 4, 5]
let values2 = arr2.map(val => val * 2)
console.log(values2);


let arr3 = [0, 10, 20, 30]
let values3 = arr3.map(val =>
    f = (val * 9 / 5) + 32
)
console.log(values3);


let arr4 = ["alice", "Bob", "Charlie"]
let values4 = arr4.map(val => "hello " + val)
console.log(values4);

let arr5 = [
    {
        name: "Alice",
        age: 25
    },
    {
        name: "Bob",
        age: 30
    }
]
let values5 = arr5.map(val => val.name)
console.log(values5);


let arr6 = [2, 3, 4]
let values6 = arr6.map(val => val * val)
console.log(values6);


let arr7 = ["apples", "oranges", "Bananas"];
let values7 = arr7.map(val => `<li>${val}</li>`);
console.log(values7);


let arr8 = [100, 200, 300];

let values8 = arr8.map(value => {
    const tax = value * 0.15; // Calculate the 15% tax
    return value + tax;
});

console.log(values8);


let arr9 = ["1", "2", "3"]
let values9 = arr9.map(val => Number(val))
console.log(values9);



let names = ["tinku", "pinku", "rinku"]
let arr10 = names.map((val) => {
    return `Hello ${val}`
})
console.log(arr10);


// same thing using push
let namess = ["tinku", "pinku", "rinku"];
let arr11 = [];
names.forEach(val => {
    arr11.push(`Hello ${val}`);
});
console.log(arr11);







// FILTER
//=========================================================
// Filter -- will check if returning val is truthy or falsy
// returns only when its truthy and does not return if its falsey


let ages = [34, 44, 10, 12, 18, 54, 23, 19]
let newages = ages.filter((val, i, wa) => { return val > 18 })
console.log(newages);

//  when done with map
let age = [34, 44, 10, 12, 18, 54, 23, 19]
let newage = ages.map((val, i, wa) => { return val > 18 })
console.log(newage);





let data = [{
    "first_name": "Ase",
    "last_name": "Sinfield",
    "email": "asinfield0@hc360.com",
    "gender": "Male"
}, {
    "first_name": "Demetri",
    "last_name": "Mountcastle",
    "email": "dmountcastle1@phoca.cz",
    "gender": "Polygender"
}, {
    "first_name": "Yulma",
    "last_name": "Kibby",
    "email": "ykibby2@angelfire.com",
    "gender": "Male"
}, {
    "first_name": "Barnett",
    "last_name": "Kagan",
    "email": "bkagan3@printfriendly.com",
    "gender": "Male"
}, {
    "first_name": "Dimitry",
    "last_name": "Buggs",
    "email": "dbuggs4@time.com",
    "gender": "Male"
}, {
    "first_name": "Giffer",
    "last_name": "Hrishanok",
    "email": "ghrishanok5@jugem.jp",
    "gender": "Male"
}, {
    "first_name": "Cori",
    "last_name": "Yepiskov",
    "email": "cyepiskov6@wsj.com",
    "gender": "Male"
}, {
    "first_name": "Judon",
    "last_name": "Schimpke",
    "email": "jschimpke7@wikispaces.com",
    "gender": "Male"
}, {
    "first_name": "Aeriela",
    "last_name": "Dudbridge",
    "email": "adudbridge8@taobao.com",
    "gender": "Female"
}, {
    "first_name": "Shelby",
    "last_name": "Shynn",
    "email": "sshynn9@ovh.net",
    "gender": "Male"
}, {
    "first_name": "Amye",
    "last_name": "Knibb",
    "email": "aknibba@fotki.com",
    "gender": "Female"
}, {
    "first_name": "Alexis",
    "last_name": "Schenfisch",
    "email": "aschenfischb@tinypic.com",
    "gender": "Female"
}, {
    "first_name": "Hortensia",
    "last_name": "Galbreth",
    "email": "hgalbrethc@mtv.com",
    "gender": "Female"
}, {
    "first_name": "Cati",
    "last_name": "Chaloner",
    "email": "cchalonerd@vinaora.com",
    "gender": "Female"
}, {
    "first_name": "Anabella",
    "last_name": "Doone",
    "email": "adoonee@bloomberg.com",
    "gender": "Female"
}, {
    "first_name": "Loralyn",
    "last_name": "Thatcher",
    "email": "lthatcherf@china.com.cn",
    "gender": "Female"
}, {
    "first_name": "Ike",
    "last_name": "Hallford",
    "email": "ihallfordg@nytimes.com",
    "gender": "Male"
}, {
    "first_name": "Chester",
    "last_name": "Chart",
    "email": "ccharth@i2i.jp",
    "gender": "Male"
}, {
    "first_name": "Jordain",
    "last_name": "Whebell",
    "email": "jwhebelli@storify.com",
    "gender": "Female"
}, {
    "first_name": "Leroy",
    "last_name": "Greensmith",
    "email": "lgreensmithj@mozilla.org",
    "gender": "Male"
}]

let filterdatam = data.filter(val => val.gender == "Male")
console.log(filterdatam);


let filterdataf = data.filter(val => val.gender == "Female")
console.log(filterdataf);
