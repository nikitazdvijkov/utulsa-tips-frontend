$(document).ready(function() {
  var htmlBeginning = "<div class='card bg-light my-2'><div class='card-body'>";
  var htmlMiddle = "</div><div class='card-footer text-muted text-center'>";
  var htmlEnd = "</div>"
  $.getJSON("https://whispering-dusk-20797.herokuapp.com/products", function(myJson) {
    console.log(myJson);
    $("#cards").empty();
    $.each(myJson, function(index, element) {
      $("#cards").append(htmlBeginning + element.name + htmlMiddle + element.price + htmlEnd);
    });
  })
  .fail(function() {
    console.log( "error" );
    $("#cards").html("Something went wrong :(");
  });
});