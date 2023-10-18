var numbers=[10, 20, 30, 40, 50, 60];
//1. get elements by index

var elements = numbers[2]
console.log(elements);
//2. set elements value by index
numbers[2] = 40;
numbers[3]= 50;
numbers[4]=60;
console.log(numbers);

// find index of an index
var positoIndex = numbers.indexOf(60);
var positoIndex2 = numbers.indexOf(600);
var positoIndex3 = numbers.indexOf(40);
console.log(positoIndex,positoIndex2,positoIndex3);
