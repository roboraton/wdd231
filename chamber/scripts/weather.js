const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");
const forecastContainer = document.querySelector("#forecast");

const LAT = 19.0433;
const LON = -98.2019;
const API_KEY = "TU_API_KEY";

const weatherURL =
  `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&lang=en&appid=${API_KEY}`;
const forecastURL =
  `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=metric&lang=en&appid=${API_KEY}`;

async function apiFetch() {
  try {
    const weatherResponse = await fetch(weatherURL);
    const forecastResponse = await fetch(forecastURL);

    if (!weatherResponse.ok || !forecastResponse.ok) throw new Error();

    const weatherData = await weatherResponse.json();
    const forecastData = await forecastResponse.json();

    displayCurrentWeather(weatherData);
    displayForecast(forecastData);

  } catch (err) {
    console.log("Weather unavailable:", err);
  }
}

function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}°C`;
  const icon = data.weather[0].icon;
  const desc = data.weather[0].description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherIcon.alt = desc;
  captionDesc.textContent = desc;
}

function displayForecast(data) {
  const days = {};
  data.list.forEach(entry => {
    const date = entry.dt_txt.split(" ")[0];
    if (!days[date]) days[date] = [];
    days[date].push(entry);
  });

  const keys = Object.keys(days).slice(1, 4);
  forecastContainer.innerHTML = "";

  keys.forEach(key => {
    const entries = days[key];
    const pick = entries.reduce((a, b) => {
      const hA = Math.abs(new Date(a.dt_txt).getHours() - 12);
      const hB = Math.abs(new Date(b.dt_txt).getHours() - 12);
      return hA < hB ? a : b;
    });

    const dayName = new Date(pick.dt_txt).toLocaleDateString("en-US", { weekday: "short" });
    const temp = Math.round(pick.main.temp);
    const desc = pick.weather[0].main;

    const card = document.createElement("div");
    card.classList.add("forecast-card");
    card.innerHTML = `
      <p class="day">${dayName}</p>
      <p class="temp">${temp}°C</p>
      <p class="desc">${desc}</p>
    `;
    forecastContainer.appendChild(card);
  });
}

apiFetch();
