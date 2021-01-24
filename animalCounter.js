var depth = 22;
function animalCalculator(depth) {
  var animal = 0;
  if (depth <= 10) {
    animal = depth * 50
  }
  else if (depth <= 20) {
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPArt = remaining * 100;
    animal = firstPart + secondPArt;
  }
  else {
    var firstPart = 10 * 50;
    var secondPArt = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    animal = firstPart + secondPArt + thirdPart;
  }
  return animal;
}

console.log(animalCalculator(32));