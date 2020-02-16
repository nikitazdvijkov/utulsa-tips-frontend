# README

## fonts howto

```CSS
font-family: 'IBM Plex Serif', serif;
font-family: 'Crete Round', serif;
font-family: 'Martel', serif;
font-family: 'Pathway Gothic One', sans-serif;
font-family: 'Volkhov', serif;
```

## how to implement smooth scroll back to top:

nah just look up
scroll back to top jquery
on google
find full ready solution instead of diy
make it with shadow

[try it demo](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_smooth_scroll_jquery)
on w3schools
and
[full details](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp)


## discarded code

former card template:

```html
<div class="card bg-light my-2">
  <div class="card-body">
    Lorem ipsum dolor sit rem ipsum dolor amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a rem ipsum dolor ante.
  </div>
  <div class="card-footer text-muted text-center">
    Submitted by Mike on 02/03/2020
  </div>
</div>
```

former form tag:

```html
<form action="https://whispering-dusk-20797.herokuapp.com/products" method="POST" name="myForm">
```

former button tag:

```html
<button type="submit" name="submit" value="submit" onclick="submitForm();" class="btn btn-primary">Submit</button>
```

retired js snippets that didn't work:

```javascript
function submitForm() {
  console.log("here we are");
  var formData = JSON.stringify($("#myForm").serializeArray());
  console.log(formData);
}
```

also

```javascript
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
```

and 

```javascript
$("#myForm").submit(function(e) {
  e.preventDefault();
  console.log("here we are");
});
```

and 

```javascript
/*
  $("#myForm").submit(function( event ) {
    console.log( $( this ).serializeArray() );
    event.preventDefault();
  });
  */
  $("#a").click(function( event ) {
    console.log( $( "#myForm" ).serializeArray() );
    event.preventDefault();
  });
```