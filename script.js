window.addEventListener("load", () => {
  const goggles = document.getElementById("goggles");
  goggles.style.opacity = "1";
  goggles.style.transform = "translate(-50%, -50%) scale(1)";

  setTimeout(() => {
    goggles.style.opacity = "0";
    goggles.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});

const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

const emailTab = document.querySelector(".tab button:nth-child(1)");
const phoneTab = document.querySelector(".tab button:nth-child(2)");
const emailGroup = document.querySelector(".email-group");
const phoneGroup = document.querySelector(".phone-group");

emailTab.addEventListener("click", () => {
  emailTab.classList.add("active");
  phoneTab.classList.remove("active");
  emailGroup.classList.remove("hidden");
  emailGroup.classList.add("show");
  phoneGroup.classList.remove("show");
  phoneGroup.classList.add("hidden");
});

phoneTab.addEventListener("click", () => {
  phoneTab.classList.add("active");
  emailTab.classList.remove("active");
  phoneGroup.classList.remove("hidden");
  phoneGroup.classList.add("show");
  emailGroup.classList.remove("show");
  emailGroup.classList.add("hidden");
});

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "👁"; // Change icon
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "🔓"; // Change icon back
  }
});

const loginForm = document.getElementById("loginForm");
const loginBox = document.querySelector(".login-box");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = passwordInput.value;

  if (email.includes("admin") || password.length < 6) {
    alert("⚠️ Firewall: Suspicious login attempt blocked!");
    loginBox.classList.add("shake");
    setTimeout(() => loginBox.classList.remove("shake"), 500);
  } else {
    alert("✅ Login Successful!");
  }
});
