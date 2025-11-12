const navButton = document.getElementById("nav-toggle");
const navMenu = document.getElementById("primary-nav");

navButton.addEventListener("click", () => {
  const expanded = navButton.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);
  navMenu.classList.toggle("show");
});
