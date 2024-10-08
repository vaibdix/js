// Create a new Date object
const currentDate = new Date();

// Get the current date and time
console.log(currentDate); // Output: Mon Oct 07 2024 07:26:53 GMT+0000 (Coordinated Universal Time)

// Get the year, month, day, hour, minute, and second
console.log(currentDate.getFullYear()); // Output: 2024
console.log(currentDate.getMonth()); // Output: 9 (October is the 10th month, but it's 0-indexed)
console.log(currentDate.getDate()); // Output: 7
console.log(currentDate.getHours()); // Output: 7
console.log(currentDate.getMinutes()); // Output: 26
console.log(currentDate.getSeconds()); // Output: 53

const cd = new Date();
console.log(cd.getMonth());
// switch (cd.getMonth()) {
//     case 0:
//       document.write('Jan');
//       break;
//     case 1:
//       document.write('Feb');
//       break;
//     case 2:
//       document.write('Mar');
//       break;
//     case 3:
//       document.write('Apr');
//       break;
//     case 4:
//       document.write('May');
//       break;
//     case 5:
//       document.write('June');
//       break;
//     case 6:
//       document.write('July');
//       break;
//     case 7:
//       document.write('Aug');
//       break;
//     case 8:
//       document.write('Sep');
//       break;
//     case 9:
//       document.write('Oct');
//       break;
//     case 10:
//       document.write('Nov');
//       break;
//     case 11:
//       document.write('Dec');
//       break;
// }



function generateOTP() {
    let result = '';
    const characters = '0123456789';
    for (let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
console.log(generateOTP());


function generateOTP() {
    return Math.floor(1000 + Math.random() * 9999).toString();
}
console.log(generateOTP());

