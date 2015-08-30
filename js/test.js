$(document).ready(init);

function init(){
  $(".numbers").on("click", numbersClicked);
  $(".operator").on("click", operatorClicked);
  $('#decimal').on("click", decimalClicked);
}
  var numArr = [], firstPartOfOperation, restOfOperation;

function numbersClicked(){
  var initialNum = parseFloat($(this).attr("value"));
  numArr.push(initialNum);
  var appendedNum = parseFloat(numArr.join(''));
  if(numArr.length > 0 && numArr.indexOf("+") === -1 && numArr.indexOf("-") === -1 && numArr.indexOf("/") === -1 && numArr.indexOf("*") === -1){
    numArr = [];
    numArr.push(appendedNum);
    restOfOperation = numArr;
    console.log("restOfOperation: ", numArr);
  }
  else {
    firstPartOfOperation = numArr.splice(0, 2);
    console.log("firstPartOfOperation: ", firstPartOfOperation);
    restOfOperation = numArr;
    console.log("restOfOperation: ", numArr);
  }
  $("#input").val(numArr);
}

function operatorClicked(){
  var op = $(this).attr("value");
  numArr.push(op);
  if(restOfOperation.length > 0){
    evaluateExpression(firstPartOfOperation[1]);
    // debugger;
    console.log("firstPartOfOperation: " , firstPartOfOperation);
    console.log("restOfOperation: " , restOfOperation);
  }
  console.log("numArr: ", numArr);
}

function decimalClicked(){
  var input = $('#input').val();
  var output = input.indexOf('.') !== -1 ? input : input += '.';
  $('#input').val(output);
}

function evaluateExpression(op){
  var result;
  switch (op) {
    case "+":
    numArr = [];
    // $("#input").val('');

    result = parseFloat(firstPartOfOperation[0]) + parseFloat(restOfOperation);
    numArr.push(result);
    $('#input').val(result);
    console.log(result);

      break;
    case "-":

      break;
    case "/":

      break;
    case "*":

      break;
    default:
  }
}
