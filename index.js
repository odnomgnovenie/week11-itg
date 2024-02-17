const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function () {
    const taskText = taskInput.value;
    const newTask = document.createElement('li');
    newTask.classList.add('taskLi');
    newTask.textContent = taskText;
    taskList.append(newTask);
    taskInput.value = '';

    newTask.addEventListener('click', function () {
        newTask.classList.toggle('completed');
    });
});