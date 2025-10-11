const monthYear = document.getElementById("monthYear");
const calendarBody = document.querySelector("#calendarTable tbody");
let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayIndex = firstDay.getDay();
  const lastDate = lastDay.getDate();

  monthYear.textContent = date.toLocaleString("pt-BR", { month: "long", year: "numeric" });
  calendarBody.innerHTML = "";

  let day = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      if (i === 0 && j < firstDayIndex) {
        cell.textContent = "";
      } else if (day > lastDate) {
        break;
      } else {
        cell.textContent = day;
        if (day === new Date().getDate() && month === new Date().getMonth()) {
          cell.style.background = "#ff7300";
          cell.style.color = "white";
        }
        day++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);