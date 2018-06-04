// Javascript Morning Exercise: Loops and Functions
// ================================================

// Exercise 1
// ==========
// Generate a random integer between 1 and 10.
// Prompt the user to guess the integer.
// Use a while loop to keep asking the user to guess an integer as long as his guess is not equal to the generated integer.
// Once he guesses it correctly, end the loop.
// Hint: What's the difference between a do-while loop and a while loop?

// var randomNumber = Math.floor(Math.random() * 9 + 1);
// do {
// 	var guessNumber = prompt("Please guess an integer from 1 to 10:");	
// 	guessNumber = parseInt(guessNumber);
// }
// while(guessNumber !== randomNumber)
// alert("Well done!");

// Exercise 2: Reversing a String
// ==============================
// Write a function that takes a string as an argument and returns its reverse. For example, reverseString("abc defg")
// should return "gfed cba".

// function reverseString(str) {
// 	var result = "";
// 	for (var i = str.length - 1; i >= 0; i--) {
// 		result += str.charAt(i);
// 	}
// 	return result
// }
// console.log(reverseString("hello"));


// Exercise 3
// ==========
var numArray = [3, 9, 2, 5, 3, 6, 7, 4, 8, 1, 4, 10, 21, 43, 56, 23, 54, 94, 94, 0, -2, 4, 2, 7];

// Write functions that each take an array of numbers, e.g. numArray, and...
// 1. return an array with the elements in reverse order, e.g. reverseArray([1,2,3]) should return [3,2,1]
// 2. return an array with each element of the input array multiplied by 2, e.g. double([1,2,3]) should return [2,4,6]
// 3. return the sum up all the elements of the input array, e.g. sum([1,2,3]) should return 6
// 4. return an array with only odd numbers from the input array, e.g. onlyOdd([1,2,3,4,5]) should return [1,3,5]
// 5. (Bonus) return an array where each element in this new array is the sum of the element before it and the element in its current position in the old array, e.g. the first few elements in this new array would be `[3, 12, 11, 7, 8, ...]`

var test = [1,2,3,4];


// 1. Reversing array

// function reverseOrder(arr) {
// 	return arr.reverse();
// }
// console.log(reverseOrder(test);


// 2. Double up array

// function doubleUp(arr) {
// 	var result = [];
// 	arr.forEach(function(el) {
// 		result.push(el * 2);
// 	})
// 	return result;
// }
// console.log(doubleUp(test));


// 3. Summing up array

// function sumUp(arr) {
// 	var result = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		result += arr[i];
// 	}
// 	return result;
// }
// console.log(sumUp(test));


// 4. Only odd numbers

// function onlyOdd(arr) {
// 	var result = [];
// 	for (var i = 0; i< arr.length; i++) {
// 		if (arr[i] % 2 !== 0) {
// 			result.push(arr[i]);
// 		}
// 	}
// 	return result;
// }
// console.log(onlyOdd(test));


// 5. Bonus array

// function bonus(arr) {
// 	var result = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		var j = i + 1;
// 		var bonusArray = arr.slice(0, j);
// 		var addResult = sumUp(bonusArray);
// 		result.push(addResult);
// 	}
// 	return result;
// }
// console.log(bonus(test));


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

// function swappy(obj) {
// 	var newObj = {};
// 	for (keys in obj) {
// 		var values = obj[keys];
// 		newObj[values] = keys;
// 	}
// 	return newObj
// }
// console.log(swappy(Phonebook));








// Exercise 5
// ==========
// Examine the array below and the commented out loop that was written to console.log all the names from the array, starting from the last element.

// var testArray = ["Alice", "Bobby", "Charles", "Daniel", "Elise", "Farnsworth", "Grace", "Horace", "Ihsan", "Jack"];

// for (var i = testArray.length - 1; i >= 0; i--) { // testArray keeps getting shorter so it stops iterating
//     var name = testArray.pop();
//     console.log(name);
// };

// Uncomment and run the code. What is wrong with the output?
// Explain the mistake in a comment on the line/lines that you think the mistake is at.
// Correct the code.










// Extra Exercise 6: Merging and Sorting Arrays
// ============================================
// Write a function that takes 2 arrays of numbers and returns a single sorted array of numbers from both arrays.
// E.g. if the input arrays were var arr1 = [3, 6, 11] and var arr2 = [2, 4, 5, 8, 9] then mergeSortArrays(arr1, arr2)
// should return [2, 3, 4, 5, 6, 8, 9, 11].

// var test2 = [8,7,6,5];
// function mergeSortArray(arr1, arr2) {
// 	var result = arr1.concat(arr2);
// 	result = result.sort();
// 	return result;
// }
// console.log(mergeSortArray(test, test2));





// Extra Exercise 7A:
// Use loops to console log the following pictures
// ===============================================
// .*.X.*.X.*.X.*. (This pattern continues. Your loop should be able to console.log as long a pattern as required. Each iteration of your loop should console.log only 1 character.)

// function picture(num) {
// 	var result = ""
// 	var x = 2;
// 	for (var i = 0; i < num; i++) {
// 		if (i % 2 === 0) {
// 			result += ".";
// 		} else {
// 			if (x % 2 === 0) {
// 				result += "*";
// 			} else {
// 				result += "X";
// 			}
// 			if (x === 1) {
// 				x = 2;
// 			} else {
// 				x = 1;
// 			}
// 		}
// 	}
// 	console.log(result);
// }
// picture(100);


// Extra Exercise 7B:
// (An equilateral triangle with sides of length 3.)
// Hint: You might need to use a loop within a loop, i.e. one loop to generate the rows, and another loop to generate the columns.
// Figure out the relationship between the locations of the *s on a row and the row numbers.
// ..*..
// .*.*.
// *****

// for (var i = 0; i < 3; i++) {
// 	var result = ["","",""];
// 	if (i === 0) {
// 		for (var j = 0; j < 5; j++) {
// 			if (j === 2) {
// 				result[i] += "*";
// 			} else {
// 				result[i] += ".";
// 			}
// 		}
// 		console.log(result[i])
// 	} else if (i === 1) {
// 		for (var k = 0; k < 5; k++) {
// 			if (k % 2 === 0) {
// 				result[i] += ".";
// 			} else {
// 				result[i] += "*";
// 			}
// 		}
// 		console.log(result[i])
// 	} else if (i === 2) {
// 		for (var l = 0; l < 5; l++) {
// 			result[i] += "*";	
// 		}
// 		console.log(result[i]);
// 	}
// }





