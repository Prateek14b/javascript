//DATA TYPES in JS: there are 8.
let n=123;
n=12.3;//first data type is number, which can be both integers and floats.

n2=Infinity;
alert('tHIS IS ANOTHER special type of number in JS: ', 1/0);
alert(-1/0); //this will return -Infinity, which is another special type of number in JS
n4=NaN; 

//next special data type is BigInt, which was recently introduced to store numbers larger than 2^53-1, which is the maximum safe integer in JS.
let bigInt1 = BigInt(1234567890123456789012345678901234567890);
let bigInt2 = 1234567890123456789012345678901234567890n; //appending 'n' to the end of the number also creates a BigInt.
alert('This is a BigInt: ', bigInt1, bigInt2);
//you cannot mix BigInt and regular numbers in operations, so you have to convert them to the same type before performing any operations on them.

