//
//
// var operands = ["*", "/", "-", "+"];
// runningTotal = 20;
// y = 2;
// if (operands[1] == '/') {
//   runningTotal = runningTotal / y;
//   console.log(runningTotal);
// }
//
//
// function NumberNode(id){
//   this.id = id;
// }
//
// var allNumbersNode = {};
// for (var i = 0; i < numberStorageNode.length; i++) {
//
//
//   var idNode = numberStorageNode.attributes[1].nodeValue
//
//    allNumbersNode.appendChild(idNode);
//   console.log(allNumbersNode);
//   allNumbersNode.addEventListener("click", function() {"it works! you clicked number " + allNumbers.attributes[1].nodeValue;
//
//   })
//  }
var displayNode = document.getElementById('display');
var runningTotal = "";
var allNumbers = document.querySelectorAll('.number');
  for (var i = 0; i < allNumbers.length; i++) {
  allNumbers[i].addEventListener('click', function(click){
     var text = event.target.textContent;
     displayNode.textContent = displayNode.textContent + text;
    runningTotal = runningTotal + event.target.textContent;
    alert("it works! you clicked number " + event.target.textContent);
  });
console.log(runningTotal);
  }
 // (){alert("it works! you clicked number " + zeroNode.attributes[1].nodeValue)});


 // NOTE Taken out of code, don't think it affects in any way
 //code to loop over number for value, not needed since allNumbers query returns the childNodes
 // numberStorageNode.setAttribute('value', numberStorageNode.attributes[1].value);
 // console.log('numberStorageNode' + [i] + " value= ", numberStorageNode.attributes[1].value);
 //returns value of each numberStorageNode

 //allNumbers returns an array, loop through the array to return the text child allNumbers[index of allNumbers].attributes[1].nodeValue
 // var numberStorageNode = {};
 // for (var i = 0; i < allNumbers.length; i++) {
 //   numberStorageNode = document.getElementById('3');
 // }


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
