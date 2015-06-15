$(document).ready(init);


function init () {
  clickNumber();
  // operation();
  // clearScreen();
}

  var numSet = [];
  var clearClicks = 0;

  var clickNumber = function(){
        var num;
        var stringToNum;
    $(".purple-buttons").on("click", function(){
      var numText = $(this).text();
      
      $('input#input').val(numText);
      console.log($('input#input').val());

      $("#all-clear").text("C");
      $(".purple-buttons").removeClass('purple-highlight');
      $(this).addClass('purple-highlight');

      //   numSet.push(numText);
      //
      // var numToString = numSet.join("");
      // console.log("joined numSet", numToString);
    });
  };

  // var operation = function(){
  //   $(".green-buttons").on("click", function(){
  //     var operationClicked = $(this).text();
  //     $('#input').val(operationClicked);
  //     numSet.push(operationClicked);
  //     numSet.join("");
  //     console.log("numSet", numSet);
  //     $("this").toggleClass("green-highlight");
  //     clickNumber();
  //     // $(this).addClass('green-highlight');
  //   });
  // };

  // var clearScreen = function(){
  //   $("#all-clear").on("click", function(){
  //     $('#input').val('');
  //     clearClicks += 1;
  //     if(clearClicks <= 1){
  //     $("#all-clear").text("C");
  //     }
  //     else if(clearClicks >=  2){
  //     $("#all-clear").text("AC");
  //     // numSet = "";
  //     clickNumber();
  //     clearClicks = 1;
  //     console.log(numSet);
  //     }
  //     console.log('clearClicks', clearClicks);
  //   });
  // };
