// =====================
// Hamburger Menu
// =====================
const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// =====================
// Date Footer
// =====================
// (you could also keep this in date.js, but leaving here is fine)

const yearSpan = document.querySelector("#currentyear");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastMod = document.querySelector("#lastModified");
if (lastMod) lastMod.textContent = document.lastModified;


// =====================
// FROG Neon Cursor
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.classList.add("frog-cursor");
  document.body.appendChild(cursor);

  // move cursor
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // detect hover over links
  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });
});
