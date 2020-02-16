$(document).ready(function() {
  
  // render api data
  var htmlBeginning = "<div class='card bg-light my-2'><div class='card-body'>";
  var htmlMiddle = "</div><div class='card-footer text-muted text-center'>";
  var htmlEnd = "</div>";
  $.getJSON("http://utulsa-tips-api.herokuapp.com/tips", function(myJson) {
    console.log(myJson);
    $("#cards").empty(); // needed to remove loading message
    $.each(myJson, function(index, element) {
      var detailsString = new Date(element.timestamp).toLocaleDateString("en-US");
      detailsString = "By " + element.alias + " on " + detailsString;
      $("#cards").append(htmlBeginning + element.tipContent + htmlMiddle + detailsString + htmlEnd);
    });
  })
  .fail(function() {
    console.log( "error" );
    $("#cards").html("<div class='text-center'>Something went wrong with the API :(</div>");
  });

  // handle form submission
  $("#myForm").submit(function(event) {
    formData = $(this).serializeArray();
    console.log("formData:");
    console.log(formData);
    postRequestBody = {
      name: formData[0].value,
      price: formData[1].value
    };
    console.log("postRequestBody:");
    console.log(postRequestBody);
    $.post(
      "https://whispering-dusk-20797.herokuapp.com/products", 
      postRequestBody, 
      function() {
        console.log("success: post request sent");
      })
      .done(function() {
        $("#submit").append("<div>success</div>");
        console.log("success message appended")
      })
      .fail(function() {
        $("#submit").append("<div>error</div>");
        console.log("error message appended")
    });
    event.preventDefault();
  });
});