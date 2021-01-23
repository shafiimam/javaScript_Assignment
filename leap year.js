function isLeapYear(year) {
  let divisibleByFour = year % 4;
  let divisibleByHundred = year % 100;
  let divisibleByFourHundred = year % 400;
  // step 1
  if (divisibleByFour == 0) {
    // step 2
    if (divisibleByHundred == 0) {
      // step 3
      if (divisibleByFourHundred == 0) {
        return true;
      }
      else {
        return false;
      }
    }
    // step 4
    else {
      return true;
    }
  }
  // step 5
  else {
    return false;
  }
}

const check2000 = isLeapYear(2400);
console.log(check2000);