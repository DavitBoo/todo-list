import { closeNewTask } from "./dom-content";
import Task from "./task";


let arrTemporal = [
    {
        "title": "Telefono en modo avión",
        "desciption": "Hasta las 9 no conectar el móvil",
        "dueDate": "2023-01-31T22:44",
        "priority": "high",
        "project": "",
        "checklist": true
    },
    {
        "title": "Estirar",
        "desciption": "Estiramientos cali move",
        "dueDate": "2023-02-28T22:44",
        "priority": "middle",
        "project": "",
        "checklist": false
    },
    {
        "title": "16 min mindfullness",
        "desciption": "Estiramientos cali move",
        "dueDate": "2023-01-04T08:44",
        "priority": "low",
        "project": "",
        "checklist": false
    },
    {
        "title": "Lutheria",
        "desciption": "Una hora a mis guitarras",
        "dueDate": "2023-01-18T18:00",
        "priority": "middle",
        "project": "",
        "checklist": false
    },
    {
        "title": "Comprar toalla japonesa",
        "desciption": "",
        "dueDate": "2023-01-05T18:00",
        "priority": "low",
        "project": "",
        "checklist": false
    }
]

const taskNameInput = document.getElementById('task-name')
const taskDescriptionInput = document.getElementById('task-description')
const dueDateInput = document.getElementById('due-date')
const projectSelect = document.getElementById('project')
const prioritySelect = document.getElementById('priority')
const taskDoneCheckbutton = document.getElementById('task-done')

const btnAddTask = document.getElementById('btn-add')

btnAddTask.addEventListener('click', e => {
    e.preventDefault();
    createTask();
    closeNewTask();
})


const createTask = () =>  {
    
    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    let dueDate = dueDateInput.value;
    let project = projectSelect.value;
    let priority = prioritySelect.value;
    let taskDone = taskDoneCheckbutton.checked;
    
    let newTask = new Task(taskName, taskDescription, dueDate, priority, project, taskDone);

    if(window.localStorage.getItem('task')){
        console.log('hey')
        let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
        storagedTasks.push(newTask)
        localStorage.setItem('task', JSON.stringify(storagedTasks))
    }else{
        localStorage.setItem('task', JSON.stringify([newTask]))

    }

    
    arrTemporal.push(newTask);

    console.log(arrTemporal)
}


export {createTask, arrTemporal};

