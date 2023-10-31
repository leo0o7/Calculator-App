const numbers = document.querySelectorAll(".number");
const funcs = document.querySelectorAll(".func");
const display = document.querySelector(".display-container > h1");
const themeButtons = document.querySelectorAll(".theme-container button");
const themeButtonContainer = document.querySelector(".button-container");
const equalsBTN = document.querySelector(".main-calculator > :last-child");
const root = document.querySelector(":root");

let calculator = {
  firstNumber: 0,
  secondNumber: 0,
  operator: "",
  result: 0,
  firstOp: true,
};

numbers.forEach((number) => {
  number.setAttribute("onclick", "handleClick(" + number.innerHTML + ")");
});
funcs.forEach((func) => {
  func.setAttribute(
    "onclick",
    "handleClick(" + '"' + func.innerHTML + '"' + ")"
  );
});

const handleClick = (x) => {
  if (x >= 0 || x < 10) {
    if (!calculator.firstOp) {
      display.innerHTML = x;
    } else {
      display.innerHTML += x;
    }
  }
  if (x == ".") {
    display.innerHTML += x;
  }

  if (x == "DEL") {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
  if (x == "RESET") {
    calculator = {
      firstNumber: 0,
      secondNumber: 0,
      operator: "",
      result: 0,
      firstOp: true,
    };
    display.innerHTML = "";
  }
  if (x == "=") {
    calculateResult();
    calculator.firstOp = true;
    display.innerHTML = calculator.result.toString();
  }

  if (x == "+") {
    handleOperators();
    calculator.operator = "+";
    // display.innerHTML = "";
  }
  if (x == "-") {
    handleOperators();
    calculator.operator = "-";
    // display.innerHTML = "";
  }
  if (x == "×") {
    handleOperators();
    calculator.operator = "*";
    // display.innerHTML = "";
  }
  if (x == "/") {
    handleOperators();
    calculator.operator = "/";
    // display.innerHTML = "";
  }
};

const handleOperators = () => {
  if (display.innerHTML == "") {
    return;
  }
  if (calculator.firstOp) {
    firstOp();
  } else {
    calculateResult();
  }
};

const firstOp = () => {
  calculator.firstNumber = parseInt(display.innerHTML);
  calculator.firstOp = false;
};

const calculateResult = () => {
  calculator.secondNumber = parseInt(display.innerHTML);
  if (calculator.operator == "+") {
    calculator.result = calculator.firstNumber + calculator.secondNumber;
  }

  if (calculator.operator == "-") {
    calculator.result = calculator.firstNumber - calculator.secondNumber;
  }

  if (calculator.operator == "*") {
    calculator.result = calculator.firstNumber * calculator.secondNumber;
  }

  if (calculator.operator == "/") {
    calculator.result = calculator.firstNumber / calculator.secondNumber;
  }
  calculator.firstNumber = calculator.result;
};

const changeTheme = (t) => {
  let currentTheme = parseInt(themeButtons[t - 1].getAttribute("data-theme"));

  themeButtons.forEach((button) => {
    button.style.setProperty("opacity", "0");
    button.setAttribute("data-active", "false");
  });
  themeButtons[t - 1].setAttribute("data-active", "true");
  themeButtons[t - 1].style.setProperty("opacity", "1");
  if (currentTheme === 1) {
    root.style.setProperty("--main-bg", "hsl(222, 26%, 31%)");
    root.style.setProperty("--keypad-bg", "hsl(223, 31%, 20%)");
    root.style.setProperty("--display-bg", "hsl(224, 36%, 15%)");
    root.style.setProperty("--key-bg", "hsl(30, 25%, 89%)");
    root.style.setProperty("--key-shadow", "hsl(28, 16%, 65%)");
    root.style.setProperty("--red-key-bg", "hsl(6, 63%, 50%)");
    root.style.setProperty("--red-key-shadow", "hsl(6, 70%, 34%)");
    root.style.setProperty("--func-key-bg", "hsl(225, 21%, 49%)");
    root.style.setProperty("--func-key-shadow", "hsl(224, 28%, 35%)");
    root.style.setProperty("--text-grey", "hsl(221, 14%, 31%)");
    root.style.setProperty("--text-white", "hsl(0, 0%, 100%)");
    document.querySelectorAll("h1, h2").forEach((selected) => {
      selected.style.setProperty("color", "var(--white)");
    });
    equalsBTN.style.setProperty("color", "var(--white)");
  }
  if (currentTheme === 2) {
    root.style.setProperty("--main-bg", "hsl(0, 0%, 90%)");
    root.style.setProperty("--keypad-bg", "hsl(0, 5%, 81%)");
    root.style.setProperty("--display-bg", "hsl(0, 0%, 93%)");
    root.style.setProperty("--key-bg", "hsl(45, 7%, 89%)");
    root.style.setProperty("--key-shadow", "hsl(35, 11%, 61%)");
    root.style.setProperty("--red-key-bg", "hsl(25, 98%, 40%)");
    root.style.setProperty("--red-key-shadow", "hsl(25, 99%, 27%)");
    root.style.setProperty("--func-key-bg", "hsl(185, 42%, 37%)");
    root.style.setProperty("--func-key-shadow", "hsl(185, 58%, 25%)");
    root.style.setProperty("--text-grey", "hsl(60, 10%, 19%)");
    root.style.setProperty("--text-white", "hsl(0, 0%, 100%)");
    document.querySelectorAll("h1, h2").forEach((selected) => {
      selected.style.setProperty("color", "hsl(60, 10%, 19%)");
    });
  }
  if (currentTheme === 3) {
    root.style.setProperty("--main-bg", "hsl(268, 75%, 9%)");
    root.style.setProperty("--keypad-bg", "hsl(268, 71%, 12%)");
    root.style.setProperty("--display-bg", "hsl(268, 71%, 12%)");
    root.style.setProperty("--key-bg", "hsl(268, 47%, 21%)");
    root.style.setProperty("--key-shadow", "hsl(290, 70%, 36%)");
    root.style.setProperty("--red-key-bg", "hsl(176, 100%, 44%)");
    root.style.setProperty("--red-key-shadow", "hsl(177, 92%, 70%)");
    root.style.setProperty("--func-key-bg", "hsl(281, 89%, 26%)");
    root.style.setProperty("--func-key-shadow", "hsl(285, 91%, 52%)");
    root.style.setProperty("--text-grey", "hsl(52, 100%, 62%)");
    root.style.setProperty("--text-white", "hsl(0, 0%, 100%)");
    document.querySelectorAll("h1, h2").forEach((selected) => {
      selected.style.setProperty("color", "hsl(52, 100%, 62%)");
    });
    equalsBTN.style.setProperty("color", "hsl(198, 20%, 13%)");
  }
};
