// 2)
const INPUT_NUMBER = 55;
const OTHER_INPUT_NUMBER = 42;

function isFibonacciNumber(number, beforeNumber = 1, actualNumber = 1) {
  if (number == 0 || number == 1 || number == actualNumber) {
    return true;
  } else if (actualNumber < number) {
    return isFibonacciNumber(number, actualNumber, actualNumber + beforeNumber);
  } else {
    return false;
  }
}

console.log(
  `O número ${INPUT_NUMBER} faz parte da sequência de Fiboncacci? ${isFibonacciNumber(
    INPUT_NUMBER
  )}`
);
console.log(
  `O número ${OTHER_INPUT_NUMBER} faz parte da sequência de Fiboncacci? ${isFibonacciNumber(
    OTHER_INPUT_NUMBER
  )}`
);
