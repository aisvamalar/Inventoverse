document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted!");
    // Additional form submission handling can be done here
});
// Navbar toggle script for mobile view
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
});

