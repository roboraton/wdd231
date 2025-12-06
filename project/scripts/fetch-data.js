// ===== VIDEO: Demonstrate async/await + try/catch =====
export async function getFrogItems() {
  try {
    const response = await fetch("data/frog-items.json");

    if (!response.ok) {
      throw new Error("Fetch error: " + response.status);
    }

    return await response.json();

  } catch (error) {
    console.error("Error loading FROG items:", error);
    return [];
  }
}
