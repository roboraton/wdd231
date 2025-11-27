import { places } from "../data/places.mjs";

const grid = document.getElementById("discover-grid");
const visitMessage = document.getElementById("visit-message");

function renderPlaces() {
  const areas = ["area-a", "area-b", "area-c", "area-d", "area-e", "area-f", "area-g", "area-h"];

  places.forEach((place, index) => {
    const card = document.createElement("article");
    card.classList.add("place-card");

    if (areas[index]) {
      card.classList.add(areas[index]);
    }

    card.innerHTML = `
      <h2>${place.title}</h2>
      <figure>
        <img src="${place.image}" alt="${place.title}" loading="lazy">
      </figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button type="button">Learn more</button>
    `;

    grid.appendChild(card);
  });
}

function setVisitMessage() {
  const STORAGE_KEY = "discover-last-visit";
  const now = Date.now();
  const lastVisit = Number(localStorage.getItem(STORAGE_KEY));

  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const diffMs = now - lastVisit;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
      message = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${diffDays} days ago.`;
    }
  }

  visitMessage.textContent = message;
  localStorage.setItem(STORAGE_KEY, String(now));
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlaces();
  setVisitMessage();
});
