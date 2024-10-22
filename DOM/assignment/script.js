// 1. Change Background Color
document.getElementById('changeBackgroundBtn').addEventListener('click', function() {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// 2. Text Update
document.getElementById('updateTextBtn').addEventListener('click', function() {
  document.getElementById('updateTextParagraph').textContent = 'Text updated!';
});

// 3. Hide/Show Element
let isVisible = true;
document.getElementById('hideShowBtn').addEventListener('click', function() {
  const div = document.getElementById('hideShowDiv');
  isVisible = !isVisible;
  div.style.display = isVisible ? 'block' : 'none';
});

// 4. Add New Item to List
document.getElementById('addItemBtn').addEventListener('click', function() {
  const input = document.getElementById('newItemInput');
  const list = document.getElementById('itemList');
  if (input.value.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = input.value;
      list.appendChild(li);
      input.value = '';
  }
});

// 5. Remove Last Item from List
document.getElementById('removeLastItemBtn').addEventListener('click', function() {
  const list = document.getElementById('predefinedList');
  if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
  }
});

// 6. Toggle Class
document.getElementById('toggleStyleBtn').addEventListener('click', function() {
  document.getElementById('toggleStyleDiv').classList.toggle('alternate-style');
});

// 7. Change Image Source
document.getElementById('changeImage1Btn').addEventListener('click', function() {
  document.getElementById('changeableImage').src = 'https://via.placeholder.com/150/FF0000';
});
document.getElementById('changeImage2Btn').addEventListener('click', function() {
  document.getElementById('changeableImage').src = 'https://via.placeholder.com/150/00FF00';
});

// 8. Create Elements Dynamically
document.getElementById('addParagraphBtn').addEventListener('click', function() {
  const p = document.createElement('p');
  p.textContent = 'This is a new paragraph!';
  document.body.appendChild(p);
});

// 9. Disable Button After Click
document.getElementById('disableOnClickBtn').addEventListener('click', function(e) {
  e.target.disabled = true;
  e.target.textContent = 'Button Disabled';
});

// 10. Display Input Text
document.getElementById('displayInputField').addEventListener('input', function(e) {
  document.getElementById('displayInputText').textContent = e.target.value;
});

// 11. Change Text Color on Hover
// (Using CSS for this one, see the style section)

// 12. Display Current Date and Time
document.getElementById('showDateTimeBtn').addEventListener('click', function() {
  const now = new Date();
  document.getElementById('dateTimeDisplay').textContent = now.toString();
});

// 13. Remove Element
document.getElementById('removeElementBtn').addEventListener('click', function() {
  const element = document.getElementById('removableElement');
  if (element) element.remove();
});

// 14. Count Button Clicks
let clickCount = 0;
document.getElementById('clickCounterBtn').addEventListener('click', function() {
  clickCount++;
  document.getElementById('clickCountDisplay').textContent = `Button clicked ${clickCount} times`;
});

// 15. Display Window Width
function updateWindowWidth() {
  document.getElementById('windowWidthDisplay').textContent = `Window width: ${window.innerWidth}px`;
}
window.addEventListener('resize', updateWindowWidth);
updateWindowWidth(); // Initial call

// 16. Add Class to All Elements
document.getElementById('addClassBtn').addEventListener('click', function() {
  document.querySelectorAll('p').forEach(p => p.classList.add('highlight'));
});

// 17. Input Validation
document.getElementById('validationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('validationInput');
  const error = document.getElementById('validationError');
  if (input.value.trim() === '') {
      error.textContent = 'Please fill out this field.';
  } else {
      error.textContent = '';
      alert('Form submitted successfully!');
  }
});

// 18. Change Font Size
let fontSize = 16;
document.getElementById('increaseFontSizeBtn').addEventListener('click', function() {
  fontSize += 2;
  document.getElementById('changeFontSizeParagraph').style.fontSize = `${fontSize}px`;
});

// 21. Button Hover Event
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseover', function() {
  this.style.backgroundColor = 'yellow';
});
hoverButton.addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});

// 22. Form Submission Event
document.getElementById('submissionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('submissionInput');
  const error = document.getElementById('submissionError');
  if (input.value.trim() === '') {
      error.textContent = 'Please fill out this field.';
  } else {
      error.textContent = '';
      alert('Form submitted successfully!');
  }
});

// 23. Keyboard Event
document.getElementById('keyboardEventInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
      alert('Enter key pressed!');
  }
});

// 24. Double-Click Event
document.getElementById('doubleClickDiv').addEventListener('dblclick', function() {
  this.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});

// 25. Key Press Counter
let keyPressCount = 0;
document.getElementById('keyPressInput').addEventListener('keydown', function() {
  keyPressCount++;
  document.getElementById('keyPressCount').textContent = `Key pressed ${keyPressCount} times`;
});

// 26. Mouse Movement Tracker
document.addEventListener('mousemove', function(e) {
  document.getElementById('mouseTracker').textContent = `Mouse position: X: ${e.clientX}, Y: ${e.clientY}`;
});

// 27. Right-Click Event
document.getElementById('rightClickElement').addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('Right-click detected!');
});

// 28. Mouse Over Event
const mouseOverParagraph = document.getElementById('mouseOverParagraph');
mouseOverParagraph.addEventListener('mouseover', function() {
  this.textContent = 'Mouse is over me!';
  this.style.color = 'red';
});
mouseOverParagraph.addEventListener('mouseout', function() {
  this.textContent = 'Mouse over me to change my text';
  this.style.color = '';
});

// 29. Focus Event
const focusInput = document.getElementById('focusInput');
focusInput.addEventListener('focus', function() {
  this.style.borderColor = 'blue';
});
focusInput.addEventListener('blur', function() {
  this.style.borderColor = '';
});





// this -- instead of e
let btn = document.querySelector('button')
btn.addEventListener('click', function() {
  this.style.backgroundColor = 'red'
})

