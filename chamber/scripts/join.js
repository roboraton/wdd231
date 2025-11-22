document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toISOString();

  const cards = document.querySelectorAll(".level-card");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close-modal");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const modal = document.getElementById(card.dataset.modal);
      modal.classList.add("show");
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").classList.remove("show");
    });
  });

  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("show");
    });
  });
});

// View Benefits links
document.querySelectorAll(".level-card a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const modalId = e.target.closest(".level-card").dataset.modal;
    document.getElementById(modalId).classList.add("show");
  });
});
