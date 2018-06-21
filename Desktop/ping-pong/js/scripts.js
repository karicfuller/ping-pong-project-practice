$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var numberOneInput = $("input#numberOne").val();
    //console.log(numberOneInput);

      //var result = (numberOneInput/3);
      //alert(result);

      if (isNaN(numberOneInput)) {
        alert("enter a number");
      } else if(numberOneInput%15 === 0) {
        alert("ping-pong");
      } else if(numberOneInput%5 === 0) {
        alert("pong");
      } else if(numberOneInput%3 === 0) {
        alert("ping");
      } else if((numberOneInput%15!== 0) && (numberOneInput%5!== 0) && (numberOneInput%3!== 0)) {
        alert(numberOneInput);
      }


    event.preventDefault();
  });
});
