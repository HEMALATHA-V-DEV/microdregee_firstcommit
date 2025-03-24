document.getElementById("todo-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const taskInput = document.getElementById("task");
    const task = taskInput.value;
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("todo-list").appendChild(li);
    taskInput.value = "";
});