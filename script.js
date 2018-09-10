// Javascript Morning Exercise: Loops and Functions
// ================================================

// Exercise 1
// ==========
// Generate a random integer between 1 and 10.
// Prompt the user to guess the integer.
// Use a while loop to keep asking the user to guess an integer as long as his guess is not equal to the generated integer.
// Once he guesses it correctly, end the loop.
// Hint: What's the difference between a do-while loop and a while loop?

var randomInteger = Math.floor(Math.random() * 10 + 1);
var guess;

do {
  guess = prompt('Guess an integer between 1 and 10');
} while (parseInt(guess) !== randomInteger);

// Exercise 2: Reversing a String
// ==============================
// Write a function that takes a string as an argument and returns its reverse. For example, reverseString("abc defg")
// should return "gfed cba".

var reverseString = function (str) {
  var reversedString = [];
  var i;

  for (i = str.length - 1; i >= 0; i--) {
    reversedString.push(str[i]);
  }

  return reversedString.join('');
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

var reverseArray = function (arr) {
  var reversedArray = [];
  var i;

  for (i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
};

var multiplyByTwo = function (arr) {
  return Array.from(arr, function (num) {
    return num * 2;
  });
};

var sumOfArray = function (arr) {
  var reducer = function (sum, currentValue) {
    return sum += currentValue;
  };
  return arr.reduce(reducer);
};

var oddArray = function (arr) {
  return arr.filter(function (num) {
    return num % 2 === 1;
  });
};

var sumOfCurrentAndBefore = function (arr) {
  return arr.map(function (num, index) {
    if (index === 0) {
      return num;
    }

    return num + arr[index - 1];
  });
};

// Exercise 4
// ==========
// Examine the phonebook below.
// Write a function that takes an object, e.g. Phonebook, that uses a loop to return an object with keys and values swapped.

var Phonebook = {
  "Aaron": 92133243,
  "Betty": 91120543,
  "Cammy": 85535657,
  "Denise": 64122423,
  "Emma": 64485690,
  "Felicia": 83323669,
  "George": 98119091,
  "Herman": 63436894,
};

var swapPhonebook = function (phonebook) {
  var swappedPhonebook = {};
  var key;
  var value;

  for (key in phonebook) {
    value = phonebook[key];
    swappedPhonebook[value] = key;
  }

  return swappedPhonebook;
};

// Exercise 5
// ==========
// Examine the array below and the commented out loop that was written to console.log all the names from the array, starting from the last element.

var testArray = ["Alice", "Bobby", "Charles", "Daniel", "Elise", "Farnsworth", "Grace", "Horace", "Ihsan", "Jack"];

// Everytime the loop runs, the testArray.length decreases by 1.
for (var i = 0; i < testArray.length; i++) {
  // This line modifies the original testArray.
  var name = testArray.pop();

  console.log(name);
};

// Uncomment and run the code. What is wrong with the output?
// Explain the mistake in a comment on the line/lines that you think the mistake is at.
// Correct the code.

var testArrayLength = testArray.length;
for (var i = 0; i < testArrayLength; i++) {
  var name = testArray.pop();
  console.log(name);
}

// Extra Exercise 6: Merging and Sorting Arrays
// ============================================
// Write a function that takes 2 arrays of numbers and returns a single sorted array of numbers from both arrays.
// E.g. if the input arrays were var arr1 = [3, 6, 11] and var arr2 = [2, 4, 5, 8, 9] then mergeSortArrays(arr1, arr2)
// should return [2, 3, 4, 5, 6, 8, 9, 11].

// var mergeSortArrays = function (arr1, arr2) {
//   var mergedArray = arr1.concat(arr2);
//   return mergedArray.sort();
// };

// Extra Exercise 7A:
// Use loops to console log the following pictures
// ===============================================
// .*.X.*.X.*.X.*. (This pattern continues. Your loop should be able to console.log as long a pattern as required. Each iteration of your loop should console.log only 1 character.)

var printPictures = function (num) {
  var pattern = [];
  var i;
  var j;

  for (i = 0; i < num; i++) {
    for (j = 0; j < 3; j++) {
      if (j % 2 === 0) {
        pattern.push('.');
      } else {
        pattern.push('*');
      }
    }

    if (i < num - 1) {
      pattern.push('X');
    }
  }

  return pattern.join('');
};

// Extra Exercise 7B:
// (An equilateral triangle with sides of length 3.)
// Hint: You might need to use a loop within a loop, i.e. one loop to generate the rows, and another loop to generate the columns.
// Figure out the relationship between the locations of the *s on a row and the row numbers.
// ..*..
// .*.*.
// *****

var printTriangle = function (num) {
  var triangle = [];
  var totalColumns = num * 2 - 1;
  var row;
  var col;

  for (row = 0; row < num; row++) {
    if (row < num - 1) {
      for (col = 0; col < num - row - 1; col++) {
        triangle.push('.');
      }

      for (col = 0; col < row * 2 + 1; col++) {
        if (col % 2 === 0) {
          triangle.push('*');
        } else {
          triangle.push('.');
        }
      }

      for (col = 0; col < num - row - 1; col++) {
        triangle.push('.');
      }
    } else {
      for (col = 0; col < totalColumns; col++) {
        triangle.push('*');
      }
    }

    triangle.push('\n');
  }

  console.log(triangle.join(''));
};
