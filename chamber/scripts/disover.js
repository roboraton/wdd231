// scripts/discover.js
import { places } from "../data/places.mjs";

// ----- Pintar las cards -----
const grid = document.querySelector("#discover-grid");

places.forEach((place, index) => {
  const areaClass = `area-${String.fromCharCode(97 + index)}`; // a, b, c...

  const card = document.createElement("article");
  card.classList.add("place-card", areaClass);

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button type="button">Learn more</button>
  `;

  grid.appendChild(card);
});

// ----- Mensaje de última visita -----
const VISIT_KEY = "discover-last-visit";
const visitEl = document.getElementById("visit-message");
const now = Date.now();
const lastVisit = Number(localStorage.getItem(VISIT_KEY));

let message = "";

if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const diffMs = now - lastVisit;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (days < 1) {
    message = "Back so soon! Awesome!";
  } else if (days === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${days} days ago.`;
  }
}

visitEl.textContent = message;
localStorage.setItem(VISIT_KEY, String(now));
