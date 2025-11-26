// ----------------------------------------------
// 1. Seleccionar los elementos del DOM
// ----------------------------------------------
// Vamos a manipular estos elementos después de obtener el clima,
// así que los guardamos en constantes.
const currentTemp = document.querySelector('#current-temp');  // Donde irá la temperatura
const weatherIcon = document.querySelector('#weather-icon');  // <img> para el icono
const captionDesc = document.querySelector('figcaption');     // Texto del clima (descripción)


// ----------------------------------------------
// 2. Construir la URL de la API
// ----------------------------------------------
// Esta URL es la que pide OpenWeatherMap para consultar el clima actual.
// Usamos:
//  - lat=49.75  (Trier, Alemania)
//  - lon=6.64
//  - units=metric  (°C)
//  - appid=TU_API_KEY
//
// OJO: Sustituye TU_API_KEY por tu clave real de OpenWeatherMap.
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=TU_API_KEY`;


// ----------------------------------------------
// 3. Función que llama a la API — apiFetch()
// ----------------------------------------------
// Esta función se conecta al servidor, baja los datos y los convierte a JSON.
// Usamos async/await para que el código sea más claro.
async function apiFetch() {
  try {
    // Hacemos la petición HTTP GET a la URL.
    const response = await fetch(url);

    // Si todo salió bien (código 200 OK)...
    if (response.ok) {
      // Convertimos la respuesta a JSON (objeto de JS).
      const data = await response.json();

      // Mostramos los datos en la consola (esto sirve para ver toda la info cruda).
      console.log("Datos completos de la API:", data);

      // Llamamos a la función que muestra los datos en pantalla.
      displayResults(data);

    } else {
      // Si la API regresó error (401, 404, etc.), mostramos qué pasó.
      throw Error(await response.text());
    }

  } catch (error) {
    // Aquí entramos si hay un error de conexión o algo inesperado.
    console.log("ERROR en apiFetch:", error);
  }
}


// ----------------------------------------------
// 4. Función displayResults() — Mostrar el clima en pantalla
// ----------------------------------------------
// Esta función recibe los datos ya procesados y los pone en el HTML.
function displayResults(data) {

  // ------------------------------------------
  // TEMPERATURA
  // data.main.temp → número en °C
  // ------------------------------------------
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
}
