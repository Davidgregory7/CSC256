// Get the form from the HTML page
const gameForm = document.getElementById("gameForm");

// Run when the player clicks Submit
gameForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values entered into the form
    const username = document.getElementById("username").value;
    const weapons = document.getElementById("weapons").value;
    const health = document.getElementById("health").value;
    const points = document.getElementById("points").value;

    // Display the values on the webpage
    document.getElementById("outputUsername").textContent = username;
    document.getElementById("outputWeapons").textContent = weapons;
    document.getElementById("outputHealth").textContent = health;
    document.getElementById("outputPoints").textContent = points;
});