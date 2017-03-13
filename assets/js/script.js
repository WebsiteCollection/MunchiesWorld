// Navigation //

    $( ".toggle-button" ).click(function() {
      $( ".nav" ).slideToggle(300)
    });

    $('.toggle-button').on('click', function() {
          this.classList.toggle('change');
      });
 
                   
// Back to Top Button //
window.onscroll = function() {
  scrollFunction()
};

var topButton = document.getElementById("to-top");

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topButton.style.display = "block";
  }
  else{
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


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

