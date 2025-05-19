document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  let currentInput = "";
  let operator = null;
  let firstOperand = "";
  let secondOperand = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.textContent;

      if (button.classList.contains("no")) {
        currentInput += value;
        display.value = currentInput;
      } else if (button.classList.contains("opt")) {
        if (currentInput !== "") {
          firstOperand = currentInput;
          operator = value;
          currentInput += ` ${operator} `; // Add the operator to the display
          display.value = currentInput;
        }
      } else if (button.id === "calc") {
        if (currentInput !== "" && firstOperand !== "" && operator !== null) {
          secondOperand = currentInput.split(" ")[2]; // Extract the second operand
          const result = calculate(firstOperand, secondOperand, operator);
          display.value = result;
          currentInput = result;
          firstOperand = "";
          secondOperand = "";
          operator = null;
        }
      } else if (button.id === "clear") {
        currentInput = "";
        firstOperand = "";
        secondOperand = "";
        operator = null;
        display.value = "";
      }
    });
  });

  function calculate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "x":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return 0;
    }
  }
});
