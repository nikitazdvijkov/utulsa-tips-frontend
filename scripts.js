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

  /*
  $("#myForm").submit(function(e) {
    e.preventDefault();
    console.log("here we are");
  });
  */

  $("button").click(function(){
    console.log("here we are now");
    var formData = JSON.stringify($("#myForm").serializeArray());
    console.log(formData);
    /*
    $.post("demo_test_post.asp",
    {
      name: "chicken sandwich",
      price: "4.00"
    },
    function(data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    });
    */
  });

});

/*
function submitForm() {
  console.log("here we are");
  var formData = JSON.stringify($("#myForm").serializeArray());
  console.log(formData);
}
*/