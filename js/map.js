      function initMap() {
        var marrickville = {lat: -33.9072866, lng: 151.15622299999995};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: marrickville
        });
        var marker = new google.maps.Marker({
          position: marrickville,
          map: map
        });
      }