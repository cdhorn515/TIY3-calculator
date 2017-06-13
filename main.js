(function() {
    "use strict";

    function addToDisplay() {
      var text = event.target.textContent;
      displayNode.textContent = displayNode.textContent + text;
      if (text === '/' || text === '*' || text === '-' || text === '+') {
        runningTotal = runningTotal + " " + text + " ";
        //  return decimalClicks = 0;
      } else {
        runningTotal = runningTotal + text;
      }
      displayNode.textContent = runningTotal;
      return runningTotal;
    }

    function total(runningTotal) {
      return runningTotal = runningTotal + displayNode.textContent;
    }

    //gets all numbers by class, sets up click event, adds to runningTotal and to display
    var allNumbers = document.querySelectorAll('.number');
    for (var i = 0; i < allNumbers.length; i++) {
      allNumbers[i].addEventListener('click', function() {
        return addToDisplay();
      });
    }

    var allOperands = document.querySelectorAll('.operator');
    for (var i = 0; i < allOperands.length; i++) {
      allOperands[i].addEventListener('click', function() {
        if (event.target.textContent === "C") {
          runningTotal = "";
          displayNode.textContent = "";
        decimalClicks = 0;
          return;
        } else if (event.target.textContent === 'X') {
          runningTotal = runningTotal + " * ";
          displayNode.textContent = displayNode.textContent + "*";
          // hasDecimalBeenClicked = 0;
          return;
        } else if (event.target.textContent === '.') {
          // hasDecimalBeenClicked();
          if (decimalClicks === 0) {
            addToDisplay();
            decimalClicks++;
            return;
          }
        } else if (event.target.textContent === '=') {
          sumOfNumbers();
          // runningTotal = 0;
        }
        // hasDecimalBeenClicked();
      });
    }

    function sumOfNumbers() {
      var totalArray = runningTotal.split(' ');
      for (var i = 0; i < totalArray.length; i++) {
        if (i === 0) {
          sumTotal = parseFloat(totalArray[i]);
        } else
        if (i % 2 != 0 && totalArray[i] === '/') {
          sumTotal = sumTotal / parseFloat(totalArray[i + 1]);
        } else
        if (i % 2 != 0 && totalArray[i] === '*') {
          sumTotal = sumTotal * parseFloat(totalArray[i + 1]);
        } else
        if (i % 2 != 0 && totalArray[i] === '-') {
          sumTotal = sumTotal - parseFloat(totalArray[i + 1]);
        } else
        if (i % 2 != 0 && totalArray[i] === '+') {
          sumTotal = sumTotal + parseFloat(totalArray[i + 1]);
        }
      }
      // runningTotal = "";
        displayNode.textContent = sumTotal;
        // hasDecimalBeenClicked();

      }

      function hasDecimalBeenClicked(){
        if (event.target.textContent === '.' && decimalClicks === 1) {
          return;
        } else return decimalClicks++;
      }

      var totalArray;
      var runningTotal = "";
      var sumTotal;
      var decimalClicks = 0;
      var calculatorNode = document.getElementById('calculator');


      var displayNode = document.getElementById('display');

      
      // FIXME set style for display so numbers added will show correct size and place add to event listener
      if (runningTotal.length > 7) {
        displayNode.setAttribute('style', 'fontSize: 40px;');
      } else {
        displayNode.setAttribute('style', 'fontFamily: Helvetica, sans-serif; fontWeight: lighter; fontSize: 55px; textAlign: right;');
      }

      //
      // function hasOperandBeenClicked(){
      //   if (event.target.textContent === '.' || event.target.textContent === '/' || event.target.textContent === '*' || event.target.textContent === '+' || event.target.textContent === '-' )
      //   if (if clicks.target === 0) {
      //     return;
      //   }
      // }
      //end of use strict IIFE
    })();
