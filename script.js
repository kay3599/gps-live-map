// Create a new map instance and set the center and zoom level
var mymap = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map (using OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19
}).addTo(mymap);

// Add a marker to the map at the specified coordinates
var marker = L.marker([51.5, -0.09]).addTo(mymap);
