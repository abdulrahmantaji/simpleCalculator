let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
let x;
let op;
let clear = false;

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        op = "";
        break;
      case "+/-":
        display.innerText = -Number(display.innerText);
        break;
      case "=":
        if (x == "" || op == "") break;
        let val = operate(Number(x), Number(display.innerText), op);
        display.innerText = (Math.round(val * 100) / 100).toFixed(5);
        x = "";
        op = "";
        clear = true;
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
        x = Number(display.innerText);
        op = e.target.innerText;
        console.log(op);
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
    }
  });
});

function operate(x, y, op) {
  if (op === "+") {
    return x + y;
  } else if (op === "-") {
    return x - y;
  } else if (op === "*") {
    return x * y;
  } else if (op === "/") {
    if (y == 0) {
      return "Can not divide on zero!!!";
    } else {
      return x / y;
    }
  }
}
