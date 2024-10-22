# To-Do-List

This is a simple To-Do List application built using HTML, CSS, and JavaScript. The application allows users to:

1.Add tasks with an associated date and time.
2.Categorize tasks into Due, Today, and Upcoming categories based on the current date.
3.Edit or delete tasks.
4.Search tasks using a search bar.
5.Persist data using localStorage so that tasks are saved even after the page reloads.

1. Adding a Task:
Inputs: Users can enter a task, select a due date, and specify a time.
Button: After filling in all fields, users click the "Add Task" button to add the task.
Validation: If any of the input fields are empty, the user is prompted to fill in all fields.
Storage: The task is saved in the browser's localStorage with the key toDoTasks.

3. Task Categories:
Tasks are divided into three categories based on the due date:

Due Tasks: Tasks with a due date earlier than today.
Today's Tasks: Tasks that are due today.
Upcoming Tasks: Tasks with a due date after today.
The renderTasks() function retrieves tasks from localStorage, checks the current date, and places each task in the appropriate category.

3. Task Management:
Each task displayed on the list comes with two buttons:

Edit: This button allows the user to edit a task. The task details are pre-filled in the input fields, and the task is temporarily removed from the list until it is updated.
Delete: This button permanently removes the task from the list and localStorage.

4. Data Persistence:
Tasks are stored locally using the browser's localStorage, ensuring that tasks remain intact even after the page is reloaded or the browser is closed. Tasks are retrieved using the getTasksFromLocalStorage() function and saved using saveTasksToLocalStorage().

5. Search Functionality:
A search bar is available at the top of the page. As the user types, the task list is filtered in real time based on whether the task's name or details contain the entered search term.

6. Time Formatting:
The formatTime() function converts the 24-hour time format (as entered by the user) into a more user-friendly 12-hour format with an AM/PM notation.

7. Message Box:
When the user makes an error (such as trying to add a task with missing details), a message box will appear to notify them of the issue. The message box automatically disappears after 3 seconds.

**Functions used:**
addTask(): Adds a new task after validation and stores it in localStorage.
getTasksFromLocalStorage(): Retrieves tasks from localStorage.
saveTasksToLocalStorage(): Saves the task list to localStorage.
renderTasks(): Displays tasks under the appropriate category based on their due date.
editTask(index): Allows editing of a task by pre-filling input fields and temporarily removing the task.
deleteTask(index): Deletes a task from the list and localStorage.
filterTasks(): Filters the tasks based on the user’s search input.
