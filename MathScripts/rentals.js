 var numberOfPeople = 60;
 var passengersPerVan = 15;
 
 var vanCost = 250;
 var vansNeeded = Math.ceil(numberOfPeople / passengersPerVan);

  var totalCost = vanCost * vansNeeded;
  var costPerPerson = totalCost / numberOfPeople;

  console.log('van needed', vansNeeded);
  console.log('cost', totalCost);
  console.log('per person cost', costPerPerson.toFixed(2));

 