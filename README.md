# Javascript Morning Exercise: Loops

## Exercise 1
Generate a random integer between 1 and 10.
Prompt the user to guess the integer.
Use a while loop to keep asking the user to guess an integer as long as his guess is not equal to the generated integer. Once he guesses it correctly, end the loop.

## Exercise 2
`var numArray = [3, 9, 2, 5, 3, 6, 7, 4, 8, 1, 4, 10, 21, 43, 56, 23, 54, 94, 94, 0, -2, 4, 2, 7]`

Use loops to...
1. multiply each element of the above array by 2
2. sum up all the elements of the above array
3. return an array with only odd numbers from the above array
4. find the last index of a given element in the array, e.g. the last index of 3 is 4.
5. (Bonus) return an array where each element in this new array is the sum of the element before it and the element in its current position in the old array, e.g. the first few elements in this new array would be `[3, 12, 11, 7, 8, ...]`

## Exercise 3
Examine the phonebook below.
```
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
```
Write a loop that gives an object with the keys and values swapped.

## Exercise 4
Examine the array below and the commented out loop that was written to console.log all the names from the array, starting from the last element.

`var testArray = ["Alice", "Bobby", "Charles", "Daniel", "Elise", "Farnsworth", "Grace", "Horace", "Ihsan", "Jack"];`

```
for (var i = 0; i < testArray.length; i++) {
    var name = testArray.pop();
    console.log(name);
};
```
Uncomment and run the code. What is wrong with the output?
Explain the mistake in a comment on the line/lines that you think the mistake is at.
Correct the code.

## Extra Exercise 5A:
Use loops to console log the following pictures:

`.*.X.*.X.*.X` (This pattern continues. Your loop should be able to console.log as long a pattern as required)

## Extra Exercise 5B:
An equilateral triangle with sides of length 3.
_Hint: You might need to use a loop within a loop, i.e. one loop to generate the rows, and another loop to generate the columns._
```
..*..
.*.*.
*****
```








