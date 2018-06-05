// Javascript Morning Exercise: Loops and Functions
// ================================================

// Exercise 1
// ==========
// Generate a random integer between 1 and 10.
// Prompt the user to guess the integer.
// Use a while loop to keep asking the user to guess an integer as long as his guess is not equal to the generated integer.
// Once he guesses it correctly, end the loop.
// Hint: What's the difference between a do-while loop and a while loop?
var E1 = function () {
	var rand = Math.floor(Math.random() * 10) + 1;
	var userGuess = prompt('please guess a number between 1 and 10');

	while (userGuess != rand) {
		var userGuess = prompt('WRONG! please guess a number between 1 and 10');
	}

	alert('you guessed it!');
};






// Exercise 2: Reversing a String
// ==============================
// Write a function that takes a string as an argument and returns its reverse. For example, reverseString("abc defg")
// should return "gfed cba".
var E2 = function () {
	var string = prompt('please give me a string:)');
	var array = string.split('');
	var copy = [];

	for(var i=0; i<string.length; i++) {
		copy.push(array[i]);
	};

	for (var i = 0; i < copy.length; i++) {
		array[copy.length - 1-i] = copy[i];	
	};

	string = array.join('');
	console.log(string);
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
var E31 = function (array) {
	var copy = [];

	for (var i = 0; i<array.length; i++) {
		copy[i] = array[i];
	};

	for (var i = 0; i < copy.length; i++) {
		array[copy.length - 1-i] = copy[i];	
	};

	console.log(array);
};



var E32 = function (array) {
	var copy = [];

	for (var i = 0; i<array.length; i++) {
		copy[i] = array[i] * 2;
	};

	for (var i = 0; i < copy.length; i++) {
		array[copy.length - 1-i] = copy[i];	
	};

	console.log(array);
};



var E33 = function (array) {
	var sum = 0;

	for (var i = 0; i < array.length; i++) {
		sum += array[i];	
	};

	console.log(sum);
};


var E34 = function (array) {
	var select = [];
	var a = 0;

	for (var i = 0; i < array.length; i++) {
		if (array[i]%2 == 0) {
			select[a] = array[i];
			a ++;
		};
	};

	console.log(select);
};



var E35 = function (array) {
	var revised = [];

	for (var i = 0; i < array.length; i++) {
		if (i != 0){
			revised[i] = array[i] + array[i-1]; 
		} else {
			revised[i] = array[i];
		};
	};

	console.log(revised);
};


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

var E4 = function (object) {
	var keys = Object.keys(object);
	var values = Object.values(object);

	for (var i = 0; i < keys.length; i++) {
		delete object[keys[i]];
		object[values[i]] = keys[i];
	};

	console.log(object);
};

E4(Phonebook);





// Exercise 5
// ==========
// Examine the array below and the commented out loop that was written to console.log all the names from the array, starting from the last element.
var E5 = function () {
	var testArray = ["Alice", "Bobby", "Charles", "Daniel", "Elise", "Farnsworth", "Grace", "Horace", "Ihsan", "Jack"];
	var arrayLength = testArray.length;

	for (var i = 0; i < arrayLength; i++) {
	    var name = testArray.pop();
	    console.log(name);
	};
};

// Uncomment and run the code. What is wrong with the output?
// Explain the mistake in a comment on the line/lines that you think the mistake is at.
// Correct the code.

// the mistake is due to the for loop making i < testArray.length. 
// As the array continues to go through the for loop and pops, the testArray.length also decreases,
// causing the i to eventually be >= to testArray.length without going through the entire original array









// Extra Exercise 6: Merging and Sorting Arrays
// ============================================
// Write a function that takes 2 arrays of numbers and returns a single sorted array of numbers from both arrays.
// E.g. if the input arrays were var arr1 = [3, 6, 11] and var arr2 = [2, 4, 5, 8, 9] then mergeSortArrays(arr1, arr2)
// should return [2, 3, 4, 5, 6, 8, 9, 11].
var arrayOne = [3,6,11];
var arrayTwo = [2,4,5,8,9];

var E6 = function (arr1, arr2) {
	arr1.sort();
	arr2.sort();
	var newArr = [];
	var end = 0;

	for (var i = 0; i < arr1.length; i++) {
		newArr.push(arr1[i]);
	}

	for (var i = 0; i < arr2.length; i++) {
		newArr.push(arr2[i]);
	}

	newArr.sort(function(a, b){return a-b});

	console.log(newArr);
};









// Extra Exercise 7A:
// Use loops to console log the following pictures
// ===============================================
// .*.X.*.X.*.X.*. (This pattern continues. Your loop should be able to console.log as long a pattern as required. Each iteration of your loop should console.log only 1 character.)
var E7A = function () {
	var num = 3
	// parseInt(prompt('how many X-es do u want?'));

	var x = 0;
	var char = 0;
	var string = [];

	for (var i = 0; i < num*4 + 3; i++) {
		if(string[string.length-1] == '.' && string[string.length-2] == '*' ) {
			string.push('X');
		} else if (string[string.length-1] == '.' && string[string.length-2] == 'X' ) {
			string.push('*');
		} else if (string[string.length-1] == '*') {
			string.push('.');
		} else if (string[string.length-1] == "X") {
			string.push('.');
		} else if (string.length == 0) {
			string.push('.');
		} else if (string[string.length-1] == '.') {
			string.push('*');
		}
	}

	string.join('');
    console.log(string);
	console.log(string.join(''));
};









// Extra Exercise 7B:
// (An equilateral triangle with sides of length 3.)
// Hint: You might need to use a loop within a loop, i.e. one loop to generate the rows, and another loop to generate the columns.
// Figure out the relationship between the locations of the *s on a row and the row numbers.
// ..*..
// .*.*.
// *****

var E7B = function () {
	var num = 7;
	var arr = [];

	for (var i = 0; i < num+(num-1); i++) {
		for (var a = 0; a < num; a++) {
			
			if (i == 0 && a < num-1){ //create the first column
				arr.push(['.']);
			} else if (i == 0 && a == num-1) {
				arr.push(['*']);
			} else if(a == num-1) { //making the last row
				arr[a].push('*');
			} else if (a == num-i-1 && i<=num-1){
				arr[a].push('*');
			} else if (a == 1 + i - num && i > num-1){
				arr[a].push('*');
			} else {
				arr[a].push('.');
			};


			// if (i > 0 && a == num) {
			// 	arr[num-1].push('*');
			// } else if (i > 0 && a == num - (a-1)) {
			// 	arr[num-a-1].push('*');
			// } else if (i > 0 && a == num + (a-1)) {
			// 	arr[num+a-2].push('*');
			// }

			// for (var b = 0; b < num+(num-1); b++) {
			// 	if (a == b+1 ) {
			// 		arr[a].push('*')
			// 	} 
			// }
		}
	}

	console.log(arr);

	// for (var i = 0; i < arr.length; i++) {
	// 	arr[i] = arr[i].join('');
	// }

	// console.log(arr);
}


// E7B();







