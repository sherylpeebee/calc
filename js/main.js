$(function(){
  numClicked();
  opClicked();
  doAllTheMaths();
});

var nums = [];
var parsedNums = [];

function doAllTheMaths(){
  $('#equals').on('click', function(){
    console.log(result);
    parsedNums = [];
    nums[0] = result;
  });
}

function numClicked(){
  $(".number").on("click", function(){
    var input = $(this).text().trim();
    nums.push(input);
    console.log(nums);
    $('input').val(nums.join(""));
  });
}

var ops = [], result;
function opClicked(){
  var $op;
  $(".ops").on("click", function(){
    $op = $(this).attr('value');
    console.log($op);
    var numSet = parseInt(nums.join(''));
    nums = [];
    parsedNums.push(numSet);
    console.log(numSet);
    console.log(parsedNums);
    if(!ops[0] && $op !== "="){
      ops.push($op);
    }
    else{
      opToPass = ops.pop();
      if($op !== "=")
      ops.push($op);
      console.log(opToPass);
    }
    if(parsedNums.length === 2){
      result = calculate(opToPass)[0];
      console.log(result);
    }
  });
}

function calculate(opToPass){
  var result;
  switch (opToPass) {
    case "+":
      result = parsedNums.reduce(function(a, b){
        return a + b;
      });
      break;
    case "-":
      result = parsedNums.reduce(function(a, b){
        return a - b;
      });
      break;
    case "/":
      result = parsedNums.reduce(function(a, b){
        return a / b;
      });
      break;
    case "*":
      result = parsedNums.reduce(function(a, b){
        return a * b;
      });
      break;
    case "=":
        console.log(opToPass);
      break;
    default:
  }
  parsedNums = [];
  parsedNums.push(result);
  return parsedNums;
}
