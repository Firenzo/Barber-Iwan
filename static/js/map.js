function initMap() {
        var Variaty = {lat: 52.368748, lng: 5.273911};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: Variaty,
          draggable:true,
          disableDefaultUI: true,
          zoomControl:true,
          styles: [
    {
        "stylers": [
            {
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2D333C"
            }
        ]
    }
]
        });
        var marker = new google.maps.Marker({
          position: Variaty,
          map: map
        });
      }