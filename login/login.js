// Get the login button and the form popups
const loginBtn = document.getElementById("login-btn");
const loginPopup = document.getElementById("login-popup");
const closeLoginBtn = document.getElementById("close-login-btn");

// Function to open the login form popup
function openLoginPopup() {
  loginPopup.style.display = "block";
}

// Function to close the login form popup
function closeLoginPopup() {
  loginPopup.style.display = "none";
}

// Attach a click event listener to the login button
loginBtn.addEventListener("click", openLoginPopup);

// Attach a click event listener to the close login button
closeLoginBtn.addEventListener("click", closeLoginPopup);

// Close the login form popup when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === loginPopup) {
    closeLoginPopup();
  }
});