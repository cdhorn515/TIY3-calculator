// "use strict";
  //
  //
  // function displayNumber(num){
  //   for (var i = 0; i < numberStorageNode.length; i++) {
  //    if (numToDisplay === numberStorageNode[i]) {
  //       viewportNode = numToDisplay;
  //       console.log(numToDisplay);
  //     }
  //   }
  // }
var calculatorNode = document.getElementById('calculator');
var allNumbers = document.querySelectorAll('.num');
//returns an array, loop through the array
  for (var i = 0; i < allNumbers.length; i++) {
    var numberStorageNode = allNumbers[i];
    numberStorageNode.setAttribute('value', numberStorageNode.attributes[1].value);
    console.log('here', numberStorageNode);
    // calculatorNode.appendChild(numberStorageNode);
  }



var operatorNode = document.querySelectorAll('.operator');
// drill down inside of array
// console.log(allNumbers[0].attributes[1].value);
var clearNode = document.getElementById('clear');
// calculatorNode.appendChild(clearNode);
var displayNode = document.getElementById('viewport');
// calculatorNode.appendChild(displayNode);
var equalNode = document.getElementById('equal');
// calculatorNode.appendChild(equalNode);
var decimalNode = document.getElementById('decimal');
numberStorageNode.addEventListener('click', displayNumber);

function displayNumber() {
  displayNode.textContent = numberStorageNode.attributes.value;
}


// for (var i = 0; i < numberStorageNode.length; i++) {
//       calculatorNode.appendChild(numberStorageNode[i]);
//
//     }   console.log(numberStorageNode);


//
//
//   var operatorNode = document.getElementsByClassName('.operator');
//
//   console.log(numberStorageNode);
//   console.log(operatorNode);
//
//
//   // var viewportNode = document.getElementById('viewport');
//   //
//   // var numToDisplay = numberStorageNode.addEventListener('click', displayNumber)
//
//
//   // function that executes when user clicks on clear button
//   // function clearNumbers() {
//   //
//   // }
//
//   // everytime a number is clicked it is stored into the numberStorageNode and printed to the screen
//   //use addEventListener "click"
//   // function storeNumbers() {
//       // numberStorageNode.push(num);
//       // numberViewerNode += num;
//
//
//   //  }
//   // // this function gets called every time an operator is clicked
//   // //accepts number and operator, operator is equal to a number in an object
//   // function doTheMath(number, operator){
//
//       // if (operatorObj.property[x])
//   //   for (var i = 0; i<numberStorageNode.length; i++);
//   //    doMath += numberStorageNode + operatorObj[property];
//   //    return
//   // }
// var numberViewer = "";
// // var numberStorageNode = [];
// var doMath = '9';
// var sumTotal = 0;

// var operatorObj = {
//  plus: '+',
//  minus:'-',
//  multiply: '*',
//  divide: '/',
//  equal: '=',
//  decimal: '.'
//  //clear = clearNumbers();
// }

// DOM elements
//get all num buttons--returns an array with div, id, and class names array returns order of [7,8,9,4,5,6,1,2,3,0]





// sumTotal = "5" + operatorObj.minus + "1"
//
