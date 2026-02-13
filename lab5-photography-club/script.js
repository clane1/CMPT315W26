// Run script only after DOM is fully loaded (Part 1)
document.addEventListener("DOMContentLoaded", () => {

  // ============================
  // PART 2 — Focus / Blur UX
  // ============================

  const inputs = document.querySelectorAll("#username, #email, #password");

  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.backgroundColor = "#fffae0";
    });

    input.addEventListener("blur", () => {
      input.style.backgroundColor = "white";
    });
  });


  // ============================
  // PART 3 — Form Validation
  // ============================

  const form = document.getElementById("signup-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page reload

    let valid = true;

    // Clear previous success message
    document.getElementById("success-message").textContent = "";

    // Username validation
    const username = document.getElementById("username");
    const userErr = document.getElementById("error-username");

    if (username.value.trim() === "") {
      userErr.textContent = "Username is required";
      userErr.style.display = "block";
      username.classList.add("error-border");
      valid = false;
    } else {
      userErr.textContent = "";
      userErr.style.display = "none";
      username.classList.remove("error-border");
    }

    // Email validation
    const email = document.getElementById("email");
    const emailErr = document.getElementById("error-email");

    const looksEmail = email.value.includes("@") && email.value.includes(".");

    if (!looksEmail) {
      emailErr.textContent = "Enter a valid email address";
      emailErr.style.display = "block";
      email.classList.add("error-border");
      valid = false;
    } else {
      emailErr.textContent = "";
      emailErr.style.display = "none";
      email.classList.remove("error-border");
    }

    // Password validation
    const password = document.getElementById("password");
    const passErr = document.getElementById("error-password");

    if (password.value.length < 8) {
      passErr.textContent = "Password must be at least 8 characters";
      passErr.style.display = "block";
      password.classList.add("error-border");
      valid = false;
    } else {
      passErr.textContent = "";
      passErr.style.display = "none";
      password.classList.remove("error-border");
    }

    // Terms checkbox
    const terms = document.getElementById("terms");
    const termsErr = document.getElementById("error-terms");

    if (!terms.checked) {
      termsErr.textContent = "You must accept the terms";
      termsErr.style.display = "block";
      terms.classList.add("error-border");
      valid = false;
    } else {
      termsErr.textContent = "";
      termsErr.style.display = "none";
      terms.classList.remove("error-border");
    }

    // If everything is valid
    if (valid) {
      document.getElementById("success-message").textContent =
        "Registration successful! Welcome to the Travel Photo Club.";
    }
  });


  // ============================
  // PART 4B — Interactive Gallery
  // ============================

  const tiles = document.querySelectorAll(".thumb");
  const caption = document.getElementById("image-caption");

  function selectTile(tile) {
    // Remove expanded from all
    tiles.forEach(t => t.classList.remove("expanded"));

    // Add expanded to clicked tile
    tile.classList.add("expanded");

    // Update caption
    const city = tile.dataset.city;
    caption.textContent = `You selected: ${city}`;
  }

  // Click support
  tiles.forEach(tile => {
    tile.addEventListener("click", () => selectTile(tile));
  });

  // Keyboard support (Enter key)
  tiles.forEach(tile => {
    tile.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        selectTile(tile);
      }
    });
  });

});
