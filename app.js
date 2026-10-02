const input = document.getElementById("input");
const ul = document.getElementById("ul");
const form = document.getElementById("todoForm");
const emptyMessage = document.getElementById("emptyMessage");

let todos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const todoText = input.value.trim();

  if (todoText === "") {
    return;
  }

  todos.push(todoText);

  input.value = "";

  showTodo();
});

function showTodo() {
  ul.innerHTML = "";

  emptyMessage.style.display = todos.length === 0 ? "block" : "none";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      deleteTodo(index);
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });
}

function deleteTodo(index) {
  todos.splice(index, 1);

  showTodo();
}

showTodo();