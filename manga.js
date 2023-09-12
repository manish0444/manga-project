const MenuBtn = document.getElementById("Menu-Btn")
const OtherNavbar = document.getElementById("Other-Navbar")
MenuBtn.onclick = ()=>{
    if (OtherNavbar.classList.contains("show")) {
        OtherNavbar.classList.remove("show")
    }
    else{
        OtherNavbar.classList.add("show")
    }
}
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

// Similar JavaScript code can be added for the signup form
// Get the signup button and the form popup
const signupBtn = document.getElementById("signup-link");
const signupPopup = document.getElementById("signup-popup");
const closeSignupBtn = document.getElementById("close-signup-btn");

// Function to open the signup form popup
function openSignupPopup() {
  signupPopup.style.display = "block";
}

// Function to close the signup form popup
function closeSignupPopup() {
  signupPopup.style.display = "none";
}

// Attach a click event listener to the signup button
signupBtn.addEventListener("click", openSignupPopup);

// Attach a click event listener to the close signup button
closeSignupBtn.addEventListener("click", closeSignupPopup);

// Close the signup form popup when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === signupPopup) {
    closeSignupPopup();
  }
});
// JavaScript to toggle the "Forgot Password" popup
document.querySelector('.forgot-pass-link').addEventListener('click', function () {
    document.getElementById('forgot-pass-popup').style.display = 'block';
});

document.querySelector('#close-forgot-pass-btn').addEventListener('click', function () {
    document.getElementById('forgot-pass-popup').style.display = 'none';
});
