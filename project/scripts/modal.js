// ===== VIDEO MARKER: show modal usage =====

export function openModal(item) {
  const modal = document.querySelector("#frogModal");
  const modalContent = document.querySelector("#modalContent");

  modalContent.innerHTML = `
    <h2>${item.name}</h2>
    <img src="${item.image}" alt="${item.name}">
    <p>${item.description}</p>
  `;

  modal.showModal();
}

export function initModal() {
  const modal = document.querySelector("#frogModal");
  const closeBtn = document.querySelector("#closeModal");

  closeBtn.addEventListener("click", () => modal.close());
}
