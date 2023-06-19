function getToday(currentDate) {
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

  let today = days[currentDate.getDay()];
  let displayDayTime = document.querySelector("#current-date-time");
  let currentHour = currentDate.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinute = currentDate.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }
  displayDayTime.innerHTML = `${today}, ${currentHour}:${currentMinute}`;

  let displayDate = document.querySelector("#current-day");
  let todaysDate = currentDate.getDate();
  let currentMonth = months[currentDate.getMonth()];
  let currentYear = currentDate.getFullYear();
  displayDate.innerHTML = `${todaysDate} ${currentMonth} ${currentYear}`;
}

getToday(new Date());

function submitForm(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city");
  let displayCity = document.querySelector("#display-city");
  displayCity.innerHTML = city.value;
}
let cityForm = document.querySelector("#search-city-form");

cityForm.addEventListener("submit", submitForm);

// change value of temp based on Celcius/Fahrenheit
function displayCelcius(event, unit) {
  event.preventDefault();
  let temp = document.querySelector("#temp-value");
  let celciusValue = (temp.innerHTML - 32) * (5 / 9);
  temp.innerHTML = Math.round(celciusValue);
  console.log(Math.round(celciusValue));
}
let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", displayCelcius);

function displayFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp-value");
  let fahrenheitValue = (temp.innerHTML * 9) / 5 + 32;
  temp.innerHTML = Math.round(fahrenheitValue);
  console.log(fahrenheitValue);
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheit);
