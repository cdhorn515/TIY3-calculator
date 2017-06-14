(function(){

"use strict";

var totalArray;
var runningTotal = "";
var sumTotal;
var isDecimalClicked = false;
var calculatorNode = document.getElementById('calculator');
var displayNode = document.getElementById('display');


function addToDisplay(){
  if (runningTotal.length >= 7) {
    displayNode.style = 'fontSize: 40px;';
  } else {
  displayNode.setAttribute('style', 'fontFamily: Helvetica, sans-serif; fontWeight: lighter; fontSize: 55px; textAlign: right;');
  }
   var text = event.target.textContent;
   displayNode.textContent = displayNode.textContent + text;
   if (text === '/' || text === '*' || text === '-' || text === '+'){
     runningTotal = runningTotal + " " + text + " ";
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
    isDecimalClicked;
    if (event.target.textContent === "C"){
      runningTotal = "";
      displayNode.textContent = "";
      return isDecimalClicked = false;
      // return;
    } else if (event.target.textContent === 'X'){
      runningTotal = runningTotal + " * ";
      // text = "*";
      displayNode.textContent = displayNode.textContent + "*";
       isDecimalClicked = false;
      return;
      // ********************************
    } else if (event.target.textContent === "/" || event.target.textContent === "+" || event.target.textContent === "-") {
     isDecimalClicked = false;
    // *********************************
    } else if (event.target.textContent === '.') {
      if (isDecimalClicked) {
        console.log(isDecimalClicked);
        return;
      } else {
        addToDisplay();
        return isDecimalClicked = true;
        // return;
      }
    } else if (event.target.textContent === '=') {
    return sumOfNumbers();
    }
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
       isDecimalClicked = false;
    } else
      if (i % 2 != 0 && totalArray[i] === '*') {
       sumTotal = sumTotal * parseFloat(totalArray[i+1]);
       isDecimalClicked = false;
    } else
      if (i % 2 != 0 && totalArray[i] === '-') {
       sumTotal = sumTotal - parseFloat(totalArray[i+1]);
       isDecimalClicked = false;
     } else
       if (i % 2 != 0 && totalArray[i] === '+') {
       sumTotal = sumTotal + parseFloat(totalArray[i+1]);
       isDecimalClicked = false;
     }
   } isDecimalClicked = false;
     displayNode.textContent = sumTotal;
  }




})();
