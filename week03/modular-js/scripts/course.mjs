// course.mjs

// Este objeto contiene TODA la información del curso:
// - código
// - título
// - secciones disponibles
// - métodos para inscribir y dar de baja alumnos
const byuiCourse = {
  code: "WDD 231",
  title: "JavaScript ES Modules",

  // Aquí están las secciones del curso con:
  // id = número de sección
  // enrolled = alumnos inscritos
  // capacity = cupo máximo
  sections: [
    { id: 1, enrolled: 25, capacity: 30 },
    { id: 2, enrolled: 28, capacity: 30 },
  ],

  // Método para INSCRIBIR a un alumno en una sección
  changeEnrollment(sectionNumber) {
    // Busca la sección cuyo id coincida con el número dado
    const section = this.sections.find(s => s.id == sectionNumber);

    // Si no existe, no hace nada
    if (!section) return;

    // Aumenta el número de inscritos
    section.enrolled++;
  },

  // Método para DAR DE BAJA a un alumno
  dropEnrollment(sectionNumber) {
    const section = this.sections.find(s => s.id == sectionNumber);
    if (!section) return;

    section.enrolled--;
  }
};

// Exportamos el objeto como DEFAULT porque este módulo
// solo contiene una cosa principal
export default byuiCourse;
