async function loadSpotlights() {
  try {
    const res = await fetch("data/members.json");
    if (!res.ok) throw new Error();
    const data = await res.json();

    const premium = data.members.filter(m => Number(m.membership) >= 2);
    for (let i = premium.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [premium[i], premium[j]] = [premium[j], premium[i]];
    }

    const picks = premium.slice(0, 3);
    const grid = document.getElementById("spotlight-grid");
    grid.innerHTML = "";

    picks.forEach(m => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <img src="${m.image}" alt="${m.name} logo" loading="lazy">
        <h3>${m.name}</h3>
        <p>${m.address}</p>
        <p>${m.phone}</p>
        <a href="${m.website}" target="_blank" rel="noopener">Visit Website</a>
        <p class="membership">${m.membership == 3 ? "Gold" : "Silver"}</p>
      `;
      grid.appendChild(card);
    });

  } catch (e) {
    document.getElementById("spotlight-grid").innerHTML =
      "<p>Spotlights unavailable.</p>";
  }
}

loadSpotlights();
