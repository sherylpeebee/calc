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
      toggled = parseInt(nums.join("")) * -1;
      nums = [];
      $('input').val(toggled);
      console.log(toggled);
    }
    else{
      $('input').val(toggled * -1);
      toggled = toggled * -1;
      console.log(toggled);
    }
  });
}

function toPercent(){
  $('#percent').on('click', function(){
    percentage = parseInt(nums.join("")) / 100;
    console.log(percentage);
    nums = [];
    $('input').val(percentage);
  });
}

function numClicked(){
  $(".number").on("click", function(){
    nums.push($(this).text().trim());
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
    var numSet = toggled || percentage ? toggled || percentage: parseInt(nums.join(''));
    toggled = '';
    percentage = '';
    console.log(toggled);
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
        console.log(opToPass);
      break;
    default:
  }
  parsedNums = [];
  parsedNums.push(result);
  return parsedNums;
}

function doAllTheMaths(){
  $('#equals').on('click', function(){
    console.log(result);
    parsedNums = [];
    nums[0] = result;
    $('input').val(nums[0]);
  });
}
