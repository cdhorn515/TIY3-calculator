// "use strict";


// get calculator element--outer container
var calculatorNode = document.getElementById('calculator');
// get clear, viewport, equal, decimal nodes, all the numbers
var clearNode = document.getElementById('clear');
clearNode.addEventListener("click", function(){alert("it works! You clicked the clear button")});
var displayNode = document.getElementById('viewport');
var equalNode = document.getElementById('equal');
equalNode.addEventListener("click", function(){alert("it works! You clicked the equal sign")});
var decimalNode = document.getElementById('decimal');
decimalNode.addEventListener("click", function(){alert("it works! You clicked the decimal symbol")});
var allNumbers = document.querySelectorAll('.num');

// // this function gets called every time an operator is clicked
// //accepts number and operator, operator is equal to a number in an object
// function doTheMath(number, operator){
//     if (operatorObj.property[x])
//   for (var i = 0; i<numberStorageNode.length; i++);
//    doMath += numberStorageNode + operatorObj[property];
//    return
// }
//
// function(){
//   for (var i = 0; i < allNumbers.length; i++) {
//
//   }
// }

//code to loop over number for value, not needed since allNumbers query returns the childNodes
// numberStorageNode.setAttribute('value', numberStorageNode.attributes[1].value);
// console.log('numberStorageNode' + [i] + " value= ", numberStorageNode.attributes[1].value);
//returns value of each numberStorageNode

//allNumbers returns an array, loop through the array to return the text child allNumbers[index of allNumbers].attributes[1].nodeValue

// NOTE: this works--can click on any number and get message, now need to return correct number clicked on
  for (var i = 0; i < allNumbers.length; i++) {
    // var numberStorageNode = allNumbers[i];
    allNumbers[i] = document.getElementById(i);
      //alert message shows whenever you click on a number
      // numberStorageNode.addEventListener("click", function(){alert("it works! You clicked on a number!")});
      //does not work--addEventListener not a function --can't do on group?
      allNumbers[.addEventListener('click', function(){alert("you just clicked a number!")});
      // numberStorageNode.addEventListener("click", function(){

      //displays 9 for every number clicked
      //   for (var i = 0; i < allNumbers.length; i ++) {
      //     if (numberStorageNode.id == i) {
      //       alert("it works! you clicked on number " + i);
      //     }
      //   }
      // });
    //alert message shows but allNumbers[i] is undefined
    // numberStorageNode.addEventListener("click", function(){alert("it works! You clicked on " + allNumbers[i])});
    // returns a list of divs with each number
   }

  // console.dir(numberStorageNode);
//div with class of operator, returns an array (includes childNode, but need operatorTextNode to access symbol)
var allOperators = document.querySelectorAll('.operator');
// for (var i = 0; i < allOperators.length; i++) {
  // var operatorStore = allOperators[i];
  divideNode = document.getElementById('divide');
  divideNode.addEventListener("click", function(){alert("it works! you clicked on the /  operator")});
  // allOperators.appendChild(operatorStore);
  multiplyNode = document.getElementById('multiply');
  multiplyNode.addEventListener("click", function(){alert("it works! you clicked on the *  operator")});
  // allOperators.appendChild(operatorStore);
  minusNode = document.getElementById('minus');
  minusNode.addEventListener("click", function(){alert("it works! you clicked on the + operator")});
  // allOperators.appendChild(operatorStore);
  plusNode = document.getElementById('plus');
  plusNode.addEventListener("click", function(){alert("it works! you clicked on the +  operator")});
  // allOperators.appendChild(operatorStore);

//child of calc-btn, 4 operands (+-*/)
var operatorTextNode = document.querySelectorAll('.black-txt');

// operatorStore.addEventListener("click", function(){alert("it works! you clicked on an operator")});


// print symbol to console
// console.log(operatorTextNode[3].childNodes[0].data);
// numberStorageNode.addEventListener("click", function(){alert("it works!")});

// FIXME:
// allNumbers.addEventListener('click', displayNumber);

// function displayNumber() {
//   displayNode.appendChild(numberStorageNode.attributes.value)
//   // displayNode.textContent = numberStorageNode.attributes.value;
//   return displayNode;
// }

function displayNumber(num){
  for (var i = 0; i < numberStorageNode.length; i++) {
   if (num == numberStorageNode[i].attributes.value) {
      console.log('here', num, numberStorageNode[i]);
    }
  }
}


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

// var numberViewer = "";
// // var numberStorageNode = [];
// var doMath = '9';
// var sumTotal = 0;

// drill down inside of allOperators array // NOTE: this is not really useful info
// console.log(allNumbers[0].attributes[1].value);
// for (var i = 0; i < allOperators.length; i++) {
//   var operatorNode = allOperators[i];
//   operatorNode.setAttribute('value', operatorNode.attributes[1].value);
  // console.log(operatorNode.attributes[1].value);
  // console.log('operatorNode' + [i] + ' value= ', operatorNode.attributes[1].value);
  // console.log(operatorNode);



// DOM elements
//get all num buttons--returns an array with div, id, and class names array returns order of [7,8,9,4,5,6,1,2,3,0]
