function searchCity(city) {
  getForecast(city);

  let apiKey = "1caa6b89633408117o3ebccdt1fcc4b9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  function showWeather(response) {
    let displayCity = document.querySelector("#city");
    displayCity.innerHTML = `${city}, ${response.data.country}`;

    celciusValue = response.data.temperature.current;
    // let currentTemp = response.data.temperature.current;
    let tempNow = document.querySelector("#temperature");
    let tempDescription = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let icon = document.querySelector("#weather-icon");

    tempNow.innerHTML = Math.round(celciusValue);
    tempDescription.innerHTML = response.data.condition.description;
    humidity.innerHTML = `Humidity: ${response.data.temperature.humidity}%`;
    wind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
    icon.setAttribute("src", response.data.condition.icon_url);
    icon.setAttribute("alt", response.data.condition.description);

    function formatDayTime(timeStamp) {
      let date = new Date(timeStamp);
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[date.getDay()];
      let hour = date.getHours();
      if (hour < 10) {
        hour = `0${hour}`;
      }
      let minute = date.getMinutes();
      if (minute < 10) {
        minute = `0${minute}`;
      }
      return `${day}, ${hour}:${minute}`;
    }

    function formatDate(timeStamp) {
      let date = new Date(timeStamp);
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let dayToday = date.getDate();
      let monthNow = months[date.getMonth()];
      let yearNow = date.getFullYear();
      return `${dayToday} ${monthNow} ${yearNow}`;
    }
    function displayToday(today) {
      let dayTime = document.querySelector("#displayDayTime");
      let displayDate = document.querySelector("#displayDate");

      dayTime.innerHTML = formatDayTime(response.data.time * 1000);
      displayDate.innerHTML = formatDate(response.data.time * 1000);
    }

    displayToday(new Date());
  }
  axios.get(apiUrl).then(showWeather);
}

function formatDay(timeStamp) {
  let date = new Date(timeStamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function getForecast(city) {
  let apiKey = "1caa6b89633408117o3ebccdt1fcc4b9";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  function displayForecast(response) {
    console.log(response.data.daily);
    let forecast = response.data.daily;
    let forecastElement = document.querySelector("#forecast");
    let forecastHTML = `<div class="row">`;
    forecast.forEach(function (forecastDay, index) {
      if (index < 6) {
        forecastHTML =
          forecastHTML +
          `
            <div class="col-2">
              <div class="weather-forecast-day">${formatDay(
                forecastDay.time
              )}</div>
              <img
                src="${forecastDay.condition.icon_url}"
                alt=""
                width="60"
              />
              <div class="weather-forecast-temp">
                <span class="fs-6">${Math.round(
                  forecastDay.temperature.maximum
                )} °C</span>
                <span class="fs-7">${Math.round(
                  (forecastDay.temperature.maximum * 9) / 5 + 32
                )} °F</span>
              </div>
            </div>
          `;
      }
    });

    forecastHTML += `</div>`;
    forecastElement.innerHTML = forecastHTML;
  }

  axios.get(apiURL).then(displayForecast);
}

function getFahrenheit(e) {
  e.preventDefault();
  let fahrenheitValue = (celciusValue * 9) / 5 + 32;
  let tempNow = document.querySelector("#temperature");
  fahrenheit.classList.add("active");
  celcius.classList.remove("active");
  tempNow.innerHTML = Math.round(fahrenheitValue);
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", getFahrenheit);

function getCelcius(e) {
  e.preventDefault();
  let tempNow = document.querySelector("#temperature");
  celcius.classList.add("active");
  fahrenheit.classList.remove("active");
  tempNow.innerHTML = Math.round(celciusValue);
}

let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", getCelcius);

let celciusValue = null;

searchCity("Manila");
function getWeatherUpdate(e) {
  e.preventDefault();
  let city = document.querySelector("#input-city");
  searchCity(city.value);
}
let cityForm = document.querySelector("#search-city-form");
cityForm.addEventListener("submit", getWeatherUpdate);
