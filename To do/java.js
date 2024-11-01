
function addTask() {
    const taskInput = document.getElementById('inp');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value === "") {
        swal("Please enter a task!", "", "warning");
    } else {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput.value} <i class="fas fa-trash" onclick="deleteTask(event)"></i>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}


function deleteTask(event) {
    const task = event.target;
    const listItem = task.parentElement;
    listItem.remove();
}


function deleteAll() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    swal("All tasks deleted!", "", "success");
}


function clickButton(event) {
    if (event.key === "Enter") {
        addTask();
    }
}
