const input = document.getElementById("input");
const addButton = document.getElementById("add");
const list = document.getElementById("list");

addButton.addEventListener("click", () => {
    const task = input.value;
    if (task === "") {
        return;
    }
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
});