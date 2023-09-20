const calendarBody = document.getElementById("calendarBody");
const currentMonthYear = document.getElementById("currentMonthYear");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function renderCalendar() {
  calendarBody.innerHTML = "";
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const monthNames = [
    "1M",
    "2M",
    "3M",
    "4M",
    "5M",
    "6M",
    "7M",
    "8M",
    "9M",
    "10M",
    "11M",
    "12M",
  ];

  currentMonthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  let date = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < firstDay) {
        cell.textContent = "";
      } else if (date > daysInMonth) {
        cell.textContent = "";
      } else {
        cell.textContent = date;
        date++;

        if (
          currentMonth === today.getMonth() &&
          currentYear === today.getFullYear() &&
          date - 1 === today.getDate()
        ) {
          cell.classList.add("today");
        }
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
}

renderCalendar();
function saveMemo() {
  const memoContent = document.getElementById("memoContent").value;
  const memoDate = document.getElementById("memoDate").value;

  if (memoContent.trim() === "") {
    alert("메모 내용을 입력하세요.");
    return;
  }

  const memo = {
    content: memoContent,
    date: memoDate,
  };

  // 이부분은 브라우저의 Local Storage에 저장하는 코드입니다.
  localStorage.setItem(memoDate, JSON.stringify(memo));

  alert("메모가 저장되었습니다.");
}
function saveMemo() {
  const memoContent = document.getElementById("memoContent");
  const memoDate = document.getElementById("memoDate");

  // 입력된 내용을 가져옴
  const content = memoContent.value;
  const date = memoDate.value;

  if (content.trim() === "") {
    alert("메모 내용을 입력하세요.");
    return;
  }

  const memo = {
    content: content,
    date: date,
  };

  // 이부분은 브라우저의 Local Storage에 저장하는 코드입니다.
  localStorage.setItem(date, JSON.stringify(memo));

  alert("메모가 저장되었습니다.");
}
function saveMemo() {
  const memoContent = document.getElementById("memoContent");
  const memoDate = document.getElementById("memoDate");

  // 입력된 내용을 가져옴
  const content = memoContent.value;
  const date = memoDate.value;

  if (content.trim() === "") {
    alert("메모 내용을 입력하세요.");
    return;
  }

  const memo = {
    content: content,
    date: date,
  };

  // 이부분은 브라우저의 Local Storage에 저장하는 코드입니다.
  localStorage.setItem(date, JSON.stringify(memo));

  alert("메모가 저장되었습니다.");

  // 메모가 저장된 후 입력 필드 초기화
  memoContent.value = "";
  memoDate.value = "";
}
