

// function ArraySum(numbers) {
//   var sum = 0;
//   for (i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum;
// }
// var numbers = [54, 32, 63, 65, 23, 65, 23, 35];
// console.log("total is=", ArraySum(numbers));

var friends = ["alu", "balu", "khalu", "malu", "talu", "lullu"];
var allNames = "";

for (var i = 0; i < friends.length; i++) {

  var name = friends[i];

  allNames = allNames + name;

}

console.log(allNames);
