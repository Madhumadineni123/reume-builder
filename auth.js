// Signup Functionality
document.getElementById("signup-form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    // Save user data to localStorage
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Signup successful! Please login.");
    window.location.href = "index.html";
});

// Login Functionality
document.getElementById("login-form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert("Login successful!");
        window.location.href = "resume.html"; // Redirect to resume builder
    } else {
        alert("Invalid email or password.");
    }
});