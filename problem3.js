// Define the three numbers
var num1 = 13;
var num2 = 79;
var num3 = 45;
var num4 = 80;

// Initialize a variable to store the largest number
var largest;

// Compare num1 and num2
if (num1 > num2) {
    largest = num1;
} else {
    largest = num2;
}

// Compare the largest number (num1 or num2) with num3
if (num3 > num4) {
    largest = num3;
}
else{
    largest= num4;
}

// Print the largest number
console.log("The largest number is: " + largest);
