//STEP 1
// let month = prompt('Enter a month as a number');
// let date = new Date('2023', month, 0);
// console.log(date.getDate());

//STEP 2
// let dateInput = prompt('Enter a date as MM/DD/YYYY');
// let dateArray = dateInput.split('/').map((item) => Number(item));
// let date = new Date(dateArray[2],dateArray[0]);
// console.log(date.toDateString().slice(4,8));

//STEP 3
// let dateInput = prompt('Enter a date as MM/DD/YYYY');
// let dateArray = dateInput.split('/').map((item) => Number(item));
// let date = new Date(dateArray[2],dateArray[0], dateArray[1]);
// let day = date.getDay();
// if (day == 6 || day == 0) {
//     console.log('this is a weekend');
// } else {
//     console.log('this is not a weekend');
// }

//STEP 4
// let date = new Date();
// date.setDate(date.getDate() - 1);
// console.log(date.toDateString().slice(0,4));

//STEP 5
let date = new Date();
console.log(date.toDateString().slice(0,1));