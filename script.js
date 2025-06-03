 const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = taskText;

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "edit-btn";
      editBtn.onclick = function () {
        const newTask = prompt("Edit task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
          span.textContent = newTask.trim();
        }
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = function () {
        taskList.removeChild(li);
      };

      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      taskInput.value = ""; // Clear input
    }