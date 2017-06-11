// "use strict";

var runningTotal = "";
var sumTotal = 0;
// console.log("here " + typeof(sumTotal));
function total() {
  return runningTotal = runningTotal + displayNode.textContent;
}

// get calculator element--outer container
var calculatorNode = document.getElementById('calculator');

// get clear, viewport, equal, decimal nodes, numbers, and set up click event
var displayNode = document.getElementById('display');
//set style for display so numbers added will show correct size and place
displayNode.setAttribute('style', 'fontFamily: Helvetica, sans-serif; fontWeight: lighter; fontSize: 55px; textAlign: right;');

var clearNode = document.getElementById('clear');
clearNode.addEventListener("click", function() {
  runningTotal = "";
  sumTotal = 0;
  displayNode.textContent = "";
  console.log('runningTotal is now ' + runningTotal);
  // alert("it works! You clicked the " + clearNode.attributes[1].nodeValue + " button")
});

var equalNode = document.getElementById('equal');
//add click even to equal, sum up numbers when clicked
equalNode.addEventListener("click", sumOfNumbers);


  // console.log('here1 ' + totalArray);
  // console.log('here2 ' + sumTotal);
  // console.log("last here " + typeof(sumTotal));


var decimalNode = document.getElementById('.');
//include in function to turn off eventListener
decimalNode.addEventListener("click",
  function() {
    //returns undefined.
    //  var runningTotal = runningTotal + decimalNode.attributes[1].nodeValue;
    runningTotal = runningTotal + '.';
    displayNode.textContent = displayNode.textContent + '.';
    console.log(runningTotal);
    // alert("it works! You clicked the " + decimalNode.attributes[1].nodeValue + " symbol")
  });

var allNumbers = document.querySelectorAll('.num');

//div with class of operator, returns an array (includes childNode, but need operatorTextNode to access symbol)
var allOperators = document.querySelectorAll('.operator');
// for (var i = 0; i < allOperators.length; i++) {
// var operatorStore = allOperators[i];
var divideNode = document.getElementById('divide');
divideNode.addEventListener("click", function() {
  displayNode.textContent = runningTotal + '/';
  displayNode.textContent = displayNode.textContent + '/';
  runningTotal = runningTotal + " " + operatorTextNode[0].childNodes[0].data + " ";
  console.log(runningTotal);
  // alert("it works! you clicked on the " + operatorTextNode[0].childNodes[0].data + " operator")
});
// allOperators.appendChild(operatorStore);
var multiplyNode = document.getElementById('multiply');
multiplyNode.addEventListener("click", function() {
  displayNode.textContent = runningTotal + '*';
  runningTotal = runningTotal + " " + operatorTextNode[1].childNodes[0].data + " ";
  console.log(runningTotal);
  // alert("it works! you clicked on the " + operatorTextNode[1].childNodes[0].data + " operator")
});
// allOperators.appendChild(operatorStore);
var minusNode = document.getElementById('minus');
minusNode.addEventListener("click", function() {
  displayNode.textContent = runningTotal + '-';
  runningTotal = runningTotal + " " + operatorTextNode[2].childNodes[0].data + " ";
  console.log(runningTotal);
  // alert("it works! you clicked on the " + operatorTextNode[2].childNodes[0].data + " operator")
});
// allOperators.appendChild(operatorStore);
var plusNode = document.getElementById('plus');
plusNode.addEventListener("click", function() {
  displayNode.textContent = runningTotal + '+';
  runningTotal = runningTotal + " " + operatorTextNode[3].childNodes[0].data + " ";
  console.log(runningTotal);
  // alert("it works! you clicked on the " + operatorTextNode[3].childNodes[0].data + " operator")
});
// allOperators.appendChild(operatorStore);

