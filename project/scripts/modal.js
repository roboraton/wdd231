// ===== VIDEO: show modal behavior =====

export function openModal(item) {
  const modal = document.querySelector("#frogModal");
  const modalContent = document.querySelector("#modalContent");

  modalContent.innerHTML = `
    <h2>${item.name}</h2>
    <img src="${item.image}" alt="${item.name}">
    <p>${item.description}</p>
    <p><strong>Category:</strong> ${item.category}</p>
    <p><strong>Price:</strong> ${item.price}</p>
  `;

  modal.showModal();
}

export function initModal() {
  const modal = document.querySelector("#frogModal");
  const closeBtn = document.querySelector("#closeModal");

  closeBtn.addEventListener("click", () => modal.close());
}
