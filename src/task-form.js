import Task from "./task";

const taskNameInput = document.getElementById('task-name')
const taskDescriptionInput = document.getElementById('task-description')
const dueDateInput = document.getElementById('due-date')
const projectSelect = document.getElementById('project')
const prioritySelect = document.getElementById('priority')
const taskDoneCheckbutton = document.getElementById('task-done')

let taskName = taskNameInput.value;
let taskDescription = taskDescriptionInput.value;
let dueDate = dueDateInput.value;
let project = projectSelect.value;
let priority = prioritySelect.value;
let taskDone = taskDoneCheckbutton.checked;


export const reInitValues = () => {
    taskNameInput.value = ''
    taskDescriptionInput.value = ''
    dueDateInput.value = ''
    projectSelect.value = ''
    prioritySelect.value = ''
    taskDoneCheckbutton.checked = false
}

export const valuesEdit = (task) => {
    let {title, desciption, dueDate, priority, project, checklist} = task

    taskNameInput.value = title;
    taskDescriptionInput.value = desciption;
    dueDateInput.value = dueDate;
    projectSelect.value = project
    prioritySelect.value = priority;
    taskDoneCheckbutton.checked = checklist;
     
}

export const createIt = () => {
    return new Task(taskName, taskDescription, dueDate, priority, project, taskDone);
}