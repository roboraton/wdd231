// modules.mjs

// Importamos el objeto principal del curso (datos + métodos)
import byuiCourse from "./course.mjs";

// Importamos la función que llena el <select>
import { setSectionSelection } from "./sections.mjs";

// Importamos funciones para mostrar título y secciones
import { setTitle, renderSections } from "./output.mjs";

// -------------------------------
//      INICIALIZACIÓN INICIAL
// -------------------------------

// Ponemos el título del curso en la página
setTitle(byuiCourse);

// Llenamos el <select> con las secciones (1, 2, etc.)
setSectionSelection(byuiCourse.sections);

// Mostramos las secciones al cargar por primera vez
renderSections(byuiCourse.sections);

// -------------------------------
//          EVENT LISTENERS
// -------------------------------

// Cuando se le da click al botón de INSCRIBIR
document.querySelector("#enrollStudent").addEventListener("click", function () {

  // Obtiene el número de sección seleccionado en el <select>
  const sectionNum = document.querySelector("#sectionNumber").value;

  // Llama al método que INSCRIBE alumnos
  byuiCourse.changeEnrollment(sectionNum);

  // Actualiza la pantalla mostrando los nuevos números
  renderSections(byuiCourse.sections);
});

// Cuando se le da click al botón de DAR DE BAJA
document.querySelector("#dropStudent").addEventListener("click", function () {

  // Igual que arriba: obtenemos la sección seleccionada
  const sectionNum = document.querySelector("#sectionNumber").value;

  // Llamamos al método que RESTA inscritos
  byuiCourse.dropEnrollment(sectionNum);

  // Actualizamos la pantalla
  renderSections(byuiCourse.sections);
});
