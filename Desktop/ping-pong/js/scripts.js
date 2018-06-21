


var oneInput = function(numberOneInput){
  //debugger;
    if (isNaN(numberOneInput)) {
    $("#resultNumber").append("<li>" + "Enter a valid Number:" + "</li>");
  } else if(numberOneInput%15 === 0) {
    $("#resultNumber").append("<li>" + "ping-pong" + "</li>");
  } else if(numberOneInput%5 === 0) {
    $("#resultNumber").append("<li>" + "pong" + "</li>");
  } else if(numberOneInput%3 === 0) {
    $("#resultNumber").append("<li>" + "ping" + "</li>");
  } else if((numberOneInput%15 !== 0) && (numberOneInput%5 !== 0) && (numberOneInput%3 !== 0)) {
    $("#resultNumber").append("<li>" + numberOneInput + "</li>");
  } else {
    $("#resultNumber").append("<li>" + "Enter valid input"+ "</li>");
  }
};



$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    //debugger;
    var numberOneInput = $("input#numberOne").val();
    oneInput(numberOneInput);

    event.preventDefault();
  });
});
