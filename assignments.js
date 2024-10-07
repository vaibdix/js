// 1. Function Declaration: Says "Hello, world!" three times.
function sayHello() {
    console.log("Hello, world!");
}
sayHello();
sayHello();
sayHello();

// 2. Function Expression: Says "Goodbye!" using function expression syntax.
const farewell = function() {
    console.log("Goodbye!");
};
farewell();

// 3. Arrow Function: Prints "Cheer up, buddy!" using an arrow function.
const cheerUp = () => {
    console.log("Cheer up, buddy!");
};
cheerUp();

// 4. Function with a Name: Prints your name in a greeting.
function introduce(name) {
    console.log(`Hello, my name is ${name}!`);
}
introduce("Alice");

// 5. Function Expression: Orders pizza with a specified flavor.
const placeOrder = function(flavor) {
    console.log(`Ordered a ${flavor} pizza!`);
};
placeOrder("cheese");

// 6. Arrow Function: Greets a person by name using an arrow function.
const greetPerson = (name) => {
    console.log(`Hi, ${name}!`);
};
greetPerson("Bob");
greetPerson("Alice");

// 7. Function Calling Another Function: Simulates making coffee.
function makeCoffee() {
    console.log("Making coffee...");
}
function startMorning() {
    makeCoffee();
}
startMorning();

// 8. Higher-Order Function: Calls `brushTeeth` and `getDressed` functions in order.
function morningRoutine(brushTeeth, getDressed) {
    brushTeeth();
    getDressed();
}
function brushTeeth() {
    console.log("Brushing teeth...");
}
function getDressed() {
    console.log("Getting dressed...");
}
morningRoutine(brushTeeth, getDressed);

// 9. Callback Function: Prints "Action in progress!" then runs a callback.
function takeAction(callback) {
    console.log("Action in progress!");
    callback();
}
takeAction(function() {
    console.log("Action completed!");
});

// 10. Arrow Function: Calculates and prints the area of a rectangle.
const calculateArea = (length, width) => {
    console.log(`The area is ${length * width}`);
};
calculateArea(5, 4);

// 11. Higher-Order Function: Simulates lunch break by calling two functions.
function lunchBreak(eatLunch, takeNap) {
    eatLunch();
    takeNap();
}
function eatLunch() {
    console.log("Eating lunch...");
}
function takeNap() {
    console.log("Taking a nap...");
}
lunchBreak(eatLunch, takeNap);

// 12. Function Declaration: Prints "Go, team!" a few times.
function supportTeam() {
    console.log("Go, team!");
}
supportTeam();
supportTeam();
supportTeam();

// 13. Arrow Function: Prints a fake weather report.
const weatherUpdate = () => {
    console.log("The weather is great today!");
};
weatherUpdate();

// 14. Function Expression: Talks to a pet by saying "Who's a good pet?".
const petTalk = function() {
    console.log("Who's a good pet?");
};
petTalk();

// 15. Function with Multiple Parameters: Prints favorite movie and year.
function favoriteMovie(movie, year) {
    console.log(`My favorite movie is ${movie} from ${year}`);
}
favoriteMovie("The Matrix", 1999);

// 16. Function Calling Another Function: Calls three functions to simulate a daily schedule.
function dailySchedule() {
    morningRoutine();
    work();
    eveningChill();
}
function work() {
    console.log("Working...");
}
function eveningChill() {
    console.log("Evening chill time...");
}
dailySchedule();

// 17. Higher-Order Function: Calls `stretch` and `run` functions to simulate an exercise routine.
function exerciseRoutine(stretch, run) {
    stretch();
    run();
}
function stretch() {
    console.log("Stretching...");
}
function run() {
    console.log("Running...");
}
exerciseRoutine(stretch, run);

// 18. Arrow Function: Motivational arrow function prints "You can do it!".
const motivateMe = () => {
    console.log("You can do it!");
};
motivateMe();

// 19. Function Expression: Orders ice cream of a specific flavor.
const iceCreamTime = function(flavor) {
    console.log(`Ordering ${flavor} ice cream!`);
};
iceCreamTime("vanilla");

// 20. Function Declaration: Simulates a night routine with brushing teeth and going to bed.
function nightRoutine() {
    console.log("Brushing teeth");
    console.log("Going to bed");
}
nightRoutine();








// /////////////////
// PART 2
// /////////////////


function repeatCall(callback, message) {
    return callback(message);
}
const callback1 = (message) => message + ' ' + message;
console.log(repeatCall(callback1, "Let's go!"));



function decideAction(callback, action) {
    return callback(action);
}
const callback2 = (action) => action === 'proceed' ? 'Approved' : 'Denied';
console.log(decideAction(callback2, 'proceed'));



function repeatMessage(callback, message) {
    return callback(message);
}
const callback3 = (message) => message + ' ' + message;
console.log(repeatMessage(callback3, 'Goodbye'));



function toggleSwitch(callback, state) {
    return callback(state);
}
const callback4 = (state) => state === 'off' ? 'Switched on' : 'Switched off';
console.log(toggleSwitch(callback4, 'off'));



function askYesOrNo(callback, response) {
    return callback(response);
}
const callback5 = (response) => response === 'yes' ? 'Confirmed' : 'Rejected';
console.log(askYesOrNo(callback5, 'yes'));



function reverseText(callback, text) {
    return callback(text);
}
const callback6 = (text) => {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
};
console.log(reverseText(callback6, 'world'));



function createFarewell(callback, name) {
    return callback(name);
}
const callback7 = (name) => `Goodbye, ${name}!`;
console.log(createFarewell(callback7, 'Bob'));



