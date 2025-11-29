import { places } from "../data/discoverData.mjs";

document.addEventListener("DOMContentLoaded", () => {
  
  /* ------------------
     LOAD GRID CONTENT
  ------------------- */
  const grid = document.getElementById("discoverGrid");

  places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("place-card", `area-${place.id}`);

    card.innerHTML = `
      <h2>${place.title}</h2>
      <figure>
        <img src="${place.image}" alt="${place.title}">
      </figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button>Learn More</button>
    `;

    grid.appendChild(card);
  });


  /* ------------------
     LAST VISIT MESSAGE
  ------------------- */
  const msg = document.getElementById("visitMessage");
  const today = Date.now();
  const lastVisit = Number(localStorage.getItem("lastVisit")) || 0;

  if (!lastVisit) {
    msg.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const diff = today - lastVisit;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
      msg.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
      msg.textContent = "You last visited 1 day ago.";
    } else {
      msg.textContent = `You last visited ${days} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", today);
});
