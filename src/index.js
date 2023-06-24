function searchCity(city) {
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
