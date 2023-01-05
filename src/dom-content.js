import { arrTemporal } from './create-new'

const task = document.querySelector('.tasks')

const content = document.getElementById('content')
const menuBtn = document.getElementById('menu')
const sideBar = document.querySelector('.side-bar')

const taskHeaderText = document.querySelector('#task-header > h2')
const sideBarItems = document.querySelectorAll('.side-bar a')

taskHeaderText.innerHTML = 'Today'
sideBarItems[1].classList.add('active')

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

const loadTasks = () => {
    let taskContent = arrTemporal.reduce((acc, task) => {
        let {title, desciption, dueDate, priority, project, checklist} = task
        acc += `
        <div class="task">
                <div class="d-flex  ${checklist ? `completed-task`: ``}">
                    <div class="d-flex">
                        <div class="check-btn">
                            ${showChecked(checklist)}
                        </div>
                        <div>
                            ${title}
                        </div>
                    </div> 
                    ${showPriority(priority)}
                </div>
            <div class="display-date">
                ${dueDate}
            </div>
        </div> `
        return acc
    }, '')
    task.innerHTML = taskContent;
}


const showPriority = priority => {
    let displayPriority = `${priority==='high'? `<svg style="width:16px;height:16px" viewBox="0 0 24 24">
    <path fill="red" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>`: (priority==='middle'? `<svg style="width:16px;height:16px" viewBox="0 0 24 24">
<path fill="orange" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>` : `<svg style="width:16px;height:16px" viewBox="0 0 24 24">
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

export default loadTasks;