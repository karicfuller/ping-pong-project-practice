


var oneInput = function(numberOneInput){
  //debugger;
for (index = 1; index <= numberOneInput; index =+ 1) {
  if (isNaN(numberOneInput)) {
      $("#resultNumber").append("<li>" + "Enter a valid Number:" + "</li>");
    } else if(numberOneInput%15 === 0) {
      $("#resultNumber").append("<li>" + "ping-pong" + "</li>");
    } else if(numberOneInput%5 === 0) {
      $("#resultNumber").append("<li>" + "pong" + "</li>");
    } else if(numberOneInput%3 === 0) {
      $("#resultNumber").append("<li>" + "ping" + "</li>");
    } else if ((numberOneInput%15 !== 0) && (numberOneInput%5 !== 0) && (numberOneInput%3 !== 0)) {
      $("#resultNumber").append("<li>" + numberOneInput + "</li>");
    }
  }
};



$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    //debugger;
    var numberOneInput = $("input#numberOne").val();

    if (numberOneInput === "") {
      alert("Please enter a vaid number.")
    } else {
      oneInput(numberOneInput);
    };



    event.preventDefault();
  });
});
