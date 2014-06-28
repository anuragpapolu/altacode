      $( document ).ready(function() {
          $(document.body).hide().delay(400).fadeIn("slow");
          $( "#content" ).html($("#home").html());
          $( "#content" ).fadeIn();
          $(".masthead-nav a").click(function(event){
            event.preventDefault();
            if ( $( this ).parent().is( ".active" ) ) {
                jQuery.noop();
            } else {

              var id = $(this).attr("href");
              $(".masthead-nav").find(".active").removeClass("active");
              $(this).parent().addClass("active");
              $( "#content" ).fadeOut("slow", function(){
                $( "#content" ).html($(id).html());
                $( "#content" ).fadeIn("slow");
              });
            }

          });
      });