$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var numberOneInput = $("input#numberOne").val();
    //console.log(numberOneInput);

      //var result = (numberOneInput/3);
      //alert(result);

      if (isNaN(numberOneInput)) {
        alert("enter a number");
      } else (numberOneInput/3 = 0) {        
        alert("ping");
      }



    event.preventDefault();
  });
});
