$(document).ready(init);

function init(){
  $(".numbers").on("click", numbersClicked);
  $(".operator").on("click", operatorClicked);
  $('#decimal').on("click", decimalClicked);
}

var numArr = [];
// var opArray = []
function numbersClicked(){
  var initialNum = parseFloat($(this).attr("value"));
  numArr.push(initialNum);
  var appendedNum = parseFloat(numArr.join(''));
  // console.log(appendedNum);
  if(numArr[0] && numArr.indexOf("+") === -1 && numArr.indexOf("-") === -1 && numArr.indexOf("/") === -1 && numArr.indexOf("*") === -1){
    numArr = [];
    numArr.push(appendedNum);
    console.log(numArr);
  }
  else {
    var firstPartOfOperation = numArr.splice(0, 2);
    console.log("firstPartOfOperation: ", firstPartOfOperation);
    // console.log("secondNum: ", numArr[2]);
  }
  $("#input").val(numArr);
}

function operatorClicked(){
  var op = $(this).attr("value");
  numArr.push(op);
  console.log("numArr: ", numArr);
}

function decimalClicked(){
  var input = $('#input').val();
  var output = input.indexOf('.') !== -1 ? input : input += '.';
  $('#input').val(output);
}

// switch (op) {
//   case "+":
//   $("#input").val('');
//
//     break;
//   case "-":
//
//     break;
//   case "/":
//
//     break;
//   case "*":
//
//     break;
//   default:
// }
