// Challenge 1:

// Create a promise
const compute = new Promise((resolve, reject) => {
  // Pass it an executor
  return setTimeout(() => {
    // After 1s, set the state to fullfilled if resolved, set the state to rejected if otherwise
    Math.random(1) < 0.5 ? resolve("Success") : reject("Error");
  }, 1000);
});

// Trigger the reaction
compute.then(x => console.log(x)).catch(err => console.log(err));

// Challenge 2:
f2 = aString => {
  return aString
    .split(new RegExp("[ a-z+]"))
    .filter(item => item)
    .map(item => parseFloat(item));
};

// Challenge 3:

PentagonalNumber = input => {
  countAllCircles = x => {
    if (x === 0) return 0;
    return x + countAllCircles(x - 1);
  };
  let blueCircles, redCircles;
  redCircles = input + (input - 1) * 3 + input - 2;
  blueCircles = 5 * countAllCircles(input - 1) + 1 - redCircles;
  return [blueCircles, redCircles];
};

// Challenge 4:
