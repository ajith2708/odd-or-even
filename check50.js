//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function test50(x, y) {
    console.log("the output is", x + y);
    return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50));
console.log(test50(20, 50));
console.log(test50(20, 20));
console.log(test50(20, 30));
