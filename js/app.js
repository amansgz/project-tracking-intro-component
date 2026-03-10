// Toggle menu functionality
const navToggle = document.querySelector(".nav__toggle");

navToggle.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !isExpanded);
});

// Close menu when clicking a link
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
  });
});
