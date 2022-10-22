let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
let x;
let op;
let clear = false;
//new flags
let xEntered = false;
let yEntered = false;

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        x = "";
        op = "";
        clear = false;
        xEntered = false;
        yEntered = false;
        break;
      case "+/-":
        display.innerText = -Number(display.innerText);
        break;
      case "=":
        if (x == "" || op == "") break;
        Do();
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        if (yEntered) {
          Do();
        }

        xEntered = true;
        yEntered = false;
        x = Number(display.innerText);
        op = e.target.innerText;
        clear = true;
        display.innerText = x;
        break;
      case ".":
        if (display.innerText.indexOf(".") != -1) break;
      default:
        if (clear) {
          display.innerText = "";
          clear = false;
        }

        display.innerText += e.target.innerText;
        if (xEntered && op != "") yEntered = true;
    }
  });
});

function Do() {
  let val = operate(Number(x), Number(display.innerText), op);
  display.innerText = (Math.round(val * 100000) / 100000).toFixed(5);
  x = Number(display.innerText);
  op = "";
  clear = true;
  xEntered = true;
  yEntered = false;
}

function operate(x, y, op) {
  if (op === "+") {
    return x + y;
  } else if (op === "-") {
    return x - y;
  } else if (op === "*") {
    return x * y;
  } else if (op === "/") {
    if (x == 0) {
      return "Can not divide on zero!!!";
    } else {
      return x / y;
    }
  }
}