var zeroNode = document.getElementById('0');
zeroNode.addEventListener("click", function() {
  displayNode.textContent = displayNode.textContent + "0";
  // runningTotal = runningTotal + displayNode.textContent;
  runningTotal = runningTotal + zeroNode.attributes[1].nodeValue;
  console.log(runningTotal);
  // alert("it works! you clicked number " + zeroNode.attributes[1].nodeValue)
});
var oneNode = document.getElementById('1');
oneNode.addEventListener("click", function() {
  displayNode.textContent = displayNode.textContent + "1";
  runningTotal = runningTotal + oneNode.attributes[1].nodeValue;
  // runningTotal = runningTotal + displayNode.textContent;
  console.log(runningTotal);
  // alert("it works! you clicked number " + oneNode.attributes[1].nodeValue)
});
var twoNode = document.getElementById('2');
twoNode.addEventListener("click", function() {
  displayNode.textContent = displayNode.textContent + "2";
  runningTotal = runningTotal + twoNode.attributes[1].nodeValue;
  console.log(runningTotal);
  // alert("it works! you clicked number " + twoNode.attributes[1].nodeValue)
});
var threeNode = document.getElementById('3');
threeNode.addEventListener("click", function() {
  displayNode.textContent = displayNode.textContent + "3";
  runningTotal = runningTotal + threeNode.attributes[1].nodeValue;
  console.log(runningTotal);
  // alert("it works! you clicked number " + threeNode.attributes[1].nodeValue)
});
var fourNode = document.getElementById('4');
fourNode.addEventListener("click", function() {
  displayNode.textContent = displayNode.textContent + "4";
  runningTotal = runningTotal + fourNode.attributes[1].nodeValue;
  console.log(runningTotal);
  // alert("it works! you clicked number " + fourNode.attributes[1].nodeValue)
});
var fiveNode = document.getElementById('5');
// fiveNode.addEventListener("click", displayNumber);
fiveNode.addEventListener("click", function() {
  displayNode.textContent = displayNode.textContent + "5";
  runningTotal = runningTotal + fiveNode.attributes[1].nodeValue;
  console.log(runningTotal);
  // alert("it works! you clicked number " + fiveNode.attributes[1].nodeValue)
});
var sixNode = document.getElementById('6');
sixNode.addEventListener("click", function() {
  displayNode.textContent = displayNode.textContent + "6";
  runningTotal = runningTotal + sixNode.attributes[1].nodeValue;
  console.log(runningTotal);
  // alert("it works! you clicked number " + sixNode.attributes[1].nodeValue)
});
var sevenNode = document.getElementById('7');
sevenNode.addEventListener("click", function() {
  displayNode.textContent = displayNode.textContent + "7";
  runningTotal = runningTotal + sevenNode.attributes[1].nodeValue;
  console.log(runningTotal);
  // alert("it works! you clicked number " + sevenNode.attributes[1].nodeValue)
});
var eightNode = document.getElementById('8');
eightNode.addEventListener("click", function() {
  displayNode.textContent = displayNode.textContent + "8";
  runningTotal = runningTotal + eightNode.attributes[1].nodeValue;
  console.log(runningTotal);
  // alert("it works! you clicked number " + eightNode.attributes[1].nodeValue)
});
var nineNode = document.getElementById('9');
nineNode.addEventListener("click", function() {
  displayNode.textContent = displayNode.textContent + "9";
  runningTotal = runningTotal + nineNode.attributes[1].nodeValue;
  console.log(runningTotal);
  // alert("it works! you clicked number " + nineNode.attributes[1].nodeValue)
});

function sumOfNumbers() {
  var totalArray = runningTotal.split(' ');
  for (var i = 0; i <= totalArray.length; i++) {
    if (i === 0) {
      sumTotal = parseFloat(totalArray[i]);
      console.log("beginning total= " + sumTotal);
    }
     else if (i % 2 != 0 && totalArray[i] === '/') {
       sumTotal = sumTotal / parseFloat(totalArray[i+1]);
       console.log(sumTotal);
     }
     else if (i % 2 != 0 && totalArray[i] === '*') {
       sumTotal = sumTotal * parseFloat(totalArray[i+1]);
       console.log(sumTotal);
     }
     else if (i % 2 != 0 && totalArray[i] === '-') {
       sumTotal = sumTotal - parseFloat(totalArray[i+1]);
       console.log(sumTotal);
     }
     else if (i % 2 != 0 && totalArray[i] === '+') {
       sumTotal = sumTotal + parseFloat(totalArray[i+1]);
       console.log(sumTotal);
     }
   } displayNode.textContent = sumTotal;
    // alert("it works! You clicked the " + equalNode.attributes[1].nodeValue + " sign");
  }








//child of calc-btn, 4 operands (+-*/)
var operatorTextNode = document.querySelectorAll('.black-txt');
// console.log('here '+ operatorTextNode);
// console.log(operatorTextNode[0].childNodes[0].data);// divide (/)
// console.log(operatorTextNode[1].childNodes[0].data);// multiply (*)
// console.log(operatorTextNode[2].childNodes[0].data);// subtract (-)
// console.log(operatorTextNode[3].childNodes[0].data);// add (+)

//for clear and equal
function changeBackgroundColor() {
  //change style.backgroundColor = the light green color
}

function changeTextColor() {
  //change text color of operands to the white color when moused over
}



// // this function gets called every time an operator is clicked
// //accepts number and operator, operator is equal to a number in an object
function doTheMath(number, operator) {
  if (operatorObj.property[x])
    for (var i = 0; i < numberStorageNode.length; i++);
  doMath += numberStorageNode + operatorObj[property];
  return
}



//code to loop over number for value, not needed since allNumbers query returns the childNodes
// numberStorageNode.setAttribute('value', numberStorageNode.attributes[1].value);
// console.log('numberStorageNode' + [i] + " value= ", numberStorageNode.attributes[1].value);
//returns value of each numberStorageNode

//allNumbers returns an array, loop through the array to return the text child allNumbers[index of allNumbers].attributes[1].nodeValue
var numberStorageNode = {};
for (var i = 0; i < allNumbers.length; i++) {
  numberStorageNode = document.getElementById('3');
}

function displayNumber() {
  //number shows up in upper lh corner, very small

  // displayNode.setAttribute('style', 'fontSize: 55px; textAlign: right; paddingRight: 24px;');
  displayNode.textContent = '5';
}
// for (var i = 0; i < numberStorageNode.length; i++) {
//  if (num == numberStorageNode[i].attributes.value) {
//     console.log('here', num, numberStorageNode[i]);
//   }
// }
// numberStorageNode[i].setAttribute('id', allNumbers.id);
// console.log(numberStorageNode);NOTE might have to go back to numberStorageNode
// numberStorageNode.addEventListener("click", function showNumber(){
// for (var i = 0; i < allNumbers.length; i++){
//   if (numberStorageNode === i)
// alert("you clicked on a number ");
// }
// alert("it works! You clicked on a number" + i);
// });

// returns a list of divs with each number
// console.log(numberStorageNode);

// console.log(numberStorageNode);

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
