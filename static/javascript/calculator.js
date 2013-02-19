/********************************************************************************************
 * program: Javascript Calculator
 * by: Louis Wilbrink
 * version: 1.0
 * last modified: 2-18-2013
 *******************************************************************************************/

// Global variables.
var box;
var operator;
var operands = [];
var cleared = false;

// Load calculator display box element on document load.
function loadElements() {
  box = document.getElementById("box");
}

// Display each input entry in the calculator display box.
function addInput(entry) {

  // If currently displaying an operator, remove it.
  if (box.value === '+' || box.value === '-' ||
      box.value === '*' || box.value === '/') {
    box.value = "";
  }

  // If operator has been specified, clear the display box.
  // Otherwise numbers will append to what is currently in the
  // display box.  This might be a result of a previous calculation.
  // Only clear this once -- right after an operator is specified,
  // otherwise numbers will not append correctly.
  // ---------------------------------------------------------------
  if (operator && !cleared) {
    box.value = "";
    cleared = true;
  }

  // Append numbers to current display.
  box.value += entry;
}

// When an operator is chosen, save the number currently in the
// display box as an operand as well as the operation 
// to be performed (+-*/).
// ------------------------------------------------------------
function addOperator(op) {

  // Save the first operand and operator.
  if (operands.length === 0) {
    operator = op;
    operands.push(String(box.value));
    box.value = operator;
    cleared = false;
  }
  
  // If the first operand is specified, check if
  // the second operand is available in the display box.
  // If so, save it and solve the equation.
  // ---------------------------------------------------
  else if (operands.length === 1) {
    operands.push(String(box.value));
    solve();
    operator = op;
    cleared = false;
  }
}

function solve() {
  // Obtain second operand from display box before
  // proceeding to solving the equation.
  // ---------------------------------------------
  if (operands.length === 1) {
    operands.push(box.value);
  }
  
  // Convert operands to numbers.
  operands[0] = Number(operands[0]);
  operands[1] = Number(operands[1]);

  // Perform desired operation.
  if (operator === "+") {
    box.value = String(operands[0] + operands[1]);
  }

  if (operator === "-") {
    box.value = String(operands[0] - operands[1]);
  }

  if (operator === "*") {
    box.value = String(operands[0] * operands[1]);
  }

  if (operator === "/") {
    box.value = String(operands[0] / operands[1]);
  }

  // Clear operands, set result as first operand of next
  // calculation.
  // ---------------------------------------------------
  operands.pop();
  operands[0] = String(box.value);

  // Reset operator for next calculation.
  operator = undefined;
}
