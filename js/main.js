$(function(){
  numClicked();
  opClicked();
  doAllTheMaths();
  clearAll();
  toggleNegative();
  toPercent();
});

var nums = [];
var parsedNums = [];
var hasBeenToggled, toggled, percentage;


function clearAll(){
  $('#clearAll').on('click', function(){
    nums = [];
    parsedNums = [];
    $('input').val('');
    hasBeenToggled = 0;
  });
}

function toggleNegative(){
  hasBeenToggled = 0;
  $('#plus-minus').on('click', function(){
    if(!hasBeenToggled){
      hasBeenToggled ++;
      toggled = parseFloat(nums.join("")) * -1;
      nums = [];
      $('input').val(toggled);
    }
    else{
      $('input').val(toggled * -1);
      toggled = toggled * -1;
    }
  });
}

function toPercent(){
  $('#percent').on('click', function(){
    percentage = parseFloat(nums.join("")) / 100;
    nums = [];
    $('input').val(percentage);
  });
}

function numClicked(){
  $(".number").on("click", function(){
    nums.push($(this).text().trim());
    $('input').val(nums.join(""));
  });
}

var ops = [], result;
function opClicked(){
  var $op;
  $(".ops").on("click", function(){
    $op = $(this).attr('value');
    var numSet = toggled || percentage ? toggled || percentage: parseFloat(nums.join(''));
    toggled = '';
    percentage = '';
    nums = [];
    parsedNums.push(numSet);
    if(!ops[0] && $op !== "="){
      ops.push($op);
    }
    else{
      opToPass = ops.pop();
      if($op !== "=")
      ops.push($op);
    }
    if(parsedNums.length === 2){
      result = calculate(opToPass)[0];
      console.log(result);
      $('input').val(result);
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
      break;
    default:
  }
  parsedNums = [];
  parsedNums.push(result);
  return parsedNums;
}

function doAllTheMaths(){
  $('#equals').on('click', function(){
    parsedNums = [];
    nums[0] = result;
    $('input').val(nums[0]);
  });
}
