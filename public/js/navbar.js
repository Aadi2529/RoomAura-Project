
document.addEventListener("DOMContentLoaded", function() {

  // Location dropdown show/hide
  const locationInput = document.getElementById("locationInput");
  const suggestionsBox = document.getElementById("suggestionsBox");

  locationInput.addEventListener("focus", () => {
    suggestionsBox.style.display = "block";
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#whereSection")) {
      suggestionsBox.style.display = "none";
    }
  });

  // Select suggestion
  document.querySelectorAll(".suggestion-item").forEach(item => {
    item.addEventListener("click", function() {
      locationInput.value = this.dataset.value;
      suggestionsBox.style.display = "none";
    });
  });

  // Guest dropdown
  const guestsInput = document.getElementById("guestsInput");
  const guestsDropdown = document.getElementById("guestsDropdown");
  guestsInput.addEventListener("click", () => {
    guestsDropdown.style.display = "block";
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#whoSection")) {
      guestsDropdown.style.display = "none";
    }
  });

  // Update guest count
  window.updateGuests = function(change) {
    let count = parseInt(document.getElementById("guestCount").innerText);
    count = Math.max(1, count + change);
    document.getElementById("guestCount").innerText = count;
    guestsInput.value = `${count} guest${count > 1 ? 's' : ''}`;
  };

  // Flatpickr for date selection
  flatpickr("#checkinInput", {
    dateFormat: "Y-m-d"
  });
  flatpickr("#checkoutInput", {
    dateFormat: "Y-m-d"
  });
});


  const locationInput = document.getElementById("locationInput");
  const suggestionsBox = document.getElementById("suggestionsBox");
  const checkinInput = document.getElementById("checkinInput");
  const guestsInput = document.getElementById("guestsInput");
  const guestsDropdown = document.getElementById("guestsDropdown");

  // Show destination suggestions
  locationInput.addEventListener("focus", () => {
    suggestionsBox.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#whereSection")) {
      suggestionsBox.style.display = "none";
    }
    if (!e.target.closest("#whoSection")) {
      guestsDropdown.style.display = "none";
    }
  });

  // When clicking destination → autofill + open next
  document.querySelectorAll(".suggestion-item").forEach(item => {
    item.addEventListener("click", () => {
      locationInput.value = item.dataset.value;
      suggestionsBox.style.display = "none";
      setTimeout(() => checkinInput.focus(), 300);
    });
  });

  // Guests section
  guestsInput.addEventListener("focus", () => {
    guestsDropdown.style.display = "block";
  });

  let guests = 1;
  function updateGuests(change) {
    guests = Math.max(1, guests + change);
    document.getElementById("guestCount").innerText = guests;
    guestsInput.value = `${guests} guest${guests > 1 ? "s" : ""}`;
  }

