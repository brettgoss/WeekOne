function whichSchool(age) {
  if (age < 13) {
    return"Elementary School";
    //if age is less than 13, Elementary School
  } else if (age < 18) {
    return "Secondary School";
    //if age is less than 18 but greater than 13, Secondary School
  } else {
    return "Lighthouse Labs";
    //otherwise, if age is greater than 18, Lighthouse Labs
  }
};

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));