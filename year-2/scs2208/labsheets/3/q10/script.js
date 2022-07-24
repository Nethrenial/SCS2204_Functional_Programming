//setting up calculator object to handle all elements and methods
const calculator = {
  numberButtons: (() => {
    const buttons = [];
    for (let index = 0; index < 10; index++) {
      buttons.push({
        el: document.querySelector(`.number.number--${index}`),
        number: index,
      });
    }
    return buttons;
  })(),
  operatorButtons: (() => {
    const operators = [];
    for (const op of ["add", "sub", "mul", "div"]) {
      operators.push({
        el: document.querySelector(`.operator.operator--${op}`),
        operator: op,
      });
    }
    return operators;
  })(),
  equalButton: document.querySelector(".equal"),
  acButton: document.querySelector(".number.number--AC"),
  dot: document.querySelector(".number.number--dot"),
  input: document.querySelector("input"),
  allowedChars: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "."],
  currentValue: null,
  currentOperator: null,
};

//preventing any characters except those in allowedChards to be entered
calculator.input.addEventListener("keypress", (e) => {
  if (!calculator.allowedChars.includes(e.key)) {
    e.preventDefault();
    return false;
  }
});

//make it so that digits can be entered at any caret position
calculator.numberButtons.forEach((btn) => {
  btn.el.addEventListener("click", () => {
    let currentValue = calculator.input.value;
    const caretPosition = calculator.input.selectionStart;
    currentValue =
      currentValue.slice(0, caretPosition) +
      btn.number +
      currentValue.slice(caretPosition, currentValue.length);
    calculator.input.value = currentValue;
    calculator.input.focus();
    calculator.input.setSelectionRange(caretPosition + 1, caretPosition + 1);
  });
});

//enable dot button
calculator.dot.addEventListener("click", () => {
  let currentValue = calculator.input.value;
  const caretPosition = calculator.input.selectionStart;
  currentValue =
    currentValue.slice(0, caretPosition) +
    "." +
    currentValue.slice(caretPosition, currentValue.length);
  calculator.input.value = currentValue;
  calculator.input.focus();
  calculator.input.setSelectionRange(caretPosition + 1, caretPosition + 1);
});


//managing operator buttons
calculator.operatorButtons.forEach((btn) => {
  btn.el.addEventListener("click", () => {
    if (calculator.input.value == "") {
      calculator.currentOperator = btn.operator;

      console.log({ ...calculator });
    } else {
      if (calculator.currentValue && calculator.currentOperator) {
        const answer = operate(
          Number(calculator.currentValue),
          Number(calculator.input.value),
          calculator.currentOperator
        );
        calculator.currentValue = answer;
        calculator.currentOperator = btn.operator;
        calculator.input.value = "";
        console.log({ ...calculator });
      } else {
        calculator.currentValue = Number(calculator.input.value);
        calculator.currentOperator = btn.operator;
        calculator.input.value = "";
      }
    }
  });
});

// when AC clicked, reset everything
calculator.acButton.addEventListener("click", () => {
  calculator.input.value = "";
  calculator.input.focus();
  calculator.currentOperator = null;
  calculator.currentValue = null;
  calculator.currentValue2 = null;
});

//get answer and display when = is clicked
calculator.equalButton.addEventListener("click", () => {
  if (calculator.currentValue && calculator.currentOperator) {
    const answer = operate(
      Number(calculator.currentValue),
      Number(calculator.input.value),
      calculator.currentOperator
    );
    calculator.currentValue = answer;
    calculator.currentOperator = null;
    calculator.input.value = answer;
    console.log({ ...calculator });
  } else {
    calculator.currentValue = Number(calculator.input.value);
    calculator.currentOperator = null;
    calculator.input.value = "";
  }
});

// manage calculations
function operate(val1, val2, op) {
  switch (op) {
    case "add":
      return val1 + val2;
    case "sub":
      return val1 - val2;
    case "mul":
      return val1 * val2;
    case "div":
      return val1 / val2;
  }
}


