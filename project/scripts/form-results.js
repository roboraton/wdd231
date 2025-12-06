// Read URL parameters and display form results

const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const email = params.get("email");
const category = params.get("category");

document.getElementById("name").textContent = name ?? "—";
document.getElementById("email").textContent = email ?? "—";
document.getElementById("category").textContent = category ?? "—";

// Save favorite category to localStorage
if (category) {
  localStorage.setItem("frogFavoriteCategory", category);
}
