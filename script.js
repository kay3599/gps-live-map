// Initialize the map
mapboxgl.accessToken = pk.eyJ1Ijoia2F5MzU5OSIsImEiOiJjbGdlN2tobXQyaHlwM2dxcml6czMzb2hnIn0.TTZhGEbBnLQayDm8RzFYOg
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-122.4194, 37.7749],
  zoom: 12
});

// Add a geolocate control to the map
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  })
);
