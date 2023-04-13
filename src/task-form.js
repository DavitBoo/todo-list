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
    let {title, description, defautlDate, priority, project, checklist} = task

    taskNameInput.value = title;
    taskDescriptionInput.value = description;
    dueDateInput.value = defautlDate;
    projectSelect.value = project
    prioritySelect.value = priority;
    taskDoneCheckbutton.checked = checklist;
     
}

export const createIt = () => {
    taskName = taskNameInput.value;
    taskDescription = taskDescriptionInput.value;
    dueDate = dueDateInput.value;
    project = projectSelect.value;
    priority = prioritySelect.value;
    taskDone = taskDoneCheckbutton.checked;
    
    return new Task(taskName, taskDescription, dueDate, priority, project, taskDone);
}