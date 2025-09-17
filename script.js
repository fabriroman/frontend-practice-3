const input = document.getElementById("input");
const addButton = document.getElementById("add");
const list = document.getElementById("list");
const removeButton = document.getElementById("remove");

addButton.addEventListener("click", () => {
  const task = input.value;
  if (task === "") {
    return;
  }
  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  list.appendChild(li);
  input.value = "";
});

removeButton.addEventListener("click", () => {
  list.innerHTML = "";
});
