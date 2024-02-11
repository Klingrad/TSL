// script.js

// Function to display welcome message
function displayWelcomeMessage() {
    // Retrieve username from local storage
    var username = localStorage.getItem("username");
    // If user is logged in and username exists
    if (localStorage.getItem("loggedIn") === "true" && username) {
        // Display welcome message on the main page
        var welcomeElement = document.getElementById("welcomeMessage");
        welcomeElement.innerHTML = "<p>Welcome, " + username + "!</p>";
    }
}

// Call the function to display welcome message
displayWelcomeMessage();
