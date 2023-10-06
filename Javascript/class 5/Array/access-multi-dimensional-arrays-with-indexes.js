// One way to think of a multi - dimensional array, is as an array of arrays.
// When you use brackets to access your array, the first set of brackets refers
// to the entries in the outermost(the first level) array,
// and each additional pair of brackets refers to the next level of entries inside.

const arr = [    [1, 2, 3],     [4, 5, 6],[7, 8, 9],     [[10, 11, 12], 13, 14]      ];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
const arun = arr[2][1];
const fourteen = arr[3][2];


console.log(subarray)
console.log(nestedSubarray)
console.log(element)
console.log(arun)
console.log(fourteen)






// Note: There shouldn't be any spaces between the array name and the square brackets, 
// like array  [0][0] and even this array[0] [0] is not allowed.Although JavaScript is able to process this correctly,
// this may confuse other programmers reading your code.




// excercise 
// Using bracket notation select an element from myArray such that myData is equal to 8.

// myData should be equal to 8.
// You should be using bracket notation to read the correct value from myArray.

// Setup


var myArray = [
  [1, 2, 3],//0
  [4, 5, 6],//1
  [7, 8, 9],//2
  [[10, 11, 12], 13, 14]//3
];


var myData = myArray[3][0][1];
console.log(myData)





