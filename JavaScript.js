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

function renderTasks() {
    const dueTaskList = document.getElementById('dueTaskList');
    const todayTaskList = document.getElementById('todayTaskList');
    const upcomingTaskList = document.getElementById('upcomingTaskList');

    dueTaskList.innerHTML = '';
    todayTaskList.innerHTML = '';
    upcomingTaskList.innerHTML = '';

    const tasks = getTasksFromLocalStorage();
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    tasks.forEach((taskObj, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const taskInfo = document.createElement('span');
        taskInfo.innerHTML = `${taskObj.date}: ${taskObj.task} at <strong>${formatTime(taskObj.time)}</strong>`;
        taskItem.appendChild(taskInfo);

        // Categorize tasks based on their date
        if (taskObj.date < today) {
            dueTaskList.appendChild(taskItem);
        } else if (taskObj.date === today) {
            todayTaskList.appendChild(taskItem);
        } else {
            upcomingTaskList.appendChild(taskItem);
        }
    });
}