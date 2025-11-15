// sections.mjs

// Esta función recibe las secciones del curso
// y las mete dentro del <select> #sectionNumber
export function setSectionSelection(sections) {
  // Seleccionamos el dropdown de secciones
  const select = document.querySelector("#sectionNumber");

  // Limpiamos cualquier opción previa
  select.innerHTML = "";

  // Por cada sección...
  sections.forEach(section => {
    // Creamos una opción <option>
    const option = document.createElement("option");

    // El valor de la opción es el ID de la sección
    option.value = section.id;

    // Lo que mostrará al usuario
    option.textContent = `Section ${section.id}`;

    // Insertamos la opción al <select>
    select.appendChild(option);
  });
}
