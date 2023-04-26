// Description: This script tests various numeric 
//                conversion techniques
//Author: Jordan Q. Newprogrammer

var a = "  101.1   ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5  ";

console.log('parseInt', parseInt(a));
console.log('parseInt', parseInt(b));
console.log('parseInt', parseInt(c));
console.log('parseInt', parseInt(d));
console.log('');

console.log('parseFloat', parseFloat(a));
console.log('parseFloat', parseFloat(b));
console.log('parseFloat', parseFloat(c));
console.log('parseFloat', parseFloat(d));
console.log('');

console.log('Number', Number(a));
console.log('Number', Number(b));
console.log('Number', Number(c));
console.log('Number', Number(d));
console.log('');

console.log('+', a, +a);
console.log('+', b, +b);
console.log('+', c, +c);
console.log('+', d, +d);