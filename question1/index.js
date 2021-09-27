const [firstValue, secondValue] = process.argv.slice(2);

function sum(firstValue, secondValue) {
  const sum = Number(firstValue) + Number(secondValue);
  return Number.isNaN(sum) ? "Error" : sum;
}
const result = sum(firstValue, secondValue);
console.log(result, typeof result);

module.exports = sum;
