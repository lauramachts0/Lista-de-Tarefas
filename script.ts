function addTask() {
  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  const taskList = document.getElementById("taskList");

  if (!taskInput || !taskList) {
    console.error("Element not found");
    return;
  }

  if (taskInput.value === "") {
    alert("Por favor, insira uma tarefa.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskInput.value;
  li.onclick = function() {
    this.classList.toggle("completed");
  };

  if (taskList) {
    taskList.appendChild(li);
  }

  taskInput.value = "";
}

const addButton = document.getElementById("addButton");
if (addButton) {
  addButton.addEventListener("click", addTask);
} else {
  console.error("Button not found");
}
