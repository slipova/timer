let nodeArray = process.argv.slice(2);
const timeArray = (arr) => {
  const numberArray = arr.map((item) => Number(item));
  const result = numberArray.filter(value => Number.isInteger(value) && value > 0);
  result.sort((a, b) => {
    return a - b;
  });
  const newResult = result.map(x => x * 1000);
  return newResult;
};

const timerSound = (array) => {
  const filteredArr = timeArray(array);
  for (let value of filteredArr) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, value);
  }
};

timerSound(nodeArray);