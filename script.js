// Javascript Morning Exercise: Loops and Functions
// ================================================

// Exercise 1
// ==========
// Generate a random integer between 1 and 10.
// Prompt the user to guess the integer.
// Use a while loop to keep asking the user to guess an integer as long as his guess is not equal to the generated integer.
// Once he guesses it correctly, end the loop.
// Hint: What's the difference between a do-while loop and a while loop?

var randomNumber = Math.ceil(Math.random() * 10);

while(true) {
  var userGuess = prompt("Guess a random number between 1 to 10");
  userGuess = parseInt(userGuess);

  if (userGuess === randomNumber) {
    alert("You got it right!");
    break;
  } else {
    alert("Try again!");
  };
};

// Exercise 2: Reversing a String
// ==============================
// Write a function that takes a string as an argument and returns its reverse. For example, reverseString("abc defg")
// should return "gfed cba".

function takeString(randomString) {
  var result = []
  if (typeof(randomString) == "string"); {
    var jumbledString = randomString.split();

    for(i = jumbledString.length - 1; i >= 0; i--) {
      result.push(jumbledString[i]);
    };
  };

  console.log("Exercise 2 Result: " + result);
  return result
};

// Exercise 3
// ==========
var numArray = [3, 9, 2, 5, 3, 6, 7, 4, 8, 1, 4, 10, 21, 43, 56, 23, 54, 94, 94, 0, -2, 4, 2, 7];

// Write functions that each take an array of numbers, e.g. numArray, and...
// 1. return an array with the elements in reverse order, e.g. reverseArray([1,2,3]) should return [3,2,1]
// 2. return an array with each element of the input array multiplied by 2, e.g. double([1,2,3]) should return [2,4,6]
// 3. return the sum up all the elements of the input array, e.g. sum([1,2,3]) should return 6
// 4. return an array with only odd numbers from the input array, e.g. onlyOdd([1,2,3,4,5]) should return [1,3,5]
// 5. (Bonus) return an array where each element in this new array is the sum of the element before it and the element in its current position in the old array, e.g. the first few elements in this new array would be `[3, 12, 11, 7, 8, ...]`

function exerciseThreeOne(arrayOfNumbers) {
  var result = [];

  for(a=0; a < arrayOfNumbers.length; a++) {
    result.unshift(arrayOfNumbers[a]);
  };

  console.log("Exercise 3.1 Result: " + result);
  return result;
};

exerciseThreeOne(numArray);

function exerciseThreeTwo(arrayOfNumbers) {
  var result = arrayOfNumbers.slice(0);
  // don't want to alter the original array

  for(b = 0; b < result.length; b++) {
    result[b] *= 2;
  };

  console.log("Exercise 3.2 Result: " + result);
  return result;
};

exerciseThreeTwo(numArray);

function exerciseThreeThree(arrayOfNumbers) {
  var result = 0;

  for(c = 0; c < arrayOfNumbers.length; c++) {
    result += arrayOfNumbers[c];
  };

  console.log("Exercise 3.3 Result: " + result);
  return result;
};

exerciseThreeThree(numArray);

function exerciseThreeFour(arrayOfNumbers) {
  var result = [];

  for(d = 0; d < arrayOfNumbers.length; d++) {
    if (arrayOfNumbers[d] % 2 == 1) {
      result.push(arrayOfNumbers[d]);
    };
  };

  console.log("Exercise 3.4 Result: " + result);
  return result;
};

exerciseThreeFour(numArray);

function exerciseThreeFive(arrayOfNumbers) {
  var result = [];

  for(e = arrayOfNumbers.length - 1; e >= 0; e--) {
    if (arrayOfNumbers[e-1] != undefined) {
      result.unshift(arrayOfNumbers[e] + arrayOfNumbers[e-1]);
    } else {
      result.unshift(arrayOfNumbers[e]);
    };
  };

  console.log("Exercise 3.5 Result: " + result);
  return result;
};

