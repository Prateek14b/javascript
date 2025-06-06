let name = 'Peter';
let surname = 'parker';

console.log(name);
console.log(surname);

let age=11;
console.log(age);

age=54; //reassigning

const pi = 3.14; //no need to use let on this. 

//pi=10; //this will throw an error because pi was declared as const, and this keyword prevents reassignment.

console.log(pi); //see for yourself. compiler doesn't even reach this line, due to error in preveious line.

let x=3;
alert(x===3);//the equality operator in js is triple equals, here since x stores int 5 and it is being compared to another int of equal value 5, true is returned!

//alert function above spits a warning pop-up message!

let s="you're"+'not welcome here!'; //string concatenation exists here too.
alert(s);


let a='1'+2; // this will return '12'. if js sees a string in the operation, it will automatically convert the other operand to string and concatenate them.

console.log(a);

let b='1'-'2'; //concatenation only works for + symbol. if js sees any other operator, automatically converts data types to numbers!
let c='1'/2; //here js sees a string and a number, so it converts the string to number and divides them.
let d='1'*2; //same as above, here js sees a string and a number, so it converts the string to number and multiplies them.

console.log(b,c,d);

let z=100 / 'Apple'; //here js is confused, so returns a NaN (Not a Number) value error.
alert(isNaN(z)); //isNaN function checks if the value is NaN or not. It returns true if the value is NaN, otherwise false.

let num1=10;
num2=num1++; //postfix increment operator. 
num3=++num1;//prefix increment operator.

//both operators above do the same thing of plus 1, but prefix operator returns the incremented value, while psotfix operator increments the value AFTER RETURNING OLD VALUE.

console.log('See for yourself! num2 is: ',num2, 'and num3 is: ',num3);

//there's something called operator precedence, which is basically like bodmas from school. higher priority receives higher precedence number.
//one caveat is the difference in precedence between unary and binary plus operators. unary operators(like +) have higher precendece number than binary plus operator(+), so, in an operation, unary is computed first before binary.
//also assignment operator has the lowest precedence number, so it is computed last in an operation -- unless it is nested within parentheses, in which case it is computed first. paranthese have highest precedence number, so they are computed first in an operation.

let apples = '2';
let oranges = '3';
alert(+apples + +oranges); //here the unary operator plus that is placed before the variables apples and oranges converts them to numbers, so the result is 5. if we had used binary plus operator, it would have concatenated them as strings and returned '23' instead of 5.
alert(apples + oranges);//see the difference? here the binary plus operator concatenates the strings apples and oranges, so the result is '23' instead of 5.

//basically, function of unary plus operator is to convert any data type to a number. like +'' would convert to 0, and +true would convert to 1. pretty intuitive


//NODE.JS

//this is a javascript runtime environment that allows us to run javascript code outside of a browser. it is built on the V8 engine, which is the same engine that powers Google Chrome. it allows us to run javascript code on the server side, and it has a lot of built-in modules that we can use to build web applications.
//NODE downloaded and installed!

