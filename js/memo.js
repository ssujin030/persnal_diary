const saveMemoButton = document.getElementById("saveMemo");
const memoInputElement = document.getElementById("memoInput");
const memoListElement = document.getElementById("memoList");

saveMemoButton.addEventListener("click", function () {
  const memoText = memoInputElement.value;
  if (memoText.trim() !== "") {
    createMemo(memoText);
    memoInputElement.value = "";
  }
});

function createMemo(text) {
  const memoElement = document.createElement("div");
  memoElement.className = "memo";
  memoElement.innerHTML = `
    <p>${text}</p>
    <button class="deleteMemo">삭제</button>
  `;
  memoListElement.appendChild(memoElement);

  const deleteButton = memoElement.querySelector(".deleteMemo");
  deleteButton.addEventListener("click", function () {
    memoListElement.removeChild(memoElement);
  });
}
