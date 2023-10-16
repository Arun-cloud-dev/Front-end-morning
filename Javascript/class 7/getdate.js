const dates = new Date()
console.log(dates)



const date = new Date();


let day = date.getDate();
let month = date.getMonth() + 1 ;
let year = date.getFullYear();


let curentdate = `The current date is :${day}-${month}-${year}`;
console.log(curentdate);


let datess = new Date().toLocaleDateString();
console.log(datess);

let dates = new Date().toLocaleDateString("ja_JP");
console.log(dates)




const moment = require('moment');

var date = moment();
var currentDate = date.format('D/MM/YYYY');
console.log(currentDate);
