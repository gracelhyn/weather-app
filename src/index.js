function getCity(e) {
  e.preventDefault();
  let city = document.querySelector("#input-city");
  let displayCity = document.querySelector("#city");
  displayCity.innerHTML = city.value;
}
let cityForm = document.querySelector("#search-city-form");
cityForm.addEventListener("submit", getCity);

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
