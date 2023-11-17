
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');


function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return; 
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
}

// Add a task when the button is clicked

addTaskButton.addEventListener('click', addTask);


// Add a task when the Enter key is pressed. use keydown event

taskInput.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        addTask();
    }
});
