$(document).ready(function () {
  
    $(".btn").on("click", function(event) {
      var id = $(this).data("id");
      var doneDevoured = $(this).data("doneDevoured");
  
      var burgerState = {
        devoured: doneDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerState
      }).then(
        function() {
          console.log("Burger devoured", burgerState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".submit").on("submit", function(event) {
      
        event.preventDefault();
    
        var newBurger = {
          name: $(".form-control").val().trim(),
          // devoured: $("[name=devoured]:value=false").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("A new burger has been entered");
            // Reload the page to get the updated list
            location.reload();
          }
        );



      });
});