import { createProject, getProject } from './create-project'
import { isToday, isAfter } from 'date-fns'
import Events from './events'
import { auth, db } from "./index";
import { ref, onValue } from "firebase/database";

Events.sideBarItemsEvent()

const task = document.querySelector('.tasks')

const taskHeaderText = document.querySelector('#task-header > h2')
let sideBarItems = document.querySelectorAll('.side-bar div:first-child a, .side-bar #projects a')

taskHeaderText.innerHTML = 'Today'
sideBarItems[1].classList.add('active')

Events.homeBtnEvent();

Events.menuBtnEvent();

const newTask = document.getElementById('new-task')
const newProject = document.getElementById('new-project')
const overlay = document.querySelector('.overlay')
const newTaskWindow = document.querySelector('#new-task > form')
const btnAdd = document.getElementById('btn-add')
const btnEdit = document.getElementById('btn-edit')


Events.addTaskBtnEvent();


export const closeTask = () => {
    btnAdd.classList.add('hide')
    btnEdit.classList.add('hide')
    overlay.classList.add('hide')
    newTaskWindow.classList.add('hide')
    projectForm.classList.add('hide');
    newTask.classList.add('hide')
    newProject.classList.add('hide')
}

Events.btnCancelEvent();
Events.btnCloseEvent();
Events.overlayEvent();

// código duplicado - arreglar
export const loadTasks = () => {

    const user = auth.currentUser;
    if (user !== null){
        const tasksRef = ref(db, 'tasks');
        onValue(tasksRef, (snapshot) => {
            const tasks = snapshot.val();
            if (tasks) {
              
              let taskContent = Object.keys(tasks).reduce((acc, taskId) => {
                const task = tasks[taskId];
                
                const { title, description, dueDate, dueTime, priority, project, checklist } = task;
        
                if (
                  taskHeaderText.innerHTML.trim() === 'Inbox' && checklist === false ||
                  taskHeaderText.innerHTML.trim() === 'Today' && isToday(new Date(dueDate)) ||
                  taskHeaderText.innerHTML.trim() === 'Upcoming' && isAfter(new Date(dueDate), new Date()) ||
                  taskHeaderText.innerHTML.trim() === 'Finished not deleted' && checklist === true ||
                  taskHeaderText.innerHTML.trim() === project
                ) {
                  acc += `
                    <div class="task" data-task="${taskId}">
                      <div class="d-flex ${checklist ? 'completed-task' : ''}">
                        <div class="d-flex">
                          <div class="check-btn">
                            ${showChecked(checklist, taskId)}
                          </div>
                          <div>
                            ${title}
                          </div>
                        </div> 
                        <div>
                          ${downArrow(taskId)}
                        </div>
                        <div class="d-flex mod-btns">    
                          ${editSvg(taskId)}
                          ${showPriority(priority)}
                          ${trashSvg(taskId)}
                        </div>
                      </div>
                      <div class="display-date">
                        ${dueDate} at ${dueTime}
                      </div>
                      <div class="task-description hide">
                        ${description}
                      </div>
                    </div> 
                  `
                }
                return acc;
              }, '');
              task.innerHTML = taskContent;
              Events.clickOnTaskEvent();
              Events.taskStateBtnEvent();
            }else task.innerHTML = ''
        });
    }
    
    else if(window.localStorage.getItem('task')){
        let taskStored = JSON.parse(window.localStorage.getItem('task'))
        let taskContent = taskStored.reduce((acc, task, i) => {
           
            let {title, description, dueDate, dueTime, priority, project, checklist} = task
            if(

                taskHeaderText.innerHTML.trim() === 'Inbox' && checklist === false ||
                taskHeaderText.innerHTML.trim() === 'Today' && isToday(new Date(dueDate)) ||
                taskHeaderText.innerHTML.trim() === 'Upcoming' && isAfter(new Date(dueDate), new Date()) ||
                taskHeaderText.innerHTML.trim() === 'Finished not deleted' && checklist === true ||
                taskHeaderText.innerHTML.trim() === project
    
            ){

                acc += `
                <div class="task" data-task="${i}">
                        <div class="d-flex  ${checklist ? `completed-task`: ``}">
                            <div class="d-flex">
                                <div class="check-btn">
                                    ${showChecked(checklist, i)}
                                </div>
                                <div>
                                    ${title}
                                </div>
                            </div> 
                            <div>
                                ${downArrow(i)}
                            </div>
                            <div class="d-flex mod-btns">    
                            ${editSvg(i)}
                            ${showPriority(priority)}
                            ${trashSvg(i)}
                            </div>
                            </div>
                            <div class="display-date">
                            ${dueDate} at ${dueTime}
                            </div>
                            <div class="task-description hide">
                                ${description}
                            </div>
                </div> `
            }
            return acc
        }, '')

        task.innerHTML = taskContent;
        
        Events.clickOnTaskEvent();
        Events.taskStateBtnEvent();
        
    }

    Events.editEventListener();
    Events.deleteEventListener();
}

const projectsDiv = document.getElementById('projects')
const projectsOptions = document.getElementById('project')

export const loadProjects = async () => {
    projectsDiv.innerHTML = ''
    projectsOptions.innerHTML = `<option value="" selected disabled>Select Project</option>`
    let projects = await getProject()

    if (typeof projects === "object")  projects =  Object.values(projects)
    
    projects.forEach(proj => {
        projectsDiv.innerHTML += `<a href=""><div class="proj-marc">${proj}</div></a>`
        projectsOptions.innerHTML += `<option value="${proj}">${proj}</option>`
    })
    sideBarItems = document.querySelectorAll('.side-bar div:first-child a, .side-bar #projects a')
    console.log(sideBarItems)
    Events.sideBarItemsEvent();
}

Events.btnEditEvent();

const showPriority = priority => {
    let displayPriority = `${priority==='high'? `<svg style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="red" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>`: (priority==='middle'? `<svg style="width:20px;height:20px" viewBox="0 0 24 24">
<path fill="orange" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>` : `<svg style="width:20px;height:20px" viewBox="0 0 24 24">
<path fill="green" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>`)}`
    return displayPriority
}

const showChecked = (checklist, i) => {
  console.log(checklist)
    let displayChecked = `<svg class="task-state" data-state="${i}" style="width:16px;height:16px" viewBox="0 0 24 24"> ${checklist ? `
        <path fill="green" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
        </svg>` : `
            <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
        `}</svg>`
    return displayChecked
}

const editSvg = i => {
    return `<svg class="edit-btn" data-task="${i}" style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.11 2.9 18 4 18H8L12 22L16 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M9.08 15H7V12.91L13.17 6.72L15.24 8.8L9.08 15M16.84 7.2L15.83 8.21L13.76 6.18L14.77 5.16C14.97 4.95 15.31 4.94 15.55 5.16L16.84 6.41C17.05 6.62 17.06 6.96 16.84 7.2Z" />
</svg>`
}

const trashSvg = i => {
    return `<svg class="delete-btn" data-delete="${i}" style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
</svg>`
}


const downArrow = i => {
    return`<svg class="down-arrow" data-arrow="${i}" style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
</svg>`
}

const projectForm = document.getElementById('project-form')

Events.addProjBtnEvent()
Events.addTheProjBtnEvent()

