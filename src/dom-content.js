import { arrTemporal } from './create-new'
import { loadEdition } from './edit-task'
import { valuesEdit } from './task-form'


const task = document.querySelector('.tasks')

const content = document.getElementById('content')
const menuBtn = document.getElementById('menu')
const homeBtn = document.getElementById('home')
const sideBar = document.querySelector('.side-bar')

const taskHeaderText = document.querySelector('#task-header > h2')
const sideBarItems = document.querySelectorAll('.side-bar a')

taskHeaderText.innerHTML = 'Today'
sideBarItems[1].classList.add('active')

homeBtn.addEventListener('click', e => {
    e.preventDefault();
    sideBarItems.forEach(i => {
        i.classList.remove('active')
    })
    sideBarItems[1].classList.add('active')
    taskHeaderText.innerHTML = 'Today'
})

sideBarItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        sideBarItems.forEach(i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
        taskHeaderText.innerHTML = item.querySelector('div').textContent
    })
})

menuBtn.addEventListener('click', e => {
    e.preventDefault();
    if(sideBar.classList.contains('hide')){
        content.style.gridTemplateColumns = "300px 1fr";
        sideBar.classList.remove('hide')
    }else{
        content.style.gridTemplateColumns = "0 1fr";
        sideBar.classList.add('hide')
    }
})


const overlay = document.querySelector('.overlay')
const addTaskBtn = document.getElementById('add-task')
const newTaskWindow = document.querySelector('#new-task > form')
const btnCancel = document.getElementById('btn-cancel')


addTaskBtn.addEventListener('click', e => {
    e.preventDefault();
    overlay.classList.remove('hide')
    newTaskWindow.classList.remove('hide')
})


export const closeNewTask = () => {
    overlay.classList.add('hide')
    newTaskWindow.classList.add('hide')
}

btnCancel.addEventListener('click', e => { 
        e.preventDefault();
        closeNewTask() 
    }
)

overlay.addEventListener('click', e => { 
        e.preventDefault();
        closeNewTask() 
    }
)

export const loadTasks = () => {
    if(window.localStorage.getItem('task')){
        let taskStored = JSON.parse(window.localStorage.getItem('task'))
        let taskContent = taskStored.reduce((acc, task, i) => {
            let {title, desciption, dueDate, priority, project, checklist} = task
            acc += `
            <div class="task" data-task="${i}">
                    <div class="d-flex  ${checklist ? `completed-task`: ``}">
                        <div class="d-flex">
                            <div class="check-btn">
                                ${showChecked(checklist)}
                            </div>
                            <div>
                                ${title}
                            </div>
                        </div> 
                        <div class="d-flex mod-btns">    
                            ${editSvg(i)}
                            ${showPriority(priority)}
                        </div>
                    </div>
                <div class="display-date">
                    ${dueDate}
                </div>
            </div> `
            return acc
        }, '')
        task.innerHTML = taskContent;
        
    }

    editEventListener();
}


const editEventListener = () => {
    const editBtns = document.querySelectorAll('svg.edit-btn')
    editBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            overlay.classList.remove('hide')
            newTaskWindow.classList.remove('hide')
            let taskInfo = loadEdition(btn.dataset.task)
            console.log(taskInfo)
            valuesEdit(taskInfo)
            /*----------------------------------------------------------------------------------------------------------*/
        })
    })
}

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

const showChecked = checklist => {
    let displayChecked = `${checklist ? `<svg style="width:16px;height:16px" viewBox="0 0 24 24">
        <path fill="green" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
        </svg>` : `<svg style="width:16px;height:16px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
        </svg>`}`
    return displayChecked
}

const editSvg = i => {
    return `<svg class="edit-btn" data-task="${i}" style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.11 2.9 18 4 18H8L12 22L16 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M9.08 15H7V12.91L13.17 6.72L15.24 8.8L9.08 15M16.84 7.2L15.83 8.21L13.76 6.18L14.77 5.16C14.97 4.95 15.31 4.94 15.55 5.16L16.84 6.41C17.05 6.62 17.06 6.96 16.84 7.2Z" />
</svg>`
}