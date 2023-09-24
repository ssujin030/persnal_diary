// 페이지 로드 시 저장된 데이터를 불러오고 화면에 표시합니다.
window.addEventListener("load", function () {
  const savedThisWeekData = localStorage.getItem("thisWeekData");
  if (savedThisWeekData) {
    const thisWeekData = JSON.parse(savedThisWeekData);
    // 텍스트 내용 채우기
    const memoContent = document.querySelector(".memo-content ol");
    memoContent.querySelectorAll("li").forEach((li, index) => {
      li.textContent = thisWeekData.plan[index];
    });
    // 테이블 데이터 채우기
    const tableCells = document.querySelectorAll("table td");
    tableCells.forEach((cell, index) => {
      cell.textContent = thisWeekData.tableData[index];
    });
  }
});

// 저장 버튼 클릭 시 데이터를 로컬 스토리지에 저장합니다.
function saveMemo() {
  const thisWeekData = {
    plan: [],
    tableData: [],
  };

  // 목표 입력 부분 처리
  const memoContent = document.querySelector(".memo-content ol");
  memoContent.querySelectorAll("li").forEach((li) => {
    thisWeekData.plan.push(li.textContent);
  });

  // 테이블 데이터 처리
  const tableCells = document.querySelectorAll("table td");
  tableCells.forEach((cell) => {
    thisWeekData.tableData.push(cell.textContent);
  });

  // 로컬 스토리지에 데이터 저장
  localStorage.setItem("thisWeekData", JSON.stringify(thisWeekData));
}
