import Task from "./task";

const taskNameInput = document.getElementById('task-name')
const taskDescriptionInput = document.getElementById('task-description')
const dueDateInput = document.getElementById('dueDate')
const projectSelect = document.getElementById('project')
const prioritySelect = document.getElementById('priority')

taskName = taskNameInput.value;
taskDescription = taskDescriptionInput.value;
dueDate = dueDateInput.value;
project = projectSelect.value;
priority = prioritySelect.value;

let newTask = new Task(taskName, taskDescription, dueDate);