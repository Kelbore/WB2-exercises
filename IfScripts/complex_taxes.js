var payRate = 25;
var hoursWorked = 40;
var pay;
var annualGrossPay;
var filingStatus = 'single';
var taxWithhold;

// calculate gross pay
if(hoursWorked > 40) {
    pay = (payRate * 40) + ((payRate * 1.5)*(hoursWorked - 40));
    console.log('You worked' + ' ' + hoursWorked + ' ' + 'hours this period');
    console.log('Because you earn' + ' ' + payRate + ' ' + 'per hour, your gross pay is' + ' ' + pay.toFixed(2));
    annualGrossPay = pay * 52;
}
else {
    pay = payRate * hoursWorked;
    console.log('You worked' + ' ' + hoursWorked + ' ' + 'hours this period');
    console.log('Because you earn' + ' ' + payRate + ' ' + 'per hour, your gross pay is' + ' ' + pay.toFixed(2));
    annualGrossPay = pay * 52;
}

// Determine and save the tax rate
if (annualGrossPay < 12000 && filingStatus == 'single') {
    console.log('Your filing status is Single');
    taxWithhold = pay * 0.05;
    console.log('Your tax withholdings this period is' + ' ' + taxWithhold);
}
else if (annualGrossPay <= 24999.99 && filingStatus == 'single') {
    console.log('Your filing status is Single');
    taxWithhold = pay * 0.1;
    console.log('Your tax withholdings this period is' + ' ' + taxWithhold);
}
else if (annualGrossPay <= 74999.99 && filingStatus == 'single') {
    console.log('Your filing status is Single');
    taxWithhold = pay * 0.15;
    console.log('Your tax withholdings this period is' + ' ' + taxWithhold);
}
else if (annualGrossPay > 74999.99 && filingStatus == 'single') {
    console.log('Your filing status is Single');
    taxWithhold = pay * 0.2;
    console.log('Your tax withholdings this period is' + ' ' + taxWithhold);
}
else if (annualGrossPay < 12000 && filingStatus == 'joint') {
    console.log('Your filing status is Joint');
    taxWithhold = pay * 0;
    console.log('Your tax withholdings this period is' + ' ' + taxWithhold);
}
else if (annualGrossPay <= 24999.99 && filingStatus == 'joint') {
    console.log('Your filing status is Joint');
    taxWithhold = pay * 0.06;
    console.log('Your tax withholdings this period is' + ' ' + taxWithhold);
}
else if (annualGrossPay <= 74999.99 && filingStatus == 'joint') {
    console.log('Your filing status is Joint');
    taxWithhold = pay * 0.11;
    console.log('Your tax withholdings this period is' + ' ' + taxWithhold);
}
else if (annualGrossPay > 74999.99 && filingStatus == 'joint') {
    console.log('Your filing status is Joint');
    taxWithhold = pay * 0.2;
    console.log('Your tax withholdings this period is' + ' ' + taxWithhold);
}