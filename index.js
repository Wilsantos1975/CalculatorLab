const input = (button) => {
  document.calc.display.value += button.value;
};

const clearDisplay = () => {
  document.calc.display.value = calc.display.placeholder;
};

const enter = () => {
  document.calc.display.value = eval(document.calc.display.value);
};

const average = () => {
  let sum = 0;
  let listOfNums = document.calc.display.value.split(",");

  for (const num of listOfNums) {
    sum += parseInt(num);
  }
  let output = sum / listOfNums.length;

  document.calc.display.value = output;
};
