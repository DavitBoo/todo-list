import { deleteTask } from "./delete-task";
import { closeTask, loadTasks } from "./dom-content";
import { loadEdition, writeEdition } from "./edit-task";
import { createIt, reInitValues, valuesEdit } from "./task-form";


const Events = (() => {

        const homeBtn = document.getElementById('home')
        const taskHeaderText = document.querySelector('#task-header > h2')
        let sideBarItems = document.querySelectorAll('.side-bar div:first-child a, .side-bar #projects a')
        
        const homeBtnEvent = () => {
        homeBtn.addEventListener('click', e => {
            e.preventDefault();
            sideBarItems.forEach(i => {
                i.classList.remove('active')
            })
            sideBarItems[1].classList.add('active')
            taskHeaderText.innerHTML = 'Today'
            loadTasks()
        })
    }


    const sideBarItemsEvent = () => {
        sideBarItems = document.querySelectorAll('.side-bar div:first-child a, .side-bar #projects a')
        sideBarItems.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                sideBarItems.forEach(i => {
                    i.classList.remove('active')
                })
                item.classList.add('active')
                taskHeaderText.innerHTML = item.querySelector('div').textContent
                loadTasks();
            })
        })

    }


    const menuBtn = document.getElementById('menu')
    const sideBar = document.querySelector('.side-bar')

    const menuBtnEvent = () => {
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
        
    }


    const btnAdd = document.getElementById('btn-add')
    const overlay = document.querySelector('.overlay')
    const newTaskWindow = document.querySelector('#new-task > form')
    const newTask = document.getElementById('new-task')
    const addTaskBtn = document.getElementById('add-task')

    const addTaskBtnEvent = () => {
        addTaskBtn.addEventListener('click', e => {
            e.preventDefault();
            btnAdd.classList.remove('hide')
            overlay.classList.remove('hide')
            newTaskWindow.classList.remove('hide')
            newTask.classList.remove('hide')
        })
    }

    const btnCancel = document.getElementById('btn-cancel')

    const btnCancelEvent = () =>{
        btnCancel.addEventListener('click', e => { 
            e.preventDefault();
            closeTask() 
            }
        )
    }

    const btnClose = document.getElementById('btn-close')

    const btnCloseEvent = () => {
        btnClose.addEventListener('click', e => { 
            e.preventDefault();
            closeTask() 
        }
        )
    }

    const overlayEvent = () => {
        overlay.addEventListener('click', e => { 
            e.preventDefault();
            closeTask() 
        }
        )
    }



    const clickOnTaskEvent = () => {
        let clickOnTask = document.querySelectorAll('.task')
        
        clickOnTask.forEach(toDo => {
            toDo.addEventListener('click', () => {
                console.log(toDo)
                let descriptionElement = toDo.querySelector('.task-description')
                let downArrow = toDo.querySelector('.down-arrow')
                console.log(descriptionElement)
                if(descriptionElement.classList.contains('hide')){
                    descriptionElement.classList.remove('hide')
                    downArrow.classList.add('turn180')
                }else {
                    descriptionElement.classList.add('hide')
                    downArrow.classList.remove('turn180')
                }
            })
        })
    }


    const taskStateBtnEvent = () => {
        let taskStateBtns = document.querySelectorAll('.task-state')
        taskStateBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                let taskObj = loadEdition(btn.dataset.state)
                if(taskObj.checklist) taskObj.checklist = false
                else taskObj.checklist = true
                writeEdition(btn.dataset.state, taskObj)
            })
        })
    }


    const btnEdit = document.getElementById('btn-edit')
    let taskInfo, taskIndex;

    const editEventListener = () => {
        const editBtns = document.querySelectorAll('svg.edit-btn')
        editBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btnEdit.classList.remove('hide')
                overlay.classList.remove('hide')
                newTaskWindow.classList.remove('hide')
                newTask.classList.remove('hide')
                taskIndex = btn.dataset.task
                taskInfo = loadEdition(taskIndex)
                
                valuesEdit(taskInfo)
            })
        })
    }


    const btnEditEvent = () => {
        btnEdit.addEventListener('click', e => {
            e.preventDefault()
            console.log(taskInfo)
            writeEdition(taskIndex, createIt())
            reInitValues();
            closeTask() 
        })
    }

    const deleteEventListener = () => {
        const deleteBtn = document.querySelectorAll('svg.delete-btn')
        deleteBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                deleteTask(btn.dataset.delete)
            })
            
        })
    }


    const projectForm = document.getElementById('project-form')
    const addProjBtn = document.getElementById('add-proj-btn')
    const addTheProjBtn = document.getElementById('add-proj')
    const projName = document.getElementById('proj-name')
    const newProject = document.getElementById('new-project')

    const addProjBtnEvent = () => {
        addProjBtn.addEventListener('click', e => {
            console.log('yuuu')
            e.preventDefault();
            overlay.classList.remove('hide')
            projectForm.classList.remove('hide');
            newProject.classList.remove('hide')
        })
    }

    const addTheProjBtnEvent= () => {
        addTheProjBtn.addEventListener('click', e => {
            e.preventDefault();
            
            createProject(projName.value)
            
            projName.value = ''
            closeTask();
        })
        
    }

    return {
        homeBtnEvent, 
        sideBarItemsEvent,
        menuBtnEvent,
        addTaskBtnEvent,
        btnCancelEvent,
        btnCloseEvent,
        overlayEvent,
        clickOnTaskEvent,
        taskStateBtnEvent,
        editEventListener,
        btnEditEvent,
        deleteEventListener,
        addProjBtnEvent,
        addTheProjBtnEvent
    }

})()

export default Events;