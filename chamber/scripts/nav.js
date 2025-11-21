const navButton = document.getElementById("nav-toggle");
const navMenu = document.querySelector("#primary-nav ul");

navButton.addEventListener("click", () => {
  const expanded = navButton.getAttribute("aria-expanded") === "true";
  navButton.setAttribute("aria-expanded", !expanded);
  navMenu.classList.toggle("show");
});

