function getWeatherUpdate(e) {
  e.preventDefault();
  let city = document.querySelector("#input-city");

  let apiKey = "1caa6b89633408117o3ebccdt1fcc4b9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${apiKey}`;
  function showWeather(response) {
    let displayCity = document.querySelector("#city");
    displayCity.innerHTML = `${city.value}, ${response.data.country}`;

    let currentTemp = response.data.temperature.current;
    console.log(response);
    let tempNow = document.querySelector("#temperature");
    tempNow.innerHTML = Math.round(currentTemp);

    let tempDescription = document.querySelector("#description");
    tempDescription.innerHTML = response.data.condition.description;
    // console.log(response.data.main.temp);
  }
  axios.get(apiUrl).then(showWeather);
}
let cityForm = document.querySelector("#search-city-form");
cityForm.addEventListener("submit", getWeatherUpdate);

function displayToday(today) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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

  let day = days[today.getDay()];
  let hour = today.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = today.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  let dayTime = document.querySelector("#displayDayTime");
  dayTime.innerHTML = `${day}, ${hour}:${minute} PM`;

  let displayDate = document.querySelector("#displayDate");
  let dayToday = today.getDate();
  let monthNow = months[today.getMonth()];
  let yearNow = today.getFullYear();

  displayDate.innerHTML = `${dayToday} ${monthNow} ${yearNow}`;
}

displayToday(new Date());
