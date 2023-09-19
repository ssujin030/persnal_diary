document.addEventListener("DOMContentLoaded", function () {
  const calendarBody = document.querySelector("tbody");
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(year, month);
    let date = 1;

    for (let row = 0; row < 6; row++) {
      const newRow = document.createElement("tr");
      for (let col = 0; col < 7; col++) {
        if (row === 0 && col < firstDay) {
          const cell = document.createElement("td");
          newRow.appendChild(cell);
        } else if (date > totalDays) {
          break;
        } else {
          const cell = document.createElement("td");
          cell.textContent = date;
          newRow.appendChild(cell);
          if (
            year === currentYear &&
            month === currentMonth &&
            date === currentDate
          ) {
            cell.classList.add("today");
          }
          date++;
        }
      }
      calendarBody.appendChild(newRow);
    }
  }

  generateCalendar(currentYear, currentMonth);
});
