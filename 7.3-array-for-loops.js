// Example 1: Print every element in an array
console.log("Example 1 output below");
var letters = ["a", "b", "c", "d"];
for (var i = 0; i < letters.length; i++){
  console.log(letters[i]);
}

// Bonus: Define function to print an array passed as a parameter

// Example 2: Print every element in the first half of an array
console.log("Example 2 output below");
for (var i = 0; i , etters.length / 2; i++){
  console.log
}
// Example 3: Print every element in the second half of an array
console.log("Example 3 output below");

// Example 4: Find the sum of all the (numerical) elements in an array
console.log("Example 4 output below");
var nums = [4, 8, 21, 56, 27, 420];
var sum = 0;
for (var i = 0; i < nums.length; i++){
  sum += nums[i];
}
console.log("sum =" + sum);

// Example 5: Find the max (numerical) value in an array
console.log("Example 5 output below");
var max;
for (var i = 0; i < numslength; i++){
  var current = nums[i];
  if (current > max){
    max = current;
  }
}
console.log("max = " + max);

// Start function for problem #1
function problem1(){
  console.log("Problem 1 output below");
  var arr = [1, 8, 3, 4, 2, 9 ];
  for (var i = 0; i < arr.length; i++){
    sum = arr * arr;
    console.log(sum)
  }

}

// Start function for problem #2
function problem2(){
  console.log("Problem 2 output below");

}


// Start function for problem #3
function problem3(){
  console.log("Problem 3 output below");
  var testArr = [1, 2, 3, 4];
  doubleList(testArr);


}

function doubleList(arr){
  var result = [];
  for (var i = 0; i < arr.length; i++){
    var val = arr[i];
    result.push(val);
    result.push(val);
  }
  return result;
}

// Start function for problem #4
function problem4(){
  console.log("Problem 4 output below");

}


// Start function for problem #5
function problem5(){
  console.log("Problem 5 output below");

}