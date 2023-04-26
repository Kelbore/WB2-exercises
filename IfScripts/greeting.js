var currentHours = 11;
var ampm = 'AM';


if(currentHours <= 10 && ampm == 'AM') {
    console.log('Good morning!');
}
else if(currentHours <= 12 && ampm == 'AM') {
    console.log('Good day!');
}
else if(currentHours < 17 && ampm == 'PM') {
    console.log('Good day!');
}
else{
    console.log('Good evening!');
}

