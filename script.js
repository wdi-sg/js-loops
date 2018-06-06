// Javascript Morning Exercise: Loops and Functions
// ================================================

// Exercise 1
// ==========
// Generate a random integer between 1 and 10.
// Prompt the user to guess the integer.
// Use a while loop to keep asking the user to guess an integer as long as his guess is not equal to the generated integer.
// Once he guesses it correctly, end the loop.
// Hint: What's the difference between a do-while loop and a while loop?

// do {

//     var randomNumber = Math.floor(Math.random()*10) + 1;

//     var userGuess = parseInt(prompt("Enter an integer between 1 to 10"));

//     if (userGuess === randomNumber) {

//         console.log("You've guessed it! The random number was: " + randomNumber);

//     } else {

//         console.log("Wrong number! The random number was: " + randomNumber);

//     }

// } while (userGuess !== randomNumber);

// Exercise 2: Reversing a String
// ==============================
// Write a function that takes a string as an argument and returns its reverse. For example, reverseString("abc defg")
// should return "gfed cba".


// var reverseString = function(string) {

//     var splitString = string.split("");

//     var reverseArray = splitString.reverse();

//     var joinArray = reverseArray.join("");

//     return joinArray;
// }

// console.log(reverseString(prompt("Input a string to reverse")));


// Exercise 3
// ==========
// var numArray = [3, 9, 2, 5, 3, 6, 7, 4, 8, 1, 4, 10, 21, 43, 56, 23, 54, 94, 94, 0, -2, 4, 2, 7];

// Write functions that each take an array of numbers, e.g. numArray, and...
// 1. return an array with the elements in reverse order, e.g. reverseArray([1,2,3]) should return [3,2,1]

// var reverseArray = function(numArray) {

//     var newNumArray = new Array;

//     for (var i = numArray.length-1; i >= 0; i--) {

//         newNumArray.push(numArray[i]);

//     }

//     return newNumArray;

// }

// console.log(reverseArray(numArray));

// 2. return an array with each element of the input array multiplied by 2, e.g. double([1,2,3]) should return [2,4,6]

// var reverseArray = function(numArray) {

//     var newNumArray = new Array;

//     for(var i = numArray.length-1; i >= 0; i--) {

//         newNumArray.push(numArray[i] * 2);

//     }

//     return newNumArray;

// }

// console.log(reverseArray(numArray));

// 3. return the sum up all the elements of the input array, e.g. sum([1,2,3]) should return 6

// Option 1:
// var sumOfArray = numArray.reduce((a, b) => a + b, 0);
// console.log(sumOfArray);

// Option 2:
// var sum = 0;
// var addTotalSum = function(item) {
//     for (var i in numArray) {
//         sum += numArray[i];
//     }
//     return sum;
// }

// console.log(addTotalSum(numArray));

// 4. return an array with only odd numbers from the input array, e.g. onlyOdd([1,2,3,4,5]) should return [1,3,5]

// var onlyOddArray = [];
// var findOddNumber = function(item) {
//     for (var i in numArray) {
//         if (numArray[i] % 2 === 1) {
//             onlyOddArray.push(numArray[i]);
//         }
//     }
//     return onlyOddArray;
// }

// console.log(findOddNumber(numArray));

// 5. (Bonus) return an array where each element in this new array is the sum of the element before it and the element in its current position in the old array, e.g. the first few elements in this new array would be `[3, 12, 11, 7, 8, ...]`

// var modify = function(array, n) {

//     // Nothing to do when array size is 1
//     if (n <= 1) {
//         return;
//     }

//     // store current value of arr[0] and update it
//     var previous = array[0]
//     array[0] = array[0] + array[1]

//     // Update rest of the array elements
//     for (i = 1; i < n-1; i++) {

//         // Store current value of next interation
//         var current = array[i];

//         // Update current value using previos value
//         array[i] = previous + array[i+1];

//         // Update previous value
//         previous = current;
//     }

//     // Update last array element
//     array[n-1] = previous + array[n-1]

// }

// modify(numArray, numArray.length);

// console.log(numArray);


// Exercise 4
// ==========
// Examine the phonebook below.
// Write a function that takes an object, e.g. Phonebook, that uses a loop to return an object with keys and values swapped.

// var Phonebook = {
//     "Aaron":    92133243,
//     "Betty":    91120543,
//     "Cammy":    85535657,
//     "Denise":   64122423,
//     "Emma":     64485690,
//     "Felicia":  83323669,
//     "George":   98119091,
//     "Herman":   63436894,
// };

// var swapKeyAndValue = function(phonebook) {
//   var newObject = {};
//   for(var key in phonebook) {
//     newObject[phonebook[key]] = key;
//   }
//   return newObject;
// }

// console.log(swapKeyAndValue(Phonebook));

// Exercise 5
// ==========
// Examine the array below and the commented out loop that was written to console.log all the names from the array, starting from the last element.
// Uncomment and run the code. What is wrong with the output?
// Explain the mistake in a comment on the line/lines that you think the mistake is at.
// Correct the code.

// var testArray = ["Alice", "Bobby", "Charles", "Daniel", "Elise", "Farnsworth", "Grace", "Horace", "Ihsan", "Jack"];

// for (var i = 0; i < testArray.length; i++) { // to start from the last element, should decrease i instead;
//     arrayFromLastElement.push(testArray[i]);
//     var name = testArray.pop(); // wrong method .pop() is used to remove last element
//     console.log(name); // should log from outside of loop for one array list
// };


// //Correction:
// var testArray = ["Alice", "Bobby", "Charles", "Daniel", "Elise", "Farnsworth", "Grace", "Horace", "Ihsan", "Jack"];

// var arrayFromLastElement = [];

// for (var i = testArray.length - 1; i >= 0; i--) {

//     arrayFromLastElement.push(testArray[i]);

// };

// console.log(arrayFromLastElement);


// Extra Exercise 6: Merging and Sorting Arrays
// ============================================
// Write a function that takes 2 arrays of numbers and returns a single sorted array of numbers from both arrays.
// E.g. if the input arrays were var arr1 = [3, 6, 11] and var arr2 = [2, 4, 5, 8, 9] then mergeSortArrays(arr1, arr2)
// should return [2, 3, 4, 5, 6, 8, 9, 11].

// var arrayOne = [4,2,1,3,5];
// var arrayTwo = [7,9,10,8,6];

// // merge two arrays option 1:
// var mergedArray = arrayOne.concat(arrayTwo);
// // merge two arrays option 2:
// for (var i = 0; i < arrayTwo.length; i++) {
//     arrayOne.push(arrayTwo[i]);
// }

// // then sort the merged array (if array is string)):
// var sortedArray = mergedArray.sort();

// // then sort the merged array in ascending order:
// mergedArray.sort(function(a, b) {
//     return a - b;
// });
// console.log(mergedArray);

// // OR then sort the merged array in descending order:
// mergedArray.sort(function(a, b) {
//     return b - a;
// });
// console.log(mergedArray);


// Extra Exercise 7A:
// Use loops to console log the following pictures
// ===============================================
// .*.X.*.X.*.X.*. (This pattern continues. Your loop should be able to console.log as long a pattern as required.
// Each iteration of your loop should console.log only 1 character.)


// var picture = [".", "*",".","X"];
// var userRequestStop = false;
// var counter = 0;
// var printPicture = "";

// while (!userRequestStop && counter < 4) {
//     printPicture += picture[counter];
//     console.log(printPicture);
//     if (counter < 4) {
//         counter +=1;
//     }
//     if (counter > 3) {
//         counter = 0
//     }
//     userRequestStop = confirm("Do you want to stop?");
// }

// if (userRequestStop) {
//     alert("Your picture outcome:\n" + printPicture);
// }


// Extra Exercise 7B:
// (An equilateral triangle with sides of length 3.)
// Hint: You might need to use a loop within a loop, i.e. one loop to generate the rows, and another loop to generate the columns.
// Figure out the relationship between the locations of the *s on a row and the row numbers.
// ..*..
// .*.*.
// *****

// build 1 string per line
// for (i = 1; i <= 3; i++) {
//   // Initialize all characters to dots
//   var dotString = [".", ".", ".", ".", "."];

//   // change dots into stars depending on the line number
//   // choose to use the symmetry by converting dots into starts from the center
//   for (j = 0; j < i; j++) {
//     dotString[2 - j] = "*";
//     dotString[2 + j] = "*";
//   }

//   // special case for second line.
//   // if we don't put that we will obtain second line like this:
//   // ..*..
//   // .***.
//   // *****

//   if (i === 2) {
//     dotString[2] = ".";
//   }

//   // turn array into string
//   // building the actual output string by concatenating the individual characters
//   var finalString = "";
//   for (k = 0; k < dotString.length; k++) {
//     finalString += dotString[k];
//   }

//   // Display the final string
//   console.log(finalString);
// }

// // Option 2 for generic triangle
// // Building the actual output string by concatenating the individual
// // characters.
// var arrayToString = function(array) {
//   var finalString = "";
//   for (k = 0; k < array.length; k++) {
//     finalString += array[k];
//   }
//   return finalString;
// }

// var buildTriangle = function(numberOfColumns) {
//   if (numberOfColumns % 2 == 0) {
//     console.log("The number of columns needs to be odd!!!!!!");
//     return;
//   }
//   // We build 1 line at a time.
//   for (i=0; i<(numberOfColumns+1)/2 - 1; i++) {
//     var centerIndex = (numberOfColumns - 1) / 2;
//     // Initialize all characters to dots.
//     var currentLineArray = [];
//     for (j = 0; j<numberOfColumns; j++) {
//       currentLineArray.push(".");
//     }

//     // Change dots into stars depending on the line number.
//     // Here, we choose to use the symmetry by converting dots into starts
//     // from the center.
//     currentLineArray[centerIndex - i] = "*";
//     currentLineArray[centerIndex + i] = "*";

//     // Display the current line string
//     var finalString = arrayToString(currentLineArray);
//     console.log(finalString);
//   }
//   var lastLineArray = [];
//   for (j = 0; j<numberOfColumns; j++) {
//     lastLineArray.push("*");
//   }
//   // Display the current line string
//   var finalString = arrayToString(lastLineArray);
//   console.log(finalString);
// }

// // Only needs to specify the number of columns, because the required number
// // of rows is then: numberOfRows = (numberOfColumns + 1) / 2
// buildTriangle(45);