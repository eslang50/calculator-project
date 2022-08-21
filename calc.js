// Operations

let add = (a,b) => a + b;

let subtract = (a,b) => a - b;

let multiply = (a,b) => a * b;

let divide = (a,b) => a / b;

function operate(operator, a, b) {
  return operator(a,b);
}

// Display digit function

function display(num) {
  document.getElementById("input").value += num;
}