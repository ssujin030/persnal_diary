const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

let todos = [];

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function delItem(event) {
  const target = event.target.parentElement;

  todos = todos.filter((todo) => todo.id !== parseInt(target.id));
  save();
  target.remove();
}

function addItem(todo) {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");

    button.innerText = "삭제";
    button.addEventListener("click", delItem);
    span.innerText = todo.text;

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
}

function handler(event) {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
}

function init() {
  const userTodos = JSON.parse(localStorage.getItem("todos"));

  if (userTodos) {
    userTodos.forEach((todo) => addItem(todo));
    todos = userTodos;
  }
}

init();
form.addEventListener("submit", handler);
