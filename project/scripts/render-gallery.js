import { getFrogItems } from "./fetch-data.js";
import { openModal } from "./modal.js";
import { saveFavorite } from "./storage.js";

// ===== VIDEO: show dynamic DOM generation =====

export async function renderGallery() {
  const grid = document.querySelector(".grid");

  const items = await getFrogItems();

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}" loading="lazy" alt="${item.name}">
      <h3>${item.name}</h3>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>

      <div class="card-actions">
        <button class="details-btn" data-id="${item.id}">Details</button>
        <button class="fav-btn" data-id="${item.id}">❤️ Fav</button>
      </div>
    `;

    grid.appendChild(card);
  });

  // modal buttons
  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = items.find(i => i.id == btn.dataset.id);
      openModal(item);
    });
  });

  // favorites → localStorage
  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      saveFavorite(btn.dataset.id);
    });
  });
}
