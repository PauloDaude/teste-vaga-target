// 5)
const STRING = 'example';

function reverseString(string) {
  let reverseStr = '';
  for (let i = string.length; i > 0; i--) {
    reverseStr += string[i - 1];
  }
  return reverseStr;
}

const reverseText = reverseString(STRING);
console.log(`String revertida: ${reverseText}`);
