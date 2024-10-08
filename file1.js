let str = "katappa"

let val = str.slice(2, -1)
console.log(val)

let val1 = str.slice(3, 7)
console.log(val1)

let str1 = "The quick brown fox jumps over the lazy dog.";

console.log(str1.slice(10, 15));
console.log(str1.substring(10, 15));

// difference in slice and substring
// slice allows negative slicing and substring does not
let str2 = "The quick brown fox jumps over the lazy dog.";
console.log(str2.slice(-5));
console.log(str2.substring(-5));


console.log(str.slice(-1));
console.log(str.substring(-1, str.length));

console.log(str.includes("ppa"));

console.log(str.at(4));

console.log(str.charAt(5));

console.log(str.charCodeAt(4)); //gives ascii val

try {
    console.log(a);
    throw new Error("erro raised")
} catch (error) {
    console.log(err);
}
