// output.mjs

// Esta función pone el título del curso en un elemento HTML
export function setTitle(course) {
  // Seleccionamos el lugar donde va el título
  const title = document.querySelector("#courseTitle");

  // Mostramos "WDD 231: JavaScript ES Modules"
  title.textContent = `${course.code}: ${course.title}`;
}

// Esta función dibuja en pantalla todas las secciones
export function renderSections(sections) {
  // Seleccionamos el contenedor donde van las secciones
  const output = document.querySelector("#output");

  // Borramos lo anterior para actualizar limpio
  output.innerHTML = "";

  // Recorremos cada sección
  sections.forEach(sec => {
    // Creamos un elemento para mostrarla
    const div = document.createElement("div");

    // Creamos el texto: "Section 1: 25/30"
    div.textContent = `Section ${sec.id}: ${sec.enrolled}/${sec.capacity}`;

    // Lo añadimos al contenedor principal
    output.appendChild(div);
  });
}
