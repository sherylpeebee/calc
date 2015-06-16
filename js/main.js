$(document).ready(init);


function init () {
  clickNumber();
  operation();
  clearScreen();
}
  var numStrings;
  var numSet = [];
  var float;
  var clickNumber = function(){
   numStrings = [];
    $(".green-buttons, .purple-buttons").on("click", function(){
      var num;
      var numText = $(this).attr("value");
      $("#all-clear").text("C");
      // $(".purple-buttons").removeClass('purple-highlight');
      // $(this).addClass('purple-highlight');
      numStrings.push(numText);
      var numToString = numStrings.join('');

      // console.log(numStrings);

      float = parseFloat(numToString);
      // console.log('float: ', float);
      // console.log(numText);
      $('#input').val(float);
    });
  };

  var percentage = function(){
    return  $("#input").val() * 0.01;
  };


  var operation = function(){
    $(".green-buttons, [value = '%'], [value = '+/-']").on("click", function(){
      var operatorVal = $(this).attr("value");

       numSet.push(float);
       numSet.push(operatorVal);
       console.log(numSet);
      numStrings = [];
      switch (operatorVal) {
        case "%":
        $("#input").val(percentage());
        console.log(operatorVal);
          break;
        case "+/-":
        var negativeVal = $("#input").val() * -1;
        $("#input").val(negativeVal);
          break;
        case "=":

        console.log(numSet, "equal clicked");
        equals();
        console.log(numSet);
        // return numSet;
          break;
        }
      function equals(){
       var num1 = numSet[0];
       var num2 = numSet[2];
       switch(numSet[1]){
       case "+":
         result = num1 + num2;
         $('#input').val(result);
         break;
       case  '-':
         result = num1 - num2;
         $('#input').val(result);
         console.log(result);
         break;
       case  '÷':
         result = num1 / num2;
         $('#input').val(result);
         break;
       case 'x':
         result = num1 * num2;
         $('#input').val(result);
         break;
         }
       }
      //   function operatorDelegate(){
      //   switch (parsedOp) {
      //     case "%":
      //     $("#input").val(percentage());
      //     console.log(operatorVal);
      //       break;
      //   // case "+":
      //   // console.log(numSet);
      //   //   break;
      //   // case "-":
      //   //
      //   //   break;
      //   // case "/":
      //   //
      //   //   break;
      //   // case "*":
      //   //
      //   //   break;
      //   // default:
      //   }
      // }


    });
  };

  var clearScreen = function(){
    var clearClicks = 0;
    $("#all-clear").on("click", function(){
      $('#input').val('');
      console.log("numStrings after one clear", numStrings);
      clearClicks += 1;
      if(clearClicks <= 1){
      $("#all-clear").text("C");
      }
      else if(clearClicks >= 2){
      $("#all-clear").text("AC");
      numStrings = [];
      console.log("numStrings after 2 clear", numStrings);
      clearClicks = 0;
      }
      // console.log(clearClicks);
    });
  };
