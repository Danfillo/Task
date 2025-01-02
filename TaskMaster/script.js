// Load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Clear existing tasks
  
    tasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-item");
  
      taskItem.innerHTML = `
        <h3>${task.title}</h3>
        <p><strong>Category:</strong> ${task.category}</p>
        <p><strong>Priority:</strong> ${task.priority}</p>
        <p><strong>Due Date:</strong> ${task.dueDate}</p>
        <p><strong>Description:</strong> ${task.description}</p>
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
      `;
  
      taskList.appendChild(taskItem);
    });
  }
  
  // Create a new task
  function createTask() {
    const title = document.getElementById("task-title").value;
    const category = document.getElementById("task-category").value;
    const priority = document.getElementById("task-priority").value;
    const dueDate = document.getElementById("task-due-date").value;
    const description = document.getElementById("task-description").value;
  
    // Validate the form data
    if (!title || !category || !priority || !dueDate || !description) {
      alert("Please fill in all fields.");
      return;
    }
  
    const newTask = {
      title,
      category,
      priority,
      dueDate,
      description,
    };
  
    // Save task to local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
    // Clear form inputs
    document.getElementById("task-title").value = "";
    document.getElementById("task-category").value = "";
    document.getElementById("task-priority").value = "";
    document.getElementById("task-due-date").value = "";
    document.getElementById("task-description").value = "";
  
    // Reload tasks
    loadTasks();
  }
  
  // Delete a task
  function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1); // Remove the task
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
    // Reload tasks
    loadTasks();
  }
  
  // Initialize the app by loading tasks
  loadTasks();