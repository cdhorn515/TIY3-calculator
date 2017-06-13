// (function(){
//
//
// "use strict";

function addToDisplay(){
   var text = event.target.textContent;
   displayNode.textContent = displayNode.textContent + text;
   runningTotal = runningTotal + " " + event.target.textContent + " ";
   alert("it works! you clicked on the " + event.target.textContent + " button,");
}

function total() {
  return runningTotal = runningTotal + displayNode.textContent;
}

var runningTotal = "";
var sumTotal = 0;
var hasDecimalBeenClicked = 0;
// get calculator element--outer container
var calculatorNode = document.getElementById('calculator');

// get clear, viewport, equal, decimal nodes, numbers, and set up click event
var displayNode = document.getElementById('display');

// FIXME set style for display so numbers added will show correct size and place
if (runningTotal.length > 7) {
  displayNode.setAttribute('style', 'fontSize: 40px;');
} else {
displayNode.setAttribute('style', 'fontFamily: Helvetica, sans-serif; fontWeight: lighter; fontSize: 55px; textAlign: right;');
}


//this works, displays all numbers to displayNode and keeps track in runningTotal
// var displayNode = document.getElementById('display');
var runningTotal = "";
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
        hasDecimalBeenClicked = 0;
        return;
      } if (event.target.textContent === 'X'){
        runningTotal = runningTotal + " * ";
        displayNode.textContent = displayNode.textContent + "*";
        hasDecimalBeenClicked = 0;
        return;
     } else {
       return addToDisplay();
    }
  });
}
// above code for numbers and operands works!
// when equal is clicked add all numbers together and display total
function sumOfNumbers() {
  var totalArray = runningTotal.split(' ');
  for (var i = 0; i <= totalArray.length; i++) {
    if (i === 0) {
      sumTotal = parseFloat(totalArray[i]);
      // console.log("beginning total= " + sumTotal);
    }
     else if (i % 2 != 0 && totalArray[i] === '/') {
       sumTotal = sumTotal / parseFloat(totalArray[i+1]);
      //  console.log(sumTotal);
     }
     else if (i % 2 != 0 && totalArray[i] === 'X') {
       sumTotal = sumTotal * parseFloat(totalArray[i+1]);
      //  console.log(sumTotal);
     }
     else if (i % 2 != 0 && totalArray[i] === '-') {
       sumTotal = sumTotal - parseFloat(totalArray[i+1]);
      //  console.log(sumTotal);
     }
     else if (i % 2 != 0 && totalArray[i] === '+') {
       sumTotal = sumTotal + parseFloat(totalArray[i+1]);
      //  console.log(sumTotal);
     }
   } displayNode.textContent = sumTotal;
     hasDecimalBeenClicked = 0;
    // alert("it works! You clicked the " + equalNode.attributes[1].nodeValue + " sign");
  }
//child of calc-btn, 4 operands (+-*/)
var operatorTextNode = document.querySelectorAll('.black-txt');
// console.log('here '+ operatorTextNode);
// console.log(operatorTextNode[0].childNodes[0].data);// divide (/)
// console.log(operatorTextNode[1].childNodes[0].data);// multiply (*)
// console.log(operatorTextNode[2].childNodes[0].data);// subtract (-)
// console.log(operatorTextNode[3].childNodes[0].data);// add (+)

//for clear and equal FIXME for loop?
function changeBackgroundColor() {

  //change style.backgroundColor = the light green color
}
function decimalClicked(){
  if hasDecimalBeenClicked === 0;
  hasDecimalBeenClicked++;
 } return;
}



// function displayNumber(id) {
//   //number shows up in upper lh corner, very small
//   displayNode.textContent = displayNode.textContent + id.value;
// }
// var allNumbers = document.querySelectorAll('.number');
//   for (var i = 0; i < allNumbers.length; i++) {
//   allNumbers[i].addEventListener('click', fucntion(click){
//     displayNode = displayNode + displayNode.event.target.textContent;
//     runningTotal = runningTotal + allNumbers[i].event.target.TextContent;
//   });
//
//   }

// })();
