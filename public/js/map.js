
const locationString = "<%= listing.location %>, <%= listing.country %>";


  // Fetch coordinates from Nominatim API
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationString)}`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;

        // Initialize map
        var map = L.map('map').setView([lat, lon], 13);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Marker
        L.marker([lat, lon]).addTo(map)
          .bindPopup("<b><%= listing.title %></b><br>" + locationString)
          .openPopup();
      } else {
        document.getElementById('map').innerHTML = "<p class='text-danger'>Location not found</p>";
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById('map').innerHTML = "<p class='text-danger'>Error loading map</p>";
    });