async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Error al cargar el archivo JSON');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error cargando los miembros:', error);
    document.getElementById('members').innerHTML = '<p>No se pudo cargar la información de los miembros.</p>';
  }
}

// -------------Render

function displayMembers(members) {
  const container = document.getElementById('members');
  container.innerHTML = '';

  members.forEach((member) => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
      <p class="membership">Level: ${getMembershipLabel(member.membership)}</p>
    `;

    container.appendChild(card);
  });
}

// -----------Toggle Grid/List

const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');
const membersContainer = document.querySelector('#members');

gridBtn.addEventListener('click', () => {
  membersContainer.classList.add('grid-view');
  membersContainer.classList.remove('list-view');
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
  membersContainer.classList.add('list-view');
  membersContainer.classList.remove('grid-view');
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
});

// -------------------------------------------
// Utilidad para niveles
// -------------------------------------------

function getMembershipLabel(level) {
  switch (level) {
    case 3: return 'Gold';
    case 2: return 'Silver';
    case 1: return 'Member';
    default: return 'Unknown';
  }
}

getMembers();
