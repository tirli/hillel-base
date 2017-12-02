const animals = ['cat', 'dog', 'apple'];

// function example
function testAnimal(animal) {
  switch (animal) {
    case 'dog':
      return 'bark bark';
    case 'cat':
      return 'meow';
    default:
      return 'something';
  }
}

for (let i = 0; i < animals.length; i++) {
  const voice = testAnimal(animals[i]);
  console.log(voice);
}

// functions

function declarationSum(a, b) {
  return a + b;
}

const expressionSum = (a, b) => a + b;

(function iifeSum(a, b) {
  console.log('Work started');
})();

// loops
const arr = [2, 4, 1, 19, 12, '12', 'test'];

let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (false);