// ===== VIDEO: show localStorage persistence =====

export function saveFavorite(id) {
  let favs = JSON.parse(localStorage.getItem("frog-favs")) || [];

  if (!favs.includes(id)) {
    favs.push(id);
  }

  localStorage.setItem("frog-favs", JSON.stringify(favs));
}

export function loadFavorites() {
  return JSON.parse(localStorage.getItem("frog-favs")) || [];
}
