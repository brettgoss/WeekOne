var i = 0;

for (i = 100; i <= 200; i++) {
//for loop that counts from 100 to 200
  if ((i % 4 === 0) && (i % 3 === 0)) {
    console.log("LoopyLighthouse");
//if i is a multiple of 3 && 4
  } else if (i % 3 === 0) {
    console.log("Loopy");
//if i is just a multiple of 3
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
//if i is just a multiple of 4
  } else {
    console.log(i);
//otherwise, just log the number
  }
}