// import { data } from "./MOCK_DATA";

// REDUCE
// /////////////////

// sum of array traditional in forloop
let sum = 0;
let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  console.log(sum);
}

// Using forEach
let summ = 0;
arr.forEach((val) => {
  summ += val;
});
console.log(summ);

// Using map
let a = 0;
let addition = arr.map((val) => {
  return (a += val);
});
console.log(addition);

// what if i want to make sum without empty array or exrtra variable

// using REDUCE
// accumelator has pre and curr val --> acc
// returns single value instead of array
// Reduce will return whatever you return unlike map() and filter() which return array
let add = arr.reduce((acc, val, i, wa) => {
  return (acc += val);
}, 1000); // acc takes 1000 as initial val
console.log(add);

// FIND
//////////////////////////

// gives only first occurance of val
// helpful to find data from api

let val = arr.find((val, i, wa) => {
  return val > 20;
});
console.log(val);

let data = [
  {
    id: 1,
    first_name: "Gav",
    last_name: "Andrelli",
    email: "gandrelli0@state.tx.us",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Alicia",
    last_name: "Shooter",
    email: "ashooter1@cocolog-nifty.com",
    gender: "Polygender",
  },
  {
    id: 3,
    first_name: "Kellsie",
    last_name: "Saker",
    email: "ksaker2@tripadvisor.com",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Harald",
    last_name: "Hutchens",
    email: "hhutchens3@squarespace.com",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Kissiah",
    last_name: "Olivelli",
    email: "kolivelli4@miitbeian.gov.cn",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "Philipa",
    last_name: "Cabell",
    email: "pcabell5@paginegialle.it",
    gender: "Female",
  },
  {
    id: 7,
    first_name: "Delbert",
    last_name: "Mapplethorpe",
    email: "dmapplethorpe6@walmart.com",
    gender: "Male",
  },
  {
    id: 8,
    first_name: "Dene",
    last_name: "Flockhart",
    email: "dflockhart7@unicef.org",
    gender: "Male",
  },
  {
    id: 9,
    first_name: "Kylie",
    last_name: "Clapston",
    email: "kclapston8@wikimedia.org",
    gender: "Male",
  },
  {
    id: 10,
    first_name: "Jimmie",
    last_name: "McGrae",
    email: "jmcgrae9@weather.com",
    gender: "Male",
  },
];

// use data from api
let val1 = data.find((val) => {
  return val.first_name == "Jimmie";
});
console.log(val1);

// creating new array from api data
let cartItems = [];
let val2 = data.find((val) => {
  return val.id == "10";
});
console.log(val2);
cartItems.push(val2);
console.log(cartItems);

data.filter((val) => {
  return val.gender == "Male";
});

//  USES                 |   forEach                     |  map     | filter          | find        | sort              | reduce                    //
//==================================================================================================================================================//
//  use                  |   iter over arr elem          |   same   | filter on cond  | partic ele  | sort in order     | gets reduced single val   //
//  syntax               |   arr.forEach(val,i,wa)=> {}  |   same   |  same           | same        | arr.sort((cv,nv)) | reduce((acc,val))         //
//  return?              |   No                          |   yes    |  yes            | yes         | yes               | yes                       //
//  if return what type  |   No                          |   []     |  [] filter arr  | single val  | sorted arr        | reduced single val        //
//  mofiy ori arr        |   No                          |   No     |  No             | No          | yes               | No                        //
