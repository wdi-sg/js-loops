// Javascript Morning Exercise: Loops and Functions
// ================================================

// Exercise 1
// ==========
// Generate a random integer between 1 and 10.
// Prompt the user to guess the integer.
// Use a while loop to keep asking the user to guess an integer as long as his guess is not equal to the generated integer.
// Once he guesses it correctly, end the loop.
// Hint: What's the difference between a do-while loop and a while loop?

var guessNumber = function () {
  var number = Math.floor(Math.random()*10 + 1);
  var guess;

  guess = parseInt(prompt("Guess a number between 1 and 10."));

  while (guess !== number) {
    guess = parseInt(prompt("Nope. Guess another number between 1 and 10."));
  }

  if (guess === number) {
    alert("You guessed the number correctly!");
  }
}

// Exercise 2: Reversing a String
// ==============================
// Write a function that takes a string as an argument and returns its reverse. For example, reverseString("abc defg")
// should return "gfed cba".

var reverseString = function (input) {
  var output = "";

  for (i = input.length - 1; i >= 0; i--) {
    output = output + input[i];
  }
  return output;
}

// Exercise 3
// ==========
var numArray = [3, 9, 2, 5, 3, 6, 7, 4, 8, 1, 4, 10, 21, 43, 56, 23, 54, 94, 94, 0, -2, 4, 2, 7];

// Write functions that each take an array of numbers, e.g. numArray, and...
// 1. return an array with the elements in reverse order, e.g. reverseArray([1,2,3]) should return [3,2,1]
var reverseArray = function (input) {
  var output = [];

  for (i = input.length - 1 ; i >=0; i--) {
    output.push(input[i]);
  }
  return output;
}

// 2. return an array with each element of the input array multiplied by 2, e.g. double([1,2,3]) should return [2,4,6]
var double = function(input) {
  var output = [];

  for (i in input) {
    output.push(2 * input[i]);
  }
  return output;
}

// 3. return the sum up all the elements of the input array, e.g. sum([1,2,3]) should return 6
var sum = function (input) {
  var output = 0;

  for (i in input) {
    output += input[i];
  }
  return output;
}

// 4. return an array with only odd numbers from the input array, e.g. onlyOdd([1,2,3,4,5]) should return [1,3,5]
var onlyOdd = function(input) {
  var output = [];

  for (i in input) {
    if (input[i] % 2 === 1) {
      output.push(input[i]);
    }
  }
  return output;
}

// 5. (Bonus) return an array where each element in this new array is the sum of the element before it and the element in its current position in the old array, e.g. the first few elements in this new array would be `[3, 12, 11, 7, 8, ...]`
var arrayAndPrevious = function (input) {
  var outputSum = 0;
  var output = [];

  for (i in input) {
    if (i > 0) {
      outputSum = parseInt(input[i]) + parseInt(input[i - 1]);
      output.push(outputSum);
    } else {
      output.push(input[i]);
    }
  }
  return output;
}

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

var reverseObject = function (input) {
  var output = {};
  var newKeys = Object.keys(input);
  var newValues = Object.values(input);

  for (i in newKeys) {
    output[newValues[i]] = newKeys[i];
  }
  return output;
}

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

/* Corrected code:
for (var i = 0; i < testArray.length; i++) {
  var name = testArray[i];
  console.log(name);
 };
 */

// Extra Exercise 6: Merging and Sorting Arrays
// ============================================
// Write a function that takes 2 arrays of numbers and returns a single sorted array of numbers from both arrays.
// E.g. if the input arrays were var arr1 = [3, 6, 11] and var arr2 = [2, 4, 5, 8, 9] then mergeSortArrays(arr1, arr2)
// should return [2, 3, 4, 5, 6, 8, 9, 11].

var mergeSortArrays = function (arr1, arr2) {
  var output = arr1.concat(arr2);
  output.sort(function(a, b){return a-b});
  return output;
}

// Extra Exercise 7A:
// Use loops to console log the following pictures
// ===============================================
// .*.X.*.X.*.X.*. (This pattern continues. Your loop should be able to console.log as long a pattern as required. Each iteration of your loop should console.log only 1 character.)

var pattern = function (length) {
  output = "";

  for (var i = 1; i <= length; i++) {
    if (i % 4 === 0) {
      output += "X";
    } else if (i % 2 === 0) {
      output += "*";
    } else {
      output += ".";
    }
  }
  return output;
}

// Extra Exercise 7B:
// (An equilateral triangle with sides of length 3.)
// Hint: You might need to use a loop within a loop, i.e. one loop to generate the rows, and another loop to generate the columns.
// Figure out the relationship between the locations of the *s on a row and the row numbers.
// ..*..
// .*.*.
// *****

var trianglePattern = function (length) {
  for (var i = 1; i <= length; i++) {

    if (i % 3 === 0) {
      console.log("*****");
    } else if (i % 3 === 1) {
      console.log("..*..");
    } else if (i % 3 === 2) {
      console.log(".*.*.");
    }
  }
}
