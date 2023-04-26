var payRate = 17.30;
var hoursWorked = 45;
var pay;

if(hoursWorked > 40) {
    pay = (payRate * 40) + ((payRate * 1.5)*(hoursWorked - 40));
    console.log('You worked' + ' ' + hoursWorked + ' ' + 'hours this week');
    console.log('Your payment for this week is' + ' ' + pay.toFixed(2));
}
else {
    pay = payRate * hoursWorked;
    console.log('You worked' + ' ' + hoursWorked + ' ' + 'hours this week');
    console.log('Your payment for this week is' + ' ' + pay.toFixed(2));
}