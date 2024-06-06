const binary2decimal = (number) => {
if(isNaN(number)) return alert("The Number you entered isn't a number!");
  return parseInt(`${number}`, 2);
}
const decimal2binary = (number) => {
if(isNaN(number)) return alert("The Number you entered isn't a number!");
  return number.toString(2);
}