exerciseThreeFive(numArray);

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

function exerciseFour(myObject) {
  var newObject = {};

  for (keys in myObject) {
    var newKey = myObject.keys

    newObject[newKey] = keys;
  };

  console.log("Exercise 4 Result: " + newObject);
  return newObject;
};

exerciseFour(Phonebook);

// Exercise 5
// ==========
// Examine the array below and the commented out loop that was written to console.log all the names from the array, starting from the last element.

var testArray = ["Alice", "Bobby", "Charles", "Daniel", "Elise", "Farnsworth", "Grace", "Horace", "Ihsan", "Jack"];

while(testArray.length > 0) {
    var name = testArray.pop();
    console.log(name);
};

// using pop alters the length of the array,
// which makes it bad to iterate through every object

// Uncomment and run the code. What is wrong with the output?
// Explain the mistake in a comment on the line/lines that you think the mistake is at.
// Correct the code.


// Extra Exercise 6: Merging and Sorting Arrays
// ============================================
// Write a function that takes 2 arrays of numbers and returns a single sorted array of numbers from both arrays.
// E.g. if the input arrays were var arr1 = [3, 6, 11] and var arr2 = [2, 4, 5, 8, 9] then mergeSortArrays(arr1, arr2)
// should return [2, 3, 4, 5, 6, 8, 9, 11].

function exerciseSix(arrayOne, arrayTwo) {
  var combinedArray = arrayOne.concat(arrayTwo);
  var z = 0;

  while (z < combinedArray.length) {
    if (combinedArray[z] > combinedArray[z + 1]) {
        var holderOne = combinedArray[z];
        var holderTwo = combinedArray[z+1];

        combinedArray[z] = holderTwo;
        combinedArray[z+1] = holderOne;

        z = 0;
    } else {
        z++
    };
  };

  console.log("Exercise 6 Result: " + combinedArray);
  return combinedArray;
};


// Extra Exercise 7A:
// Use loops to console log the following pictures
// ===============================================
// .*.X.*.X.*.X.*. (This pattern continues. Your loop should be able to console.log as long a pattern as required. Each iteration of your loop should console.log only 1 character.)

function exerciseSeven() {
  var result = []

  for (y = 1; y < 16; y++) {
    if (y%4 === 0) {
      result.push("X");
    } else if (y%2 === 1) {
      result.push(".");
    } else {
      result.push("*");
    };
  };

  console.log(result.join(''));
};

exerciseSeven();

// Extra Exercise 7B:
// (An equilateral triangle with sides of length 3.)
// Hint: You might need to use a loop within a loop, i.e. one loop to generate the rows, and another loop to generate the columns.
// Figure out the relationship between the locations of the *s on a row and the row numbers.
// ..*..
// .*.*.
// *****

function printEquilateralTriangle(row, column) {
  var startingDots = (column - 1)/2;
  var startingMiddleDots = 0;

  for(x = 1; x <= row; x++) {
    var leftDots = startingDots;
    var rightDots = startingDots;
    var middleDots = startingMiddleDots;

    var resultHolder = [];

    for(w = 1; w <= column; w++) {
      if (x === row) {
        resultHolder.push("*");
        continue;
      };

      if(leftDots > 0) {
          resultHolder.push(".");
          leftDots -= 1;

          if (leftDots === 0) {
            resultHolder.push("*");
            w += 1;
          };

      } else if (middleDots > 0) {
          resultHolder.push(".");
          middleDots -= 1;

          if (middleDots === 0) {
            resultHolder.push("*");
            w += 1;
          };
      } else {
        resultHolder.push(".");
      };

    };

    startingDots -= 1;

    if (startingMiddleDots === 0) {
      startingMiddleDots += 1;
    } else {
      startingMiddleDots += 2;
    };

    console.log( resultHolder.join('') );
  };
};

printEquilateralTriangle(5,9);
