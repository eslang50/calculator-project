// Operations

let add = (a,b) => a + b;

let subtract = (a,b) => a - b;

let multiply = (a,b) => a * b;

let divide = (a,b) => a / b;

function operate(operator, a, b) {
  return operator(a,b);
}

let firstInput = 0;
let secondInput = 0;
let operatorClicked = false;
let operator;

function display(input) {

  if(input === 'C') {
    document.getElementById("input").value = '';
    firstInput = 0;
    secondInput = 0;
    operatorClicked = false;
  }

  else if(input === "+" || input === "-" || input === "/" || input === "*") {
    operatorClicked = true;
    if(input === "+") {
      operator = add;
      document.getElementById("input").value += input;
      secondInput = 0;
    }
    else if(input === "-") {
      operator = subtract;
      document.getElementById("input").value += input;
      secondInput = 0;
    }
    else if(input === "*") {
      operator = multiply;
      document.getElementById("input").value += input;
      secondInput = 0;
    }
    else {
      operator = divide;
      document.getElementById("input").value += input;
      secondInput = 0;
    }
  }

  else if(input === "=") {
    let result = operate(operator, firstInput, secondInput);
    document.getElementById("input").value = result;
    firstInput = result;
    secondInput = 0;
  }

  else {

    document.getElementById("input").value += input;

    if(operatorClicked == false) {
      firstInput = 10*firstInput + input;
    }

    else if(operatorClicked == true) {
      secondInput = 10*secondInput + input;
      
    }

  }
 
}

