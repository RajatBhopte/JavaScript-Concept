document.getElementById("AddTaskButton").addEventListener("click", addTask);

document.getElementById("clearButton").addEventListener("click", clearTasks);

function addTask() {
  const input = document.getElementById("taskInput");

  const tasktext = input.value.trim();
  if (tasktext === " ") {
    alert("Please Enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = tasktext;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("clearButton");

  delBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
function clearTasks() {
  document.getElementById("taskList").innerHTML = "";
}
