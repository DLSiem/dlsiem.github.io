function updateClock() {
  const now = new Date();
  const daysOfWeek = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const hours = now.getHours() % 12 || 12; // Get hours in 12-hour format
  const minutes = addLeadingZero(now.getMinutes());
  const seconds = addLeadingZero(now.getSeconds());
  const ampm = now.getHours() < 12 ? "AM" : "PM";
  const date = addLeadingZero(now.getDate());
  const month = addLeadingZero(now.getMonth() + 1); // Months are 0-based
  const year = now.getFullYear();

  document.getElementById("day").textContent = dayOfWeek;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("ampm").textContent = ampm;
  document.getElementById("date").textContent = date;
  document.getElementById("month").textContent = month;
  document.getElementById("year").textContent = year;
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to update the clock

updateClock();
