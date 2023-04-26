var currentHours = 19;
var ampm = 'PM';


if(0 <= currentHours <= 10 && ampm == 'AM') {
    console.log('Good morning!');
}
else if(10 <= currentHours <= 12 && ampm == 'AM') {
    console.log('Good day!');
}
else if(12 < currentHours < 17 && ampm == 'PM') {
    console.log('Good day!');
}
else{
    console.log('Good evening!');
}