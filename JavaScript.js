// Set your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2F5MzU5OSIsImEiOiJjbGdlN2tobXQyaHlwM2dxcml6czMzb2hnIn0.TTZhGEbBnLQayDm8RzFYOg';

// Initialize the map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});
// Replace YOUR_ACCESS_TOKEN with your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2F5MzU5OSIsImEiOiJjbGdlN2tobXQyaHlwM2dxcml6czMzb2hnIn0.TTZhGEbBnLQayDm8RzFYOgN';

// Create a new Mapbox map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-122.4194, 37.7749], // San Francisco, California
  zoom: 12
});
// Get the user's current location
navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
  
    // Add a marker to the map at the user's current location
    var marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  
    // Center the map on the user's current location
    map.flyTo({
      center: [longitude, latitude],
      zoom: 14
    });
  });
  