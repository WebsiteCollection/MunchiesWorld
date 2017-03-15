$(document).ready(function() {

  // Navigation //

  $( ".toggle-button" ).click(function() {
     $( ".nav" ).slideToggle(300)//duration of 300
  });

  $('.toggle-button').on('click', function() {
      this.classList.toggle('change');//changing nav style: from hamburger to x
  });
           
  // Back to Top Button //

  var topButton = $('.to-top');

      //hide or show the "back to top" link
      $(window).scroll(function(){
        if ($(this).scrollTop() > 450){
          topButton.fadeIn();
        }
        else {            
          topButton.fadeOut();
        }
      });

      //smooth scroll to top
      topButton.click(function(event){
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 500);
        return false;
      }); 

});

// Google Map //
function myMap() {
  var myLatLng = {lat: 36.04, lng: -115.25};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Munchies World'
  });
}

