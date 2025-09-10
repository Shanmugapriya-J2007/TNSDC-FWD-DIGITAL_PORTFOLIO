const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// The event listener syntax was incorrect. It should have a function as the second argument.
menuToggle.addEventListener("click", () => {
    // Also, the class name 'show' should be 'active' to match your CSS.
    navLinks.classList.toggle("active");
});

// Simple contact form validation
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        formStatus.textContent = "✔ Message sent successfully!";
        formStatus.style.color = "green";
        contactForm.reset();
    } else {
        formStatus.textContent = "❌ Please fill in all fields.";
        formStatus.style.color = "red";
    }
}); 
