var arr = [31, 11, 6];

var david = {
  age: 31,
  birthMonth: 11,
  countriesVisited: 6,
  prop: 'hahaha'
};

console.log(david['birthMonth']);

david.countriesVisited += 1;
console.log(david.countriesVisited)

var prop = process.argv[2];

console.log(david[prop]);

david[prop] += 1;
console.log(david[prop]);

david.coolness = 9001;
david['height'] = '6ft';

console.log(david.coolness);
console.log(david['height']);


var myFakeArray = {
  '0': 'element 1',
  '1': 'element 2'
};

for (var propName in david) {
  console.log(propName, david[propName]);
}

console.log('\n');


// Accessing nested properties

david.job = {
  role: 'Instructor',
  businessName: 'Lighthouse Labs'
};

console.log(david.job.businessName);

var davidsJob = david.job;
console.log(typeof davidsJob);
for (var jobPropName in davidsJob) {
  console.log(jobPropName);
}



var davidsBusiness = davidsJob.businessName;
console.log(typeof davidsBusiness);
console.log(davidsBusiness);


// Passing and object into a function

// What is the point in a function that doesn't have any return value
// If a function has side effects, then it should have only side effects
// If it has a return value than it should have no side effects
function chillOut(notCoolEnoughObject) {
  notCoolEnoughObject.coolness += 1;
}

console.log(david.coolness);
chillOut(david);
console.log(david.coolness);




























