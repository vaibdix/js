let { body } = document;
let nav = document.createElement("nav");
// nav.setAttribute('class', 'navtag')
nav.innerHTML = `
<div class="navdivs">text</div>
<div class="navdivs">text</div>
<div class="navdivs">text</div>
<div class="navdivs">text</div>
<div class="navdivs">text</div>
`;

// // same thing but different ways to do same
// nav.textContent = "helo";
// nav.innerText = "hellllo"

body.append(nav);

// // removes element
// let heading = document.querySelector('h1')
// heading.remove()

// let isRed = true;

// let func = () => {
//   console.log("button clicked");

//   if (isRed) {
//     body.style.backgroundColor = 'red';
//   } else {
//     body.style.backgroundColor = 'blue';
//   }

//   isRed = !isRed;
// }

// let btn = document.querySelector('button');
// btn.onclick = func;

let str = "";
let heading = document.querySelector("h1");
let input = document.querySelector("input");
let btn = document.querySelector("button");


input.addEventListener("input", (e) => {
  if (e.data === null) {
      str = str.slice(0, -1);
  } else {
      str += e.data;
  }
  console.log(str);
  heading.innerHTML = str;
});