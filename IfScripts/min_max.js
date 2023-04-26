var a = 22;
var b = 20;
var c = 50;

// Determine the maximum number 
if(a > b && a > c) {
    console.log('The maximum number is' + ' ' + a);
}
else if(b > a && b > c) {
    console.log('The maximum number is' + ' ' + b);
}
else if(c > a && c > b) {
    console.log('The maximum number is' + ' ' + c);
}

// Determine the minimum number
if(a < b && a < c) {
    console.log('The minimum number is' + ' ' + a);
}
else if(b < a && b < c) {
    console.log('The minimum number is' + ' ' + b);
}
else if(c < a && c < b) {
    console.log('The minimum number is' + ' ' + c);
}