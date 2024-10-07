let arr = [10,20,30,40,50,60,70,80]
let func = (val) => {console.log(val)}

arr.forEach((val, wholeArray) => {
    console.log(wholeArray)
});

arr.forEach((val, ind ,wholeArray) => {
    console.log(wholeArray)
});



// below a,b stands for cuurent and next val
// positive and negative for a-b happens and swapping takes place
let ar2 = [70,500,330,24,74,54,12,10]
console.log(ar2.sort((a,b) => {
    return b-a
}));


let ar3 = [70,500,330,24,74,54,12,10]
console.log(ar3.sort((a,b) => {
    return a-b
}));

let ar45 = [70,500,330,24,74,54,12,10]
let ar46 = ar2.sort((a,b) => {
    return a-b
})
console.log(ar4)



let ar6 = [70,500,330,24,74,54,12,10]
let ar5 = ar2.sort((a,b) => {
    console.log(val + 100);
})
console.log(ar5 )






