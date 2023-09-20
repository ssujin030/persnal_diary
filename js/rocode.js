// 검색 기능
function searchMemos() {
  const searchDate = document.getElementById("searchDate").value;
  const memoContainer = document.getElementById("memoContainer");

  if (!searchDate) {
    alert("날짜를 선택하세요.");
    memoContainer.innerHTML = "";
    return;
  }

  loadMemos(searchDate);
}

// 메모 불러오기 및 표시
function loadMemos(searchDate) {
  const memoContainer = document.getElementById("memoContainer");
  memoContainer.innerHTML = "";

  let foundMemos = false;

  // 저장된 메모를 검색
  for (let i = 0; i < localStorage.length; i++) {
    const memoDate = localStorage.key(i);
    const memoData = JSON.parse(localStorage.getItem(memoDate));

    if (memoDate === searchDate) {
      const memoContent = memoData.content;
      const memoElement = document.createElement("div");
      memoElement.classList.add("memo"); // CSS 스타일링을 위한 클래스 추가
      memoElement.innerHTML = `
        <p>${memoContent}</p>
        <button onclick="deleteMemo('${memoDate}')">Delete</button>
      `; // 삭제 버튼 추가
      memoContainer.appendChild(memoElement);
      foundMemos = true;
    }
  }

  if (!foundMemos) {
    memoContainer.innerHTML = "<p class='no-results'>No</p>";
  }
}

// 삭제 버튼을 눌렀을 때 실행될 함수
function deleteMemo(date) {
  if (confirm("정말로 이 메모를 삭제하시겠습니까?")) {
    // 해당 메모 엘리먼트를 찾아 숨기거나 삭제
    const memoContainer = document.getElementById("memoContainer");
    const memoElements = memoContainer.querySelectorAll(".memo");

    memoElements.forEach((memoElement) => {
      const memoDate = memoElement.getAttribute("data-memo-date");

      if (memoDate === date) {
        // 숨기기
        memoElement.style.display = "none";
        // 또는 삭제
        // memoElement.remove();
      }
    });

    // 로컬 스토리지에서 메모 삭제
    localStorage.removeItem(date);

    // recode.html 페이지로 돌아가기
    window.location.href = "recode.html";
  }
}

// CSS 스타일을 동적으로 생성하는 함수
function applyStyles(element) {
  element.style.color = "rgb(201, 102, 102)";
  element.style.backgroundColor = "white";
  element.style.padding = "1px";
  element.style.border = "2px solid rgb(153, 117, 135)";
  element.style.borderRadius = "5px";
  element.style.fontSize = "16px";
  element.style.boxSizing = "border-box";
  element.style.overflow = "auto";
  element.style.height = "400px";
  element.style.width = "600px";
}

// loadMemos 함수 내에서 CSS 스타일을 적용하는 예시
function loadMemos(searchDate) {
  const memoContainer = document.getElementById("memoContainer");
  memoContainer.innerHTML = "";

  let foundMemos = false;

  for (let i = 0; i < localStorage.length; i++) {
    const memoDate = localStorage.key(i);
    const memoData = JSON.parse(localStorage.getItem(memoDate));

    if (memoDate === searchDate) {
      const memoContent = memoData.content;

      // 동적으로 div 엘리먼트 생성
      const memoElement = document.createElement("div");
      memoElement.classList.add("memo");

      // applyStyles 함수로 스타일 적용
      applyStyles(memoElement);

      // 내용 추가
      memoElement.innerHTML = `
        <p>${memoContent}</p>
        <button onclick="deleteMemo('${memoDate}')">Delete</button>
      `;

      memoContainer.appendChild(memoElement);
      foundMemos = true;
    }
  }
}