function decisionMaker(callback, action) {
    return callback(action);
}
const callback8 = (action) => action === 'start' ? 'Starting…' : 'Stopping…';
console.log(decisionMaker(callback8, 'start'));















//////////////////////////////////
// New question
//////////////////////////////////



// Task 1: Count Characters in Full Name
function countNameCharacters(fullName) {
    let nameWithoutSpaces = fullName.replace(/ /g, '');
    let characterCount = nameWithoutSpaces.length;
    return `Your name has ${characterCount} characters.`;
}

console.log(countNameCharacters("John Doe"));

// Task 2: Get Third Character
function getThirdCharacter(str) {
    if (str.length < 3) {
        return "The string is too short.";
    } else {
        return str[2];
    }
}

console.log(getThirdCharacter("Hello"));
console.log(getThirdCharacter("Hi"));

// Task 3: Unicode Value of Middle Character
function unicodeOfMiddleCharacter(str) {
    let middleIndex = Math.floor((str.length - 1) / 2);
    return str.charCodeAt(middleIndex);
}

console.log(unicodeOfMiddleCharacter("Hello"));

// Task 4: Check Report File
function checkReportFile(fileName) {
    if (fileName.startsWith("Report")) {
        return "This is a report file.";
    } else {
        return "This is not a report file.";
    }
}

console.log(checkReportFile("Report2022"));
console.log(checkReportFile("SalesReport"));

// Task 5: Check Image File
function checkImageFile(fileName) {
    if (fileName.endsWith(".jpg")) {
        return "This is an image file.";
    } else {
        return "This is not an image file.";
    }
}

console.log(checkImageFile("image.jpg"));
console.log(checkImageFile("document.pdf"));

// Task 6: Check Forbidden Word
function checkForbiddenWord(inputString) {
    if (inputString.includes("password")) {
        return "Your input contains a forbidden word.";
    } else {
        return "Input accepted.";
    }
}

console.log(checkForbiddenWord("mysecretpassword"));
console.log(checkForbiddenWord("hello world"));

// Task 7: Find Important Word
function findImportantWord(paragraph) {
    let index = paragraph.indexOf("important");
    if (index === -1) {
        return "The word 'important' is not in the paragraph.";
    } else {
        return index;
    }
}

console.log(findImportantWord("This is an important message."));
console.log(findImportantWord("Hello world."));

// Task 8: Replace Sad with Happy
function replaceSadWithHappy(sentence) {
    return sentence.replace(/sad/g, "happy");
}

console.log(replaceSadWithHappy("I feel sad today."));

// Task 9: Replace Mistake with Correction
function replaceMistakeWithCorrection(text) {
    return text.replace(/mistake/g, "correction");
}

console.log(replaceMistakeWithCorrection("I made a mistake again."));

// Task 10: Extract First 10 Characters
function extractFirst10Characters(str) {
    return str.substring(0, 10);
}

console.log(extractFirst10Characters("Hello, World!"));

// Task 11: Split Sentence into Words
function splitSentenceIntoWords(sentence) {
    let words = sentence.split(" ");
    console.log(words);
    words.forEach(word => console.log(word));
}

splitSentenceIntoWords("Hello world this is JavaScript");

// Task 12: Convert to Lowercase
function convertToLowerCase(sentence) {
    return sentence.toLowerCase();
}

console.log(convertToLowerCase("HELLO WORLD"));

// Task 13: Convert to Uppercase
function convertToUppercase(str) {
    return str.toUpperCase();
}

console.log(convertToUppercase("good morning"));

// Task 14: Convert Number to String
function convertNumberToString(num) {
    return `The number has been converted to a string: ${num.toString()}`;
}

console.log(convertNumberToString(123));

// Task 15: Remove Extra Spaces
function removeExtraSpaces(str) {
    return `Extra spaces have been removed: ${str.trim()}`;
}

console.log(removeExtraSpaces("   hello world   "));

// Task 16: Remove Leading Spaces
function removeLeadingSpaces(str) {
    return `Leading spaces have been removed: ${str.trimStart()}`;
}

console.log(removeLeadingSpaces("   learn JavaScript"));

// Task 17: Remove Trailing Spaces
function removeTrailingSpaces(str) {
    return `Trailing spaces have been removed: ${str.trimEnd()}`;
}

console.log(removeTrailingSpaces("coding is fun   "));

// Task 18: Check Uppercase Letter
function checkUppercaseStart(str) {
    if (str.length === 0) {
        return "The string is empty.";
    }
    const startsWithUppercase = str[0] === str[0].toUpperCase();
    return startsWithUppercase 
        ? "The string starts with an uppercase letter." 
        : "The string starts with a lowercase letter.";
}

console.log(checkUppercaseStart("Hello world"));
console.log(checkUppercaseStart("hello world"));
console.log(checkUppercaseStart("")); // Handle empty string


function capitalizeFirstLetter(sentence) {
    if (sentence.length === 0) {
        return "The sentence is empty.";
    }
    const firstLetter = sentence[0].toUpperCase();
    const restOfSentence = sentence.slice(1).toLowerCase();
    const updatedSentence = firstLetter + restOfSentence;
    return `Updated sentence: ${updatedSentence}`;
}

console.log(capitalizeFirstLetter("hello WORLD"));
console.log(capitalizeFirstLetter("hELLO wORLD"));
console.log(capitalizeFirstLetter("")); // Handle empty string


function countSpaces(sentence) {
  return `There are ${sentence.split(' ').length - 1} spaces in the sentence.`;
}
console.log(countSpaces('The quick brown fox jumps over the lazy dog.')); // Output: "There are 6 spaces in the sentence."