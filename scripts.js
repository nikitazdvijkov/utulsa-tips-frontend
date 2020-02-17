$(document).ready(function() {
  
  //render api data
  var htmlBeginning = "<div class='card bg-light my-2'><div class='card-body'>";
  var htmlMiddle = "</div><div class='card-footer text-muted text-center'>";
  var htmlEnd = "</div>";
  $.getJSON("https://utulsa-tips-api.herokuapp.com/tips", function(myJson) {
    console.log(myJson);
    $("#loading-message").addClass("d-none"); // hide loading message placeholder
    $("#list-group-content").removeClass("d-none"); // show the tips
    $.each(myJson, function(index, element) {
      var detailsString = new Date(element.timestamp).toLocaleDateString("en-US");
      detailsString = "By " + element.alias + " on " + detailsString;
      $("#all-tips").append(htmlBeginning + element.tipContent + htmlMiddle + detailsString + htmlEnd);
      if (element.tags.includes("school")) {
        $("#school-tips").append(htmlBeginning + element.tipContent + htmlMiddle + detailsString + htmlEnd);
      }
      if (element.tags.includes("fun")) {
        $("#fun-tips").append(htmlBeginning + element.tipContent + htmlMiddle + detailsString + htmlEnd);
      }
      if (element.tags.includes("money")) {
        $("#money-tips").append(htmlBeginning + element.tipContent + htmlMiddle + detailsString + htmlEnd);
      }
    });
  })
  .fail(function() {
    console.log( "error" );
    $("#loading-message").html("<div class='text-center'>Something went wrong with the API :(</div>");
  });

  // handle form submission
  $("#myForm").submit(function(event) {
    formData = $(this).serializeArray();
    console.log("formData:");
    console.log(formData);
    postRequestBody = {
      alias: formData[0].value,
      tipContent: formData[1].value
    };
    console.log("postRequestBody:");
    console.log(postRequestBody);
    $.post(
      "https://utulsa-tips-api.herokuapp.com/tips", 
      postRequestBody, 
      function() {
        console.log("post request sent");
      })
      .done(function() {
        $("#submit").addClass("d-none");
        $("#success").removeClass("d-none");
        console.log("success message displayed")
      })
      .fail(function() {
        $("#submit").addClass("d-none");
        $("#fail").removeClass("d-none");
        console.log("error message displayed")
    });
    event.preventDefault();
  });

  // submit another response
  $("#success a").click(function() {
    $("#success").addClass("d-none"); // hide success message 
    $("#submit").removeClass("d-none"); // bring back form
    // clear form
    $("#alias-field").val(""); 
    $("#tipContent-field").val("");
  });

});