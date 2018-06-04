// Javascript Morning Exercise: Loops and Functions
// ================================================

// Exercise 1
// ==========
// Generate a random integer between 1 and 10.
// Prompt the user to guess the integer.
// Use a while loop to keep asking the user to guess an integer as long as his guess is not equal to the generated integer.
// Once he guesses it correctly, end the loop.
// Hint: What's the difference between a do-while loop and a while loop?


// var randomInt = Math.floor(Math.random() * 10) +1;

// do {
// 	var userInt = parseInt(prompt("Guess a number from 1 to 10!"));
// 	console.log("Try Again");
// }
// while (randomInt !== userInt);

// console.log("GOOD JOB!")


// Exercise 2: Reversing a String
// ==============================
// Write a function that takes a string as an argument and returns its reverse. For example, reverseString("abc defg")
// should return "gfed cba".


// !! DONE
// var newString = function(sentence) {
// 	arraySentence = sentence.split("");
// 	reverseArray = arraySentence.reverse();
// 	reverseString = reverseArray.join('')
	
// 	console.log(reverseString);
// }

// newString("hello noob");



// Exercise 3
// ==========
var numArray = [3, 9, 2, 5, 3, 6, 7, 4, 8, 1, 4, 10, 21, 43, 56, 23, 54, 94, 94, 0, -2, 4, 2, 7];

// Write functions that each take an array of numbers, e.g. numArray, and...
// 1. return an array with the elements in reverse order, e.g. reverseArray([1,2,3]) should return [3,2,1]
// 2. return an array with each element of the input array multiplied by 2, e.g. double([1,2,3]) should return [2,4,6]
// 3. return the sum up all the elements of the input array, e.g. sum([1,2,3]) should return 6
// 4. return an array with only odd numbers from the input array, e.g. onlyOdd([1,2,3,4,5]) should return [1,3,5]
// 5. (Bonus) return an array where each element in this new array is the sum of the element before it and the element in its current position in the old array, e.g. the first few elements in this new array would be `[3, 12, 11, 7, 8, ...]`

// // return reverse order of array
// var numArray1 = function (array1) {
// 	reverseArray = array1.reverse();
// 	return reverseArray;
// }
// // console.log(numArray1(numArray));


// var numArray2 = function (array2) {
// 	var multiplyTwo = array2.map(function by2 (x) { return x * 2 });    // array2.map(x => x * 2 });
// 	return multiplyTwo;
// }

// // console.log(numArray2(numArray));


// var numArray3 = function(array3) {
// 	var sumArray = array3.reduce(function hello (x, y) { return x + y });
// 	return sumArray;
// }

// console.log(numArray3(numArray));


// var numArray4 = function(array4) {
// 	var oddNum = [];
// 	for ( var i = 0; i < array4.length; i++) {
// 		if (i % 2 === 1) {
// 			oddNum.push(i);
// 		}
// 	}
// 	return oddNum;
// }

// // console.log(numArray4(numArray));


// BONUS NOT DONE!!!


// Exercise 4
// ==========
// Examine the phonebook below.
// Write a function that takes an object, e.g. Phonebook, that uses a loop to return an object with keys and values swapped.
var Phonebook = {
    "Aaron":    92133243,
    "Betty":    91120543,
    "Cammy":    85535657,
    "Denise":   64122423,
    "Emma":     64485690,
    "Felicia":  83323669,
    "George":   98119091,
    "Herman":   63436894,
};



// var swapThis = function (objName) {
//     var newObj = {};
//     for (phoneNames in objName) {      // phoneNames is old keys
//         var newValues = objName[phoneNames];
//         newObj[newValues] = phoneNames   // states that the new keys are the phone names
//     }
//     return newObj;
// }

// console.log(swapThis(Phonebook));


// Exercise 5
// ==========
// Examine the array below and the commented out loop that was written to console.log all the names from the array, starting from the last element.

var testArray = ["Alice", "Bobby", "Charles", "Daniel", "Elise", "Farnsworth", "Grace", "Horace", "Ihsan", "Jack"];

// for (var i = 0; i < testArray.length; i++) {
//     var name = testArray.pop();
//     console.log(name);
// };


// Uncomment and run the code. What is wrong with the output?
// Explain the mistake in a comment on the line/lines that you think the mistake is at.
// Correct the code.


// when i = 1 ; testArray.length = 9
// i = 2 ; testArray.length = 8
// i = 3 ; testArray.length = 7
// i = 4 ; testArray.length = 6
// when i = 5 ; testArray.length = 5
// it does not meet the i < testArray.length, hence the code will not run.


//  while (testArray.length > 0) {
//     var name = testArray.pop();
//     console.log(name);
// }


// Extra Exercise 6: Merging and Sorting Arrays
// ============================================
// Write a function that takes 2 arrays of numbers and returns a single sorted array of numbers from both arrays.
// E.g. if the input arrays were var arr1 = [3, 6, 11] and var arr2 = [2, 4, 5, 8, 9] then mergeSortArrays(arr1, arr2)
// should return [2, 3, 4, 5, 6, 8, 9, 11].

// var firstArr = [3, 6, 11];
// var secondArr = [2, 4, 6, 8, 9]


// var mergeSortArrays = function (arr1, arr2) {
//     var concatArr = firstArr.concat(secondArr);
//     var finalArr = concatArr.sort(function(a, b) { return a - b});
//     return finalArr;
// }

// console.log(mergeSortArrays(firstArr, secondArr));




// Extra Exercise 7A:
// Use loops to console log the following pictures
// ===============================================
// .*.X.*.X.*.X.*. (This pattern continues. Your loop should be able to console.log as long a pattern as required. Each iteration of your loop should console.log only 1 character.)

// var patternLength = 14;  // can change pattern length if needed

// var pattern = "."


// for (var i = 0; i < patternLength; i++) {
//     if (i % 4 === 0) {
//         pattern += "*"
//     } else if (i % 2 === 0) {
//         pattern += "X"
//     } else {
//         pattern += "."
//     }
// }

// console.log(pattern);



// Extra Exercise 7B:
// (An equilateral triangle with sides of length 3.)
// Hint: You might need to use a loop within a loop, i.e. one loop to generate the rows, and another loop to generate the columns.
// Figure out the relationship between the locations of the *s on a row and the row numbers.
// ..*..
// .*.*.
// *****

// * on tri
//           [2]
//         [6][8]
// [10][11][12][13][14]
// \n every length. length = 5

var length = 5
var height = 3

triangle = "";

for (var i = 0; i < height; i ++) {         // i is the height index
    for (var j = 0; j < length; j++) {      // j is the length index
       
        if (i === 2){                       // 3rd row
            triangle += "*";


        } else if (i === 1) {               // 2nd row
            if (j % 2 === 0){
                triangle += ".";
            } else {
                triangle += "*"
            }


        } else if (i === 0) {               // 1st row
            if (j === 2) {
                triangle += "*"
            } else {
                triangle += "."
            }
        } // no else
    } // end j for loop
    triangle += "\n";
}

console.log(triangle)








// OMG I DID IT!! :D