let heading = document.getElementById('heading')
console.log(heading)

let input = document.getElementsByTagName('input')
input[0].title = "input 1"
input[1].placeholder="enter text here"

for (let i = 0; i < input.length; i++) {
  input[i].style.backgroundColor = "red";
  input[2].style.backgroundColor = "green"
  input[i].style.color = "white";
}

let userInput = document.getElementsByClassName('userInput')
userInput[1].style.backgroundColor = "limegreen"
console.log(userInput)

let inputt = document.querySelectorAll(".userInput")
console.log(inputt)

// add bg
let inputtt = document.querySelector(".userInput1")
  input[1].style.backgroundColor = "violet"

// add classname
let myDiv = document.querySelector('div')
console.log(myDiv)
myDiv.setAttribute('class', 'myDivClass')
console.log(myDiv)

// disable input
// let input3 = document.getElementsByClassName('disabledd');
// input3[0].disabled = true;
// another way
// let input3 = document.querySelector('disabledd')
// input3.setAttribute('disabled', 'true')


// removes attrib
myDiv.removeAttribute('class')
console.log(myDiv)








// creating div using js
let mmydiv = document.createElement('div')
console.log(mmydiv)

// ways to acces body
// let body = document.querySelector('body')
// let body = document.body
let { body } = document

// setting attrib
mmydiv.setAttribute('class', 'myDivClassnew')
console.log(mmydiv)
mmydiv.textContent = "hello from js dom file"
// now html doesnt know where to put this div
// so we need to to import body above
body.appendChild(mmydiv);





