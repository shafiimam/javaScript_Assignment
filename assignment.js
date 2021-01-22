//1.function to calculate kilometer to meter.

function kilometerToMeter(kilometer) {
  var meter = 0;
  // checking if the given value is les than or equal zero
  if (kilometer <= 0) {
    // error message
    return 'value cannot be zero or negative';
  }
  else {
    meter = kilometer * 1000;
    return meter;
  }
}
//variable with valid value
var result = kilometerToMeter(55.20);
// variable with invalid value will give error message
var result2 = kilometerToMeter(-19);

console.log(result);
console.log(result2);

// 2. function to calculate electronics shopping budget

function budgetCalculator(watch, phone, laptop) {
  // defining the prices
  var watchPrice = 50;
  var phonePrice = 100;
  var laptopPrice = 500;

  // checking if any item value is given as negative
  if (watch < 0 || phone < 0 || laptop < 0) {
    // error message
    return 'Error:item number can not be less than zero';
  } else {
    var totalPrice = (watchPrice * watch) + (phonePrice * phone) + (laptopPrice * laptop);
    return totalPrice;
  }
}

// valid values
var shopping = budgetCalculator(1, 2, 5);
// invalid values will give error message
var shopping2 = budgetCalculator(-1, 4, -5);
// printing the output
console.log(shopping);
console.log(shopping2);

// 3.function to calculate hotel cost 

function hotelCost(days) {
  var totalCost = 0;
  // checking if days are less than or equal zero
  if (days <= 0) {
    // error message
    return 'Days cannot be zero or negative! Enter valid value.';
  }
  // checking if days are less than ten
  else if (days <= 10) {
    totalCost = days * 100;
    return totalCost;
  }
  // checking if days are less than twenty but greater than ten
  else if (days <= 20) {
    var firstTenDays = 10 * 100;
    var remainingDays = days - 10;
    var afterTendays = remainingDays * 80;
    totalCost = firstTenDays + afterTendays;
    return totalCost;
  }
  // checking if days are greater than twenty
  else {
    var firstTenDays = 10 * 100;
    var afterTenDays = 10 * 80;
    var remainingDays = days - 20;
    var afterTwentyDays = remainingDays * 50;
    totalCost = firstTenDays + afterTenDays + afterTwentyDays;
    return totalCost;
  }
}
// variable containing fucntion with valid parameter value
var cost = hotelCost(25);

// variable containing function with invalid parameter value will give erorr message
var cost2 = hotelCost(-10);

// printing the output
console.log(cost);
console.log(cost2);


// 4. function to determine the firend's largest name

function megaFriend(names) {
  var max = [];

  // checking if the array is empty or have only one element
  if ((names.length == 0) || (names.length == 1)) {
    // error message-1
    return "Error: Number of element in the array cannot be zero or one. Enter two or more valid names to compare.";
  }
  else {
    for (var i = 0; i < names.length; i++) {
      var megaName = names[i];
      // checking if the array contains any blank name
      if (names[i].length == 0) {
        // error message-2
        return "Error: There is a empty string! Please fill up the string with a name";
      }
      else if (megaName.length > max.length) {
        max = megaName;
      }
    }
    return max;
  }
}

// valid array of names for correct result
var friendsNames = ["abu", "hablu", "jubayer", "mokhles", "samsuddin", "sobcheyeBoroName"];

//invalid array of zero or one element will return error message-1
var friendsNames2 = [""];

//invalid array of names with one or more empty name will return error message-2
var friendsNames3 = ["abu", "", "hablu", "jubayer", "", "mokhles", "samsuddin", "sobcheyeBoroName"];

// printing the output
console.log(megaFriend(friendsNames));
console.log(megaFriend(friendsNames2));
console.log(megaFriend(friendsNames3));