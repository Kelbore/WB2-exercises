// gather inputs
var length = 40;
var width = 30;
var tilesPerBox = 12;

// perform calculation

var area = length * width;
var numberOfTiles = area * 1.1;
var numberOfBoxes = Math.ceil(numberOfTiles / tilesPerBox)

// print output
console.log("Tiles nedeed," + " " + numberOfTiles);
console.log("Boxes nedeed," + " " + numberOfBoxes);

