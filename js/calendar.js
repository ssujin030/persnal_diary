const calendarContainer = document.getElementById("calendar-container");
const nextButton = document.getElementById("next-button");

const months = [
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

let currentMonthIndex = 0;

function createCalendar(month, year) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const monthDiv = document.createElement("div");
  monthDiv.className = "month";

  const monthNameDiv = document.createElement("div");
  monthNameDiv.className = "month-name";
  monthNameDiv.textContent = months[month];
  monthDiv.appendChild(monthNameDiv);

  const daysDiv = document.createElement("div");
  daysDiv.className = "days";

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  daysOfWeek.forEach((dayOfWeek) => {
    const dayOfWeekDiv = document.createElement("div");
    dayOfWeekDiv.className = "day";
    dayOfWeekDiv.textContent = dayOfWeek;
    daysDiv.appendChild(dayOfWeekDiv);
  });

  for (let day = 1; day <= lastDay.getDate(); day++) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.textContent = day;
    daysDiv.appendChild(dayDiv);
  }

  monthDiv.appendChild(daysDiv);
  calendarContainer.appendChild(monthDiv);
}

function updateCalendar() {
  calendarContainer.innerHTML = "";

  for (let i = currentMonthIndex; i < currentMonthIndex + 4; i++) {
    const monthIndex = i % 12;
    createCalendar(monthIndex, 2023);
  }
}

nextButton.addEventListener("click", () => {
  currentMonthIndex += 4;
  updateCalendar();
});

updateCalendar();
