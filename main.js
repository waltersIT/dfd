
// Initialize the map
let map = L.map('map').setView([39.40256, -76.61041], 16);
// Load and display tile layer on the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
let m1 = L.marker([39.40256, -76.61041]).addTo(map);
m1.bindPopup("DeVeas Family Dentistry").openPopup();
