const LOCAL_STORAGE_KEY = 'toDoTasks';

const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
const timeInput = document.getElementById('timeInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const task = taskInput.value.trim();
    const date = dateInput.value;
    const time = timeInput.value;

    if (!task || !date || !time) {
        showMessage('Please fill in all fields');
        return;
    }

    const tasks = getTasksFromLocalStorage();
    tasks.push({ task, date, time });
    saveTasksToLocalStorage(tasks);
    clearInputs();
    renderTasks();
}

function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

function saveTasksToLocalStorage(tasks) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
    renderTasks();
}

function clearInputs() {
    taskInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
}

function formatTime(time) {
    let [hour, minute] = time.split(':');
    let period = 'AM';
    hour = parseInt(hour);

    if (hour >= 12) {
        period = 'PM';
        if (hour > 12) {
            hour -= 12;
        }
    } else if (hour === 0) {
        hour = 12;
    }

    return `${hour}:${minute} ${period}`;
}