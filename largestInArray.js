var marks = [45, 67, 81, 63, 98, 56, 35, 23];
var max = marks[0];

for (var i = 0; i < marks.length; i++) {
  var element = marks[i];
  if (element > marks[i]) {
    max = element;
  }
}

console.log(max);