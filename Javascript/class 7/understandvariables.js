// function findThreshold(val) {
//     const theshold = 5.45;

//     if (val < theshold) {
//         return "Less than" + theshold;

//     } else if (val < 10) {
//             return "Less than 10"
//     } else {
//         return "Greater than or egual to " + theshold;
//         }
    
// }

// console.log(findThreshold(15.55));


// function lovYou(val) {
//   const minthreshold = 5.00022;
//   const maxThreshold = 10.000055;

//   if (val < minthreshold) {
//     return "less than min " + minthreshold;
//   } else if (val < maxThreshold) {
//     return "less than" + minthreshold;
//   } else {
//     return "greater than or equal to " + maxThreshold;
//   }
// }

// console.log(lovYou(15));






// Updating and Re-declaring:

// var (Can be updated and re-declared):
var x = 5;
var x = 10; // Re-declaration is allowed
x = 15;     // Updating is allowed


// let (Can be updated but not re-declared):
let y = 5;
y = 10;     // Updating is allowed
// let y = 15; // This would cause an error, re-declaration not allowed





// const (Cannot be updated or re - declared):


const z = 5;
// z = 10;     // This would cause an error, updating not allowed
// const z = 15; // This would cause an error, re-declaration not allowed



// Initialization:

var a;   // Declaration without initialization
let b;   // Declaration without initialization


// const (Must be initialized during declaration):

const c = 10; // Declaration with initialization
// const d;     // This would cause an error, must be initialized



// global scope 


// Think of the "global scope" as the biggest container in your code, like the whole playground. Variables declared in the global scope are like toys that all kids can play with, no matter where they are in the playground.

var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = "I'm global too";

function exampleFunction() {
  console.log(globalVar);   // Output: "I'm global"
  console.log(globalLet);   // Output: "I'm also global"
  console.log(globalConst); // Output: "I'm global too"
}

// Function Scope:
// Imagine a "function scope" as a smaller area within the playground, like a sandbox. Variables declared in a function scope are like toys that only kids inside that sandbox can play with. These toys are not accessible to kids outside the sandbox.

function exampleFunction() {
  var functionVar = "I'm in the function scope";
  let functionLet = "Me too";
  const functionConst = "So am I";

  if (true) {
    console.log(functionVar); // Output: "I'm in the function scope"
    console.log(functionLet); // Output: "Me too"
    console.log(functionConst); // Output: "So am I"
  }
}

// // Block Scope:
// Now, picture "block scope" as even smaller areas, like individual building blocks in the sandbox. Variables declared in a block scope, such as those inside an if statement or a loop, are like toys that can only be used within that specific building block. They are not available to kids playing in other blocks.

function exampleFunction() {
  if (true) {
    var blockVar = "I'm in the block scope";
    let blockLet = "I'm also in the block scope";
    const blockConst = "I'm in the block scope too";
  }

  console.log(blockVar); // Output: "I'm in the block scope"
  // These two will cause errors because they are block-scoped
  // console.log(blockLet);
  // console.log(blockConst);
}

// So, in simple terms:

// Global scope: Variables are like toys for all kids.
// Function scope: Variables are like toys in a sandbox for a specific group of kids.
// Block scope: Variables are like toys inside small sections of the sandbox for an even smaller group of kids.
