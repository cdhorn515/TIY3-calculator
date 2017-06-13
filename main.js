(function(){
 "use strict";

function addToDisplay(){
   var text = event.target.textContent;
   displayNode.textContent = displayNode.textContent + text;
   if (text === '/' || text === '*' || text === '-' || text === '+'){
     runningTotal = runningTotal + " " + text + " ";
    //  return decimalClicks = 0;
   } else runningTotal = runningTotal + text;
   return runningTotal;
}

function total() {
  return runningTotal = runningTotal + displayNode.textContent;
}

//gets all numbers by class, sets up click event, adds to runningTotal and to display
var allNumbers = document.querySelectorAll('.number');
  for (var i = 0; i < allNumbers.length; i++) {
  allNumbers[i].addEventListener('click', function(){
    return addToDisplay();
  });
  }

var allOperands = document.querySelectorAll('.operator');
for (var i = 0; i < allOperands.length; i++) {
  allOperands[i].addEventListener('click', function(){
    if (event.target.textContent === "C"){
      runningTotal = "";
      displayNode.textContent = "";
      // hasDecimalBeenClicked = 0;
      return;
    } else if (event.target.textContent === 'X'){
      runningTotal = runningTotal + " * ";
      displayNode.textContent = displayNode.textContent + "*";
      // hasDecimalBeenClicked = 0;
      return;
    } else if (event.target.textContent === '.') {
      if (decimalClicks < 1) {
        // addToDisplay();
        // hasDecimalBeenClicked++;
        // return;
      }
    } else if (event.target.textContent === '=') {
      return sumOfNumbers();
    }
    hasDecimalBeenClicked();
    addToDisplay();
  });
}

function sumOfNumbers() {
  var totalArray = runningTotal.split(' ');
  for (var i = 0; i < totalArray.length; i++) {
    if (i === 0) {
      sumTotal = parseFloat(totalArray[i]);
    } else
      if (i % 2 != 0 && totalArray[i] === '/') {
       sumTotal = sumTotal / parseFloat(totalArray[i+1]);
    } else
      if (i % 2 != 0 && totalArray[i] === '*') {
       sumTotal = sumTotal * parseFloat(totalArray[i+1]);
    } else
      if (i % 2 != 0 && totalArray[i] === '-') {
       sumTotal = sumTotal - parseFloat(totalArray[i+1]);
     } else
       if (i % 2 != 0 && totalArray[i] === '+') {
       sumTotal = sumTotal + parseFloat(totalArray[i+1]);
     }
   } hasDecimalBeenClicked();
     displayNode.textContent = sumTotal;
  }

function hasDecimalBeenClicked(){
  if (event.target.textContent === '.' && decimalClicks === 0) {
    return decimalClicks = 1;
  } else return decimalClicks = 0;
}

  var totalArray;
  var runningTotal = "";
  var sumTotal;
  var decimalClicks = 0;
  var calculatorNode = document.getElementById('calculator');


var displayNode = document.getElementById('display');
// FIXME set style for display so numbers added will show correct size and place
if (runningTotal.length > 7) {
  displayNode.setAttribute('style', 'fontSize: 40px;');
} else {
displayNode.setAttribute('style', 'fontFamily: Helvetica, sans-serif; fontWeight: lighter; fontSize: 55px; textAlign: right;');
}

//end of use strict IIFE
})();
