/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-new.js":
/*!***************************!*\
  !*** ./src/create-new.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrTemporal": () => (/* binding */ arrTemporal),
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");
/* harmony import */ var _task_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-form */ "./src/task-form.js");


let arrTemporal = [{
  "title": "Telefono en modo avión",
  "desciption": "Hasta las 9 no conectar el móvil",
  "dueDate": "2023-01-31T22:44",
  "priority": "high",
  "project": "",
  "checklist": true
}, {
  "title": "Estirar",
  "desciption": "Estiramientos cali move",
  "dueDate": "2023-02-28T22:44",
  "priority": "middle",
  "project": "",
  "checklist": false
}, {
  "title": "16 min mindfullness",
  "desciption": "Estiramientos cali move",
  "dueDate": "2023-01-04T08:44",
  "priority": "low",
  "project": "",
  "checklist": false
}, {
  "title": "Lutheria",
  "desciption": "Una hora a mis guitarras",
  "dueDate": "2023-01-18T18:00",
  "priority": "middle",
  "project": "",
  "checklist": false
}, {
  "title": "Comprar toalla japonesa",
  "desciption": "",
  "dueDate": "2023-01-05T18:00",
  "priority": "low",
  "project": "",
  "checklist": false
}];
const btnAddTask = document.getElementById('btn-add');
btnAddTask.addEventListener('click', e => {
  e.preventDefault();
  createTask();
  (0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.closeTask)();
});
const createTask = () => {
  let newTask = (0,_task_form__WEBPACK_IMPORTED_MODULE_1__.createIt)();
  if (window.localStorage.getItem('task')) {
    console.log('hey');
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'));
    storagedTasks.push(newTask);
    localStorage.setItem('task', JSON.stringify(storagedTasks));
  } else {
    localStorage.setItem('task', JSON.stringify([newTask]));
  }
  (0,_task_form__WEBPACK_IMPORTED_MODULE_1__.reInitValues)();
  (0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();
};


/***/ }),

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "getProject": () => (/* binding */ getProject)
/* harmony export */ });
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");

const createProject = projectName => {
  if (window.localStorage.getItem('projects')) {
    let storagedProject = JSON.parse(window.localStorage.getItem('projects'));
    storagedProject.push(projectName);
    localStorage.setItem('projects', JSON.stringify(storagedProject));
  } else {
    localStorage.setItem('projects', JSON.stringify([projectName]));
  }
  (0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();
};
const getProject = () => {
  if (window.localStorage.getItem('projects')) {
    return JSON.parse(window.localStorage.getItem('projects'));
  }
};

/***/ }),

/***/ "./src/delete-task.js":
/*!****************************!*\
  !*** ./src/delete-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");

const deleteTask = index => {
  let storagedTasks = JSON.parse(window.localStorage.getItem('task'));
  storagedTasks.splice(index, 1);
  localStorage.setItem('task', JSON.stringify(storagedTasks));
  (0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();
};

/***/ }),

/***/ "./src/dom-content.js":
/*!****************************!*\
  !*** ./src/dom-content.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeTask": () => (/* binding */ closeTask),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");



_events__WEBPACK_IMPORTED_MODULE_1__["default"].sideBarItemsEvent();
const task = document.querySelector('.tasks');
const taskHeaderText = document.querySelector('#task-header > h2');
let sideBarItems = document.querySelectorAll('.side-bar div:first-child a, .side-bar #projects a');
taskHeaderText.innerHTML = 'Today';
sideBarItems[1].classList.add('active');
_events__WEBPACK_IMPORTED_MODULE_1__["default"].homeBtnEvent();
_events__WEBPACK_IMPORTED_MODULE_1__["default"].menuBtnEvent();
const newTask = document.getElementById('new-task');
const newProject = document.getElementById('new-project');
const overlay = document.querySelector('.overlay');
const newTaskWindow = document.querySelector('#new-task > form');
const btnAdd = document.getElementById('btn-add');
const btnEdit = document.getElementById('btn-edit');
_events__WEBPACK_IMPORTED_MODULE_1__["default"].addTaskBtnEvent();
const closeTask = () => {
  btnAdd.classList.add('hide');
  btnEdit.classList.add('hide');
  overlay.classList.add('hide');
  newTaskWindow.classList.add('hide');
  projectForm.classList.add('hide');
  newTask.classList.add('hide');
  newProject.classList.add('hide');
};
_events__WEBPACK_IMPORTED_MODULE_1__["default"].btnCancelEvent();
_events__WEBPACK_IMPORTED_MODULE_1__["default"].btnCloseEvent();
_events__WEBPACK_IMPORTED_MODULE_1__["default"].overlayEvent();
const loadTasks = () => {
  if (window.localStorage.getItem('task')) {
    let taskStored = JSON.parse(window.localStorage.getItem('task'));
    let taskContent = taskStored.reduce((acc, task, i) => {
      let {
        title,
        desciption,
        dueDate,
        dueTime,
        priority,
        project,
        checklist
      } = task;
      if (taskHeaderText.innerHTML.trim() === 'Inbox' && checklist === false || taskHeaderText.innerHTML.trim() === 'Today' && (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(dueDate)) || taskHeaderText.innerHTML.trim() === 'Upcoming' && (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(dueDate), new Date()) || taskHeaderText.innerHTML.trim() === 'Finished not deleted' && checklist === true || taskHeaderText.innerHTML.trim() === project) {
        acc += `
                <div class="task" data-task="${i}">
                        <div class="d-flex  ${checklist ? `completed-task` : ``}">
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
                                ${desciption}
                            </div>
                </div> `;
      }
      return acc;
    }, '');
    task.innerHTML = taskContent;
    _events__WEBPACK_IMPORTED_MODULE_1__["default"].clickOnTaskEvent();
    _events__WEBPACK_IMPORTED_MODULE_1__["default"].taskStateBtnEvent();
  }
  _events__WEBPACK_IMPORTED_MODULE_1__["default"].editEventListener();
  _events__WEBPACK_IMPORTED_MODULE_1__["default"].deleteEventListener();
};
const projectsDiv = document.getElementById('projects');
const projectsOptions = document.getElementById('project');
const loadProjects = () => {
  projectsDiv.innerHTML = '';
  projectsOptions.innerHTML = `<option value="" selected disabled>Select Project</option>`;
  let projects = (0,_create_project__WEBPACK_IMPORTED_MODULE_0__.getProject)();
  projects.forEach(proj => {
    projectsDiv.innerHTML += `<a href=""><div class="proj-marc">${proj}</div></a>`;
    projectsOptions.innerHTML += `<option value="${proj}">${proj}</option>`;
  });
  sideBarItems = document.querySelectorAll('.side-bar div:first-child a, .side-bar #projects a');
  console.log(sideBarItems);
  _events__WEBPACK_IMPORTED_MODULE_1__["default"].sideBarItemsEvent();
};
_events__WEBPACK_IMPORTED_MODULE_1__["default"].btnEditEvent();
const showPriority = priority => {
  let displayPriority = `${priority === 'high' ? `<svg style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="red" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>` : priority === 'middle' ? `<svg style="width:20px;height:20px" viewBox="0 0 24 24">
<path fill="orange" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>` : `<svg style="width:20px;height:20px" viewBox="0 0 24 24">
<path fill="green" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>`}`;
  return displayPriority;
};
const showChecked = (checklist, i) => {
  let displayChecked = `<svg class="task-state" data-state="${i}" style="width:16px;height:16px" viewBox="0 0 24 24"> ${checklist ? `
        <path fill="green" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
        </svg>` : `
            <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
        `}</svg>`;
  return displayChecked;
};
const editSvg = i => {
  return `<svg class="edit-btn" data-task="${i}" style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.11 2.9 18 4 18H8L12 22L16 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M9.08 15H7V12.91L13.17 6.72L15.24 8.8L9.08 15M16.84 7.2L15.83 8.21L13.76 6.18L14.77 5.16C14.97 4.95 15.31 4.94 15.55 5.16L16.84 6.41C17.05 6.62 17.06 6.96 16.84 7.2Z" />
</svg>`;
};
const trashSvg = i => {
  return `<svg class="delete-btn" data-delete="${i}" style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
</svg>`;
};
const downArrow = i => {
  return `<svg class="down-arrow" data-arrow="${i}" style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
</svg>`;
};
const projectForm = document.getElementById('project-form');
_events__WEBPACK_IMPORTED_MODULE_1__["default"].addProjBtnEvent();
_events__WEBPACK_IMPORTED_MODULE_1__["default"].addTheProjBtnEvent();

/***/ }),

/***/ "./src/edit-task.js":
/*!**************************!*\
  !*** ./src/edit-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadEdition": () => (/* binding */ loadEdition),
/* harmony export */   "writeEdition": () => (/* binding */ writeEdition)
/* harmony export */ });
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");

const loadEdition = index => {
  let storagedTasks = JSON.parse(window.localStorage.getItem('task'));
  return storagedTasks[index];
};
const writeEdition = (index, editedTask) => {
  let storagedTasks = JSON.parse(window.localStorage.getItem('task'));
  storagedTasks[index] = editedTask;
  localStorage.setItem('task', JSON.stringify(storagedTasks));
  (0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();
};

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _delete_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-task */ "./src/delete-task.js");
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");
/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-task */ "./src/edit-task.js");
/* harmony import */ var _task_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-form */ "./src/task-form.js");




const Events = (() => {
  const homeBtn = document.getElementById('home');
  const taskHeaderText = document.querySelector('#task-header > h2');
  let sideBarItems = document.querySelectorAll('.side-bar div:first-child a, .side-bar #projects a');
  const homeBtnEvent = () => {
    homeBtn.addEventListener('click', e => {
      e.preventDefault();
      sideBarItems.forEach(i => {
        i.classList.remove('active');
      });
      sideBarItems[1].classList.add('active');
      taskHeaderText.innerHTML = 'Today';
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();
    });
  };
  const sideBarItemsEvent = () => {
    sideBarItems = document.querySelectorAll('.side-bar div:first-child a, .side-bar #projects a');
    sideBarItems.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        sideBarItems.forEach(i => {
          i.classList.remove('active');
        });
        item.classList.add('active');
        taskHeaderText.innerHTML = item.querySelector('div').textContent;
        (0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();
      });
    });
  };
  const menuBtn = document.getElementById('menu');
  const sideBar = document.querySelector('.side-bar');
  const menuBtnEvent = () => {
    menuBtn.addEventListener('click', e => {
      e.preventDefault();
      if (sideBar.classList.contains('hide')) {
        content.style.gridTemplateColumns = "300px 1fr";
        sideBar.classList.remove('hide');
      } else {
        content.style.gridTemplateColumns = "0 1fr";
        sideBar.classList.add('hide');
      }
    });
  };
  const btnAdd = document.getElementById('btn-add');
  const overlay = document.querySelector('.overlay');
  const newTaskWindow = document.querySelector('#new-task > form');
  const newTask = document.getElementById('new-task');
  const addTaskBtn = document.getElementById('add-task');
  const addTaskBtnEvent = () => {
    addTaskBtn.addEventListener('click', e => {
      e.preventDefault();
      btnAdd.classList.remove('hide');
      overlay.classList.remove('hide');
      newTaskWindow.classList.remove('hide');
      newTask.classList.remove('hide');
    });
  };
  const btnCancel = document.getElementById('btn-cancel');
  const btnCancelEvent = () => {
    btnCancel.addEventListener('click', e => {
      e.preventDefault();
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.closeTask)();
    });
  };
  const btnClose = document.getElementById('btn-close');
  const btnCloseEvent = () => {
    btnClose.addEventListener('click', e => {
      e.preventDefault();
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.closeTask)();
    });
  };
  const overlayEvent = () => {
    overlay.addEventListener('click', e => {
      e.preventDefault();
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.closeTask)();
    });
  };
  const clickOnTaskEvent = () => {
    let clickOnTask = document.querySelectorAll('.task');
    clickOnTask.forEach(toDo => {
      toDo.addEventListener('click', () => {
        console.log(toDo);
        let descriptionElement = toDo.querySelector('.task-description');
        let downArrow = toDo.querySelector('.down-arrow');
        console.log(descriptionElement);
        if (descriptionElement.classList.contains('hide')) {
          descriptionElement.classList.remove('hide');
          downArrow.classList.add('turn180');
        } else {
          descriptionElement.classList.add('hide');
          downArrow.classList.remove('turn180');
        }
      });
    });
  };
  const taskStateBtnEvent = () => {
    let taskStateBtns = document.querySelectorAll('.task-state');
    taskStateBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        let taskObj = (0,_edit_task__WEBPACK_IMPORTED_MODULE_2__.loadEdition)(btn.dataset.state);
        if (taskObj.checklist) taskObj.checklist = false;else taskObj.checklist = true;
        (0,_edit_task__WEBPACK_IMPORTED_MODULE_2__.writeEdition)(btn.dataset.state, taskObj);
      });
    });
  };
  const btnEdit = document.getElementById('btn-edit');
  let taskInfo, taskIndex;
  const editEventListener = () => {
    const editBtns = document.querySelectorAll('svg.edit-btn');
    editBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        btnEdit.classList.remove('hide');
        overlay.classList.remove('hide');
        newTaskWindow.classList.remove('hide');
        newTask.classList.remove('hide');
        taskIndex = btn.dataset.task;
        taskInfo = (0,_edit_task__WEBPACK_IMPORTED_MODULE_2__.loadEdition)(taskIndex);
        (0,_task_form__WEBPACK_IMPORTED_MODULE_3__.valuesEdit)(taskInfo);
      });
    });
  };
  const btnEditEvent = () => {
    btnEdit.addEventListener('click', e => {
      e.preventDefault();
      console.log(taskInfo);
      (0,_edit_task__WEBPACK_IMPORTED_MODULE_2__.writeEdition)(taskIndex, (0,_task_form__WEBPACK_IMPORTED_MODULE_3__.createIt)());
      (0,_task_form__WEBPACK_IMPORTED_MODULE_3__.reInitValues)();
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.closeTask)();
    });
  };
  const deleteEventListener = () => {
    const deleteBtn = document.querySelectorAll('svg.delete-btn');
    deleteBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        (0,_delete_task__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(btn.dataset.delete);
      });
    });
  };
  const projectForm = document.getElementById('project-form');
  const addProjBtn = document.getElementById('add-proj-btn');
  const addTheProjBtn = document.getElementById('add-proj');
  const projName = document.getElementById('proj-name');
  const newProject = document.getElementById('new-project');
  const addProjBtnEvent = () => {
    addProjBtn.addEventListener('click', e => {
      console.log('yuuu');
      e.preventDefault();
      overlay.classList.remove('hide');
      projectForm.classList.remove('hide');
      newProject.classList.remove('hide');
    });
  };
  const addTheProjBtnEvent = () => {
    addTheProjBtn.addEventListener('click', e => {
      e.preventDefault();
      createProject(projName.value);
      projName.value = '';
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.closeTask)();
    });
  };
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
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
    e.code === 22 ||
    // Firefox
    e.code === 1014 ||
    // test name field too, because code might not be present
    // everything except Firefox
    e.name === 'QuotaExceededError' ||
    // Firefox
    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
    // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
}

/***/ }),

/***/ "./src/task-form.js":
/*!**************************!*\
  !*** ./src/task-form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIt": () => (/* binding */ createIt),
/* harmony export */   "reInitValues": () => (/* binding */ reInitValues),
/* harmony export */   "valuesEdit": () => (/* binding */ valuesEdit)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");

const taskNameInput = document.getElementById('task-name');
const taskDescriptionInput = document.getElementById('task-description');
const dueDateInput = document.getElementById('due-date');
const projectSelect = document.getElementById('project');
const prioritySelect = document.getElementById('priority');
const taskDoneCheckbutton = document.getElementById('task-done');
let taskName = taskNameInput.value;
let taskDescription = taskDescriptionInput.value;
let dueDate = dueDateInput.value;
let project = projectSelect.value;
let priority = prioritySelect.value;
let taskDone = taskDoneCheckbutton.checked;
const reInitValues = () => {
  taskNameInput.value = '';
  taskDescriptionInput.value = '';
  dueDateInput.value = '';
  projectSelect.value = '';
  prioritySelect.value = '';
  taskDoneCheckbutton.checked = false;
};
const valuesEdit = task => {
  let {
    title,
    desciption,
    defautlDate,
    priority,
    project,
    checklist
  } = task;
  taskNameInput.value = title;
  taskDescriptionInput.value = desciption;
  dueDateInput.value = defautlDate;
  projectSelect.value = project;
  prioritySelect.value = priority;
  taskDoneCheckbutton.checked = checklist;
};
const createIt = () => {
  taskName = taskNameInput.value;
  taskDescription = taskDescriptionInput.value;
  dueDate = dueDateInput.value;
  project = projectSelect.value;
  priority = prioritySelect.value;
  taskDone = taskDoneCheckbutton.checked;
  return new _task__WEBPACK_IMPORTED_MODULE_0__["default"](taskName, taskDescription, dueDate, priority, project, taskDone);
};

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, desciption, dueDate, priority, project, checklist) {
    const inputDate = dueDate.split('T')[0];
    const date = new Date(Date.parse(inputDate));
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    this.title = title;
    this.desciption = desciption;
    this.dueDate = formattedDate;
    this.dueTime = dueDate.split('T')[1];
    this.priority = priority;
    this.project = project;
    this.checklist = checklist;
    this.defautlDate = dueDate;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --lime-400: #a3e635;\r\n    --lime-600: #65a30d;\r\n    --lime-700: #4d7c0f;\r\n    --gris: #FAFAFA;\r\n    --gris-oscuro: #8a8a8a;\r\n}\r\n\r\nbody, div, nav{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton{\r\n    border-radius: 8px;\r\n    border: none;\r\n    padding: 0.7rem 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.d-flex{\r\n    display: flex;\r\n    gap: 15px;\r\n    \r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 44px 100px 1fr;\r\n    position: relative;\r\n    transition: all .2s;\r\n}\r\n\r\n/*nav bar top */\r\n\r\nnav{\r\n    background-color: var(--lime-600);\r\n    padding: 1rem 2rem;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    justify-content: space-between;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\nnav a{\r\n    color: #fff;\r\n    padding: .2rem;\r\n}\r\n\r\nnav a:hover{\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n/*navbar top left side  */\r\n\r\n.nav-l{\r\n    align-items: center;\r\n}\r\n\r\n.nav-l > div{\r\n    background-color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    padding: 0 .2rem;\r\n}\r\n\r\n.nav-l > div > input{\r\n    background-color: #00000000;\r\n    color: #000;\r\n    border: none;\r\n    outline-style: none;\r\n    \r\n}\r\n\r\n.nav-l .search-input a svg {\r\n    color: #000;\r\n}\r\n\r\n/*navbar top right side  */\r\n\r\n.nav-r{\r\n    align-items: center\r\n}\r\n\r\n\r\n/* white overlay */\r\n.overlay{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff44;\r\n    z-index: 5;\r\n}\r\n\r\n/* New task window */\r\n\r\n#new-task{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-task > form {\r\n    padding: 1rem 3rem;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#new-task > form > div{\r\n    margin: .3rem 0;\r\n}\r\n\r\n#new-task > form input {\r\n    border: none;\r\n    outline-style: none;\r\n}\r\n\r\n#new-task > form #task-name{\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n#new-task > form > div:nth-child(3), #new-task > form > div:nth-child(4){\r\n    justify-content: space-between\r\n}\r\n\r\n#new-task .due-date-div {\r\n    display: flex;\r\n    flex-direction: column;    \r\n\r\n}\r\n\r\n#new-task > form .extra-fields > div {\r\n    align-items: center;\r\n}\r\n\r\n#new-task > form label{\r\n    font-size: .8rem;\r\n}\r\n\r\n#new-task > form #due-date{\r\n    color: #555;\r\n    border: 1px solid ;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n#new-task form .buttons{\r\n    justify-content: end;\r\n}\r\n\r\n\r\n.btn-green{\r\n    background-color: var(--lime-600);\r\n    color: #fff;\r\n}\r\n\r\n.btn-green:hover{\r\n    background-color: var(--lime-700);\r\n}\r\n\r\n.btn-cancel{\r\n    background-color: var(--gris);\r\n    color: var(--gris-oscuro);\r\n}\r\n\r\n.btn-cancel:hover{\r\n    background-color: #e3e3e3;\r\n}\r\n\r\n\r\n/* new project window */\r\n#new-project{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-project form{\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n}\r\n\r\n#new-project > form input {\r\n    border: 1px solid var(--gris-oscuro);\r\n    border-radius: 6px;\r\n    outline-style: none;\r\n    padding: .5rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n#new-project > form input:focus{\r\n    border: 1px solid #000;\r\n}\r\n\r\n\r\n#new-project > form .proj-btns{\r\n    justify-content: flex-end\r\n}\r\n\r\n/* side bar */\r\n\r\n.side-bar{\r\n    position: sticky;\r\n    padding:  2rem;\r\n    top: 44px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 4;\r\n    background-color: var(--gris);\r\n}\r\n\r\n.side-bar > div > a, .task-header a, .side-bar #projects a {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    font-size: 0.8rem;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    color: #000;    \r\n}\r\n\r\n.side-bar > div > a:hover,.task-header a:hover, .side-bar .active, .side-bar #projects a:hover{\r\n    background-color: #00000008;\r\n    \r\n}\r\n\r\n.side-bar #created-projects{\r\n    flex-direction: column;\r\n    gap: 0;\r\n}\r\n\r\n.side-bar #created-projects  a:hover{\r\n    color: var(--lime-600);\r\n    transform: scale(1.1);\r\n    margin: 2px 2rem;\r\n    transition: all .2s;\r\n}\r\n\r\n\r\n.side-bar #projects{\r\n    flex-direction: column;\r\n    gap: 0;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.side-bar #projects a{\r\n    margin-left: 1rem;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n/*task header */\r\n.task-header{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 2 / 3;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* task space */\r\n.tasks{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 3 / 4;\r\n    overflow-x: scroll;\r\n}\r\n\r\n/*each task*/\r\n.task {\r\n    margin: 1.5rem;\r\n    padding: 1rem;\r\n    border-bottom: 1px solid var(--gris-oscuro);\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\n.task:hover{\r\n    border-bottom: 2px solid var(--gris-oscuro);\r\n}\r\n\r\n\r\n.task > div{\r\n    justify-content: space-between;\r\n}\r\n\r\n.task .display-date{\r\n    margin: .5rem 0;\r\n    font-size: .7rem;\r\n}\r\n\r\n.task .check-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.task .task-description{\r\n    font-size: .8rem;\r\n    margin: 0 3rem;\r\n    text-align: left;\r\n}\r\n\r\n.task .completed-task{\r\n    text-decoration:line-through;\r\n}\r\n\r\n.task .mod-btns svg:hover{\r\n    transition: all .2s;\r\n    transform: scale(1.2);\r\n}\r\n\r\n.task .down-arrow{\r\n    transition: all .2s;\r\n}\r\n\r\n/* hide class */\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n.turn180{\r\n    transform: rotate(180deg);\r\n    transition: all .2s;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\r\n    --lime-400: #a3e635;\r\n    --lime-600: #65a30d;\r\n    --lime-700: #4d7c0f;\r\n    --gris: #FAFAFA;\r\n    --gris-oscuro: #8a8a8a;\r\n}\r\n\r\nbody, div, nav{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton{\r\n    border-radius: 8px;\r\n    border: none;\r\n    padding: 0.7rem 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.d-flex{\r\n    display: flex;\r\n    gap: 15px;\r\n    \r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 44px 100px 1fr;\r\n    position: relative;\r\n    transition: all .2s;\r\n}\r\n\r\n/*nav bar top */\r\n\r\nnav{\r\n    background-color: var(--lime-600);\r\n    padding: 1rem 2rem;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    justify-content: space-between;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\nnav a{\r\n    color: #fff;\r\n    padding: .2rem;\r\n}\r\n\r\nnav a:hover{\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n/*navbar top left side  */\r\n\r\n.nav-l{\r\n    align-items: center;\r\n}\r\n\r\n.nav-l > div{\r\n    background-color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    padding: 0 .2rem;\r\n}\r\n\r\n.nav-l > div > input{\r\n    background-color: #00000000;\r\n    color: #000;\r\n    border: none;\r\n    outline-style: none;\r\n    \r\n}\r\n\r\n.nav-l .search-input a svg {\r\n    color: #000;\r\n}\r\n\r\n/*navbar top right side  */\r\n\r\n.nav-r{\r\n    align-items: center\r\n}\r\n\r\n\r\n/* white overlay */\r\n.overlay{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff44;\r\n    z-index: 5;\r\n}\r\n\r\n/* New task window */\r\n\r\n#new-task{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-task > form {\r\n    padding: 1rem 3rem;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#new-task > form > div{\r\n    margin: .3rem 0;\r\n}\r\n\r\n#new-task > form input {\r\n    border: none;\r\n    outline-style: none;\r\n}\r\n\r\n#new-task > form #task-name{\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n#new-task > form > div:nth-child(3), #new-task > form > div:nth-child(4){\r\n    justify-content: space-between\r\n}\r\n\r\n#new-task .due-date-div {\r\n    display: flex;\r\n    flex-direction: column;    \r\n\r\n}\r\n\r\n#new-task > form .extra-fields > div {\r\n    align-items: center;\r\n}\r\n\r\n#new-task > form label{\r\n    font-size: .8rem;\r\n}\r\n\r\n#new-task > form #due-date{\r\n    color: #555;\r\n    border: 1px solid ;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n#new-task form .buttons{\r\n    justify-content: end;\r\n}\r\n\r\n\r\n.btn-green{\r\n    background-color: var(--lime-600);\r\n    color: #fff;\r\n}\r\n\r\n.btn-green:hover{\r\n    background-color: var(--lime-700);\r\n}\r\n\r\n.btn-cancel{\r\n    background-color: var(--gris);\r\n    color: var(--gris-oscuro);\r\n}\r\n\r\n.btn-cancel:hover{\r\n    background-color: #e3e3e3;\r\n}\r\n\r\n\r\n/* new project window */\r\n#new-project{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-project form{\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n}\r\n\r\n#new-project > form input {\r\n    border: 1px solid var(--gris-oscuro);\r\n    border-radius: 6px;\r\n    outline-style: none;\r\n    padding: .5rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n#new-project > form input:focus{\r\n    border: 1px solid #000;\r\n}\r\n\r\n\r\n#new-project > form .proj-btns{\r\n    justify-content: flex-end\r\n}\r\n\r\n/* side bar */\r\n\r\n.side-bar{\r\n    position: sticky;\r\n    padding:  2rem;\r\n    top: 44px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 4;\r\n    background-color: var(--gris);\r\n}\r\n\r\n.side-bar > div > a, .task-header a, .side-bar #projects a {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    font-size: 0.8rem;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    color: #000;    \r\n}\r\n\r\n.side-bar > div > a:hover,.task-header a:hover, .side-bar .active, .side-bar #projects a:hover{\r\n    background-color: #00000008;\r\n    \r\n}\r\n\r\n.side-bar #created-projects{\r\n    flex-direction: column;\r\n    gap: 0;\r\n}\r\n\r\n.side-bar #created-projects  a:hover{\r\n    color: var(--lime-600);\r\n    transform: scale(1.1);\r\n    margin: 2px 2rem;\r\n    transition: all .2s;\r\n}\r\n\r\n\r\n.side-bar #projects{\r\n    flex-direction: column;\r\n    gap: 0;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.side-bar #projects a{\r\n    margin-left: 1rem;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n/*task header */\r\n.task-header{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 2 / 3;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* task space */\r\n.tasks{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 3 / 4;\r\n    overflow-x: scroll;\r\n}\r\n\r\n/*each task*/\r\n.task {\r\n    margin: 1.5rem;\r\n    padding: 1rem;\r\n    border-bottom: 1px solid var(--gris-oscuro);\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\n.task:hover{\r\n    border-bottom: 2px solid var(--gris-oscuro);\r\n}\r\n\r\n\r\n.task > div{\r\n    justify-content: space-between;\r\n}\r\n\r\n.task .display-date{\r\n    margin: .5rem 0;\r\n    font-size: .7rem;\r\n}\r\n\r\n.task .check-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.task .task-description{\r\n    font-size: .8rem;\r\n    margin: 0 3rem;\r\n    text-align: left;\r\n}\r\n\r\n.task .completed-task{\r\n    text-decoration:line-through;\r\n}\r\n\r\n.task .mod-btns svg:hover{\r\n    transition: all .2s;\r\n    transform: scale(1.2);\r\n}\r\n\r\n.task .down-arrow{\r\n    transition: all .2s;\r\n}\r\n\r\n/* hide class */\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n.turn180{\r\n    transform: rotate(180deg);\r\n    transition: all .2s;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-new */ "./src/create-new.js");
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




if ((0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)('localStorage')) {
  console.log('local storage found');
} else {
  console.log('no local storage available');
}
(0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();
(0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.loadProjects)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFNBQVMsVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVks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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ2tCO0FBQ0w7QUFFOUI7QUFFckIsSUFBSTRELGdFQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFFO0VBQ2xDM0csT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7QUFDcEMsQ0FBQyxNQUNJO0VBQ0hELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixDQUFDO0FBQzNDO0FBRUZoQix1REFBUyxFQUFFO0FBQ1h1QiwwREFBWSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGUtbmV3LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RlbGV0ZS10YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbS1jb250ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXQtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0FmdGVyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb3NlVGFzaywgbG9hZFRhc2tzIH0gZnJvbSBcIi4vZG9tLWNvbnRlbnRcIjtcclxuaW1wb3J0IHsgY3JlYXRlSXQsIHJlSW5pdFZhbHVlcyB9IGZyb20gXCIuL3Rhc2stZm9ybVwiO1xyXG5cclxuXHJcbmxldCBhcnJUZW1wb3JhbCA9IFtcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGVsZWZvbm8gZW4gbW9kbyBhdmnDs25cIixcclxuICAgICAgICBcImRlc2NpcHRpb25cIjogXCJIYXN0YSBsYXMgOSBubyBjb25lY3RhciBlbCBtw7N2aWxcIixcclxuICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIzLTAxLTMxVDIyOjQ0XCIsXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcImhpZ2hcIixcclxuICAgICAgICBcInByb2plY3RcIjogXCJcIixcclxuICAgICAgICBcImNoZWNrbGlzdFwiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJFc3RpcmFyXCIsXHJcbiAgICAgICAgXCJkZXNjaXB0aW9uXCI6IFwiRXN0aXJhbWllbnRvcyBjYWxpIG1vdmVcIixcclxuICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIzLTAyLTI4VDIyOjQ0XCIsXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgIFwicHJvamVjdFwiOiBcIlwiLFxyXG4gICAgICAgIFwiY2hlY2tsaXN0XCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCIxNiBtaW4gbWluZGZ1bGxuZXNzXCIsXHJcbiAgICAgICAgXCJkZXNjaXB0aW9uXCI6IFwiRXN0aXJhbWllbnRvcyBjYWxpIG1vdmVcIixcclxuICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIzLTAxLTA0VDA4OjQ0XCIsXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcImxvd1wiLFxyXG4gICAgICAgIFwicHJvamVjdFwiOiBcIlwiLFxyXG4gICAgICAgIFwiY2hlY2tsaXN0XCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJMdXRoZXJpYVwiLFxyXG4gICAgICAgIFwiZGVzY2lwdGlvblwiOiBcIlVuYSBob3JhIGEgbWlzIGd1aXRhcnJhc1wiLFxyXG4gICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjMtMDEtMThUMTg6MDBcIixcclxuICAgICAgICBcInByaW9yaXR5XCI6IFwibWlkZGxlXCIsXHJcbiAgICAgICAgXCJwcm9qZWN0XCI6IFwiXCIsXHJcbiAgICAgICAgXCJjaGVja2xpc3RcIjogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXByYXIgdG9hbGxhIGphcG9uZXNhXCIsXHJcbiAgICAgICAgXCJkZXNjaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMy0wMS0wNVQxODowMFwiLFxyXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJsb3dcIixcclxuICAgICAgICBcInByb2plY3RcIjogXCJcIixcclxuICAgICAgICBcImNoZWNrbGlzdFwiOiBmYWxzZVxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYWRkJylcclxuXHJcbmJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNyZWF0ZVRhc2soKTtcclxuICAgIGNsb3NlVGFzaygpO1xyXG59KVxyXG5cclxuY29uc3QgY3JlYXRlVGFzayA9ICgpID0+ICB7XHJcblxyXG4gICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVJdCgpO1xyXG5cclxuICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzaycpKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGV5JylcclxuICAgICAgICBsZXQgc3RvcmFnZWRUYXNrcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpXHJcbiAgICAgICAgc3RvcmFnZWRUYXNrcy5wdXNoKG5ld1Rhc2spXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2snLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlZFRhc2tzKSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywgSlNPTi5zdHJpbmdpZnkoW25ld1Rhc2tdKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVJbml0VmFsdWVzKCk7XHJcbiAgICBsb2FkVGFza3MoKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQge2NyZWF0ZVRhc2ssIGFyclRlbXBvcmFsfTtcclxuXHJcbiIsImltcG9ydCB7IGxvYWRQcm9qZWN0cyB9IGZyb20gXCIuL2RvbS1jb250ZW50XCJcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0ID0gcHJvamVjdE5hbWUgPT4gIHtcclxuXHJcbiAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpe1xyXG5cclxuICAgICAgICBsZXQgc3RvcmFnZWRQcm9qZWN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXHJcbiAgICAgICAgc3RvcmFnZWRQcm9qZWN0LnB1c2gocHJvamVjdE5hbWUpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZWRQcm9qZWN0KSlcclxuXHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoW3Byb2plY3ROYW1lXSkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcm9qZWN0cygpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKXtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBsb2FkVGFza3MgfSBmcm9tIFwiLi9kb20tY29udGVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcclxuICAgIGxldCBzdG9yYWdlZFRhc2tzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSlcclxuICAgIHN0b3JhZ2VkVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZWRUYXNrcykpXHJcblxyXG4gICAgbG9hZFRhc2tzKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdCB9IGZyb20gJy4vY3JlYXRlLXByb2plY3QnXHJcbmltcG9ydCB7IGlzVG9kYXksIGlzQWZ0ZXIgfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cydcclxuXHJcbkV2ZW50cy5zaWRlQmFySXRlbXNFdmVudCgpXHJcblxyXG5jb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcclxuXHJcbmNvbnN0IHRhc2tIZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staGVhZGVyID4gaDInKVxyXG5sZXQgc2lkZUJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtYmFyIGRpdjpmaXJzdC1jaGlsZCBhLCAuc2lkZS1iYXIgI3Byb2plY3RzIGEnKVxyXG5cclxudGFza0hlYWRlclRleHQuaW5uZXJIVE1MID0gJ1RvZGF5J1xyXG5zaWRlQmFySXRlbXNbMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcbkV2ZW50cy5ob21lQnRuRXZlbnQoKTtcclxuXHJcbkV2ZW50cy5tZW51QnRuRXZlbnQoKTtcclxuXHJcbmNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKVxyXG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0JylcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcclxuY29uc3QgbmV3VGFza1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzayA+IGZvcm0nKVxyXG5jb25zdCBidG5BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWFkZCcpXHJcbmNvbnN0IGJ0bkVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWVkaXQnKVxyXG5cclxuXHJcbkV2ZW50cy5hZGRUYXNrQnRuRXZlbnQoKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY2xvc2VUYXNrID0gKCkgPT4ge1xyXG4gICAgYnRuQWRkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgYnRuRWRpdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBuZXdUYXNrV2luZG93LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbn1cclxuXHJcbkV2ZW50cy5idG5DYW5jZWxFdmVudCgpO1xyXG5FdmVudHMuYnRuQ2xvc2VFdmVudCgpO1xyXG5FdmVudHMub3ZlcmxheUV2ZW50KCk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFRhc2tzID0gKCkgPT4ge1xyXG4gICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpe1xyXG4gICAgICAgIGxldCB0YXNrU3RvcmVkID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSlcclxuICAgICAgICBsZXQgdGFza0NvbnRlbnQgPSB0YXNrU3RvcmVkLnJlZHVjZSgoYWNjLCB0YXNrLCBpKSA9PiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB7dGl0bGUsIGRlc2NpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5LCBwcm9qZWN0LCBjaGVja2xpc3R9ID0gdGFza1xyXG5cclxuICAgICAgICAgICAgaWYoXHJcblxyXG4gICAgICAgICAgICAgICAgdGFza0hlYWRlclRleHQuaW5uZXJIVE1MLnRyaW0oKSA9PT0gJ0luYm94JyAmJiBjaGVja2xpc3QgPT09IGZhbHNlIHx8XHJcbiAgICAgICAgICAgICAgICB0YXNrSGVhZGVyVGV4dC5pbm5lckhUTUwudHJpbSgpID09PSAnVG9kYXknICYmIGlzVG9kYXkobmV3IERhdGUoZHVlRGF0ZSkpIHx8XHJcbiAgICAgICAgICAgICAgICB0YXNrSGVhZGVyVGV4dC5pbm5lckhUTUwudHJpbSgpID09PSAnVXBjb21pbmcnICYmIGlzQWZ0ZXIobmV3IERhdGUoZHVlRGF0ZSksIG5ldyBEYXRlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICB0YXNrSGVhZGVyVGV4dC5pbm5lckhUTUwudHJpbSgpID09PSAnRmluaXNoZWQgbm90IGRlbGV0ZWQnICYmIGNoZWNrbGlzdCA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgdGFza0hlYWRlclRleHQuaW5uZXJIVE1MLnRyaW0oKSA9PT0gcHJvamVjdFxyXG4gICAgXHJcbiAgICAgICAgICAgICl7XHJcblxyXG4gICAgICAgICAgICAgICAgYWNjICs9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCIgZGF0YS10YXNrPVwiJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4ICAke2NoZWNrbGlzdCA/IGBjb21wbGV0ZWQtdGFza2A6IGBgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzaG93Q2hlY2tlZChjaGVja2xpc3QsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZG93bkFycm93KGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IG1vZC1idG5zXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtlZGl0U3ZnKGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzaG93UHJpb3JpdHkocHJpb3JpdHkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0cmFzaFN2ZyhpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2R1ZURhdGV9IGF0ICR7ZHVlVGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24gaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGVzY2lwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjXHJcbiAgICAgICAgfSwgJycpXHJcblxyXG4gICAgICAgIHRhc2suaW5uZXJIVE1MID0gdGFza0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgRXZlbnRzLmNsaWNrT25UYXNrRXZlbnQoKTtcclxuICAgICAgICBFdmVudHMudGFza1N0YXRlQnRuRXZlbnQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBFdmVudHMuZWRpdEV2ZW50TGlzdGVuZXIoKTtcclxuICAgIEV2ZW50cy5kZWxldGVFdmVudExpc3RlbmVyKCk7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcclxuY29uc3QgcHJvamVjdHNPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIHByb2plY3RzRGl2LmlubmVySFRNTCA9ICcnXHJcbiAgICBwcm9qZWN0c09wdGlvbnMuaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZD5TZWxlY3QgUHJvamVjdDwvb3B0aW9uPmBcclxuICAgIGxldCBwcm9qZWN0cyA9IGdldFByb2plY3QoKVxyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvaiA9PiB7XHJcbiAgICAgICAgcHJvamVjdHNEaXYuaW5uZXJIVE1MICs9IGA8YSBocmVmPVwiXCI+PGRpdiBjbGFzcz1cInByb2otbWFyY1wiPiR7cHJvan08L2Rpdj48L2E+YFxyXG4gICAgICAgIHByb2plY3RzT3B0aW9ucy5pbm5lckhUTUwgKz0gYDxvcHRpb24gdmFsdWU9XCIke3Byb2p9XCI+JHtwcm9qfTwvb3B0aW9uPmBcclxuICAgIH0pXHJcbiAgICBzaWRlQmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1iYXIgZGl2OmZpcnN0LWNoaWxkIGEsIC5zaWRlLWJhciAjcHJvamVjdHMgYScpXHJcbiAgICBjb25zb2xlLmxvZyhzaWRlQmFySXRlbXMpXHJcbiAgICBFdmVudHMuc2lkZUJhckl0ZW1zRXZlbnQoKTtcclxufVxyXG5cclxuRXZlbnRzLmJ0bkVkaXRFdmVudCgpO1xyXG5cclxuY29uc3Qgc2hvd1ByaW9yaXR5ID0gcHJpb3JpdHkgPT4ge1xyXG4gICAgbGV0IGRpc3BsYXlQcmlvcml0eSA9IGAke3ByaW9yaXR5PT09J2hpZ2gnPyBgPHN2ZyBzdHlsZT1cIndpZHRoOjIwcHg7aGVpZ2h0OjIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBmaWxsPVwicmVkXCIgZD1cIk0xNC40LDZMMTQsNEg1VjIxSDdWMTRIMTIuNkwxMywxNkgyMFY2SDE0LjRaXCIgLz5cclxuPC9zdmc+YDogKHByaW9yaXR5PT09J21pZGRsZSc/IGA8c3ZnIHN0eWxlPVwid2lkdGg6MjBweDtoZWlnaHQ6MjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuPHBhdGggZmlsbD1cIm9yYW5nZVwiIGQ9XCJNMTQuNCw2TDE0LDRINVYyMUg3VjE0SDEyLjZMMTMsMTZIMjBWNkgxNC40WlwiIC8+XHJcbjwvc3ZnPmAgOiBgPHN2ZyBzdHlsZT1cIndpZHRoOjIwcHg7aGVpZ2h0OjIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbjxwYXRoIGZpbGw9XCJncmVlblwiIGQ9XCJNMTQuNCw2TDE0LDRINVYyMUg3VjE0SDEyLjZMMTMsMTZIMjBWNkgxNC40WlwiIC8+XHJcbjwvc3ZnPmApfWBcclxuICAgIHJldHVybiBkaXNwbGF5UHJpb3JpdHlcclxufVxyXG5cclxuY29uc3Qgc2hvd0NoZWNrZWQgPSAoY2hlY2tsaXN0LCBpKSA9PiB7XHJcbiAgICBsZXQgZGlzcGxheUNoZWNrZWQgPSBgPHN2ZyBjbGFzcz1cInRhc2stc3RhdGVcIiBkYXRhLXN0YXRlPVwiJHtpfVwiIHN0eWxlPVwid2lkdGg6MTZweDtoZWlnaHQ6MTZweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj4gJHtjaGVja2xpc3QgPyBgXHJcbiAgICAgICAgPHBhdGggZmlsbD1cImdyZWVuXCIgZD1cIk05LDIwLjQyTDIuNzksMTQuMjFMNS42MiwxMS4zOEw5LDE0Ljc3TDE4Ljg4LDQuODhMMjEuNzEsNy43MUw5LDIwLjQyWlwiIC8+XHJcbiAgICAgICAgPC9zdmc+YCA6IGBcclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTksM0g1QzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QzIxLDMuODkgMjAuMSwzIDE5LDNNMTksNVYxOUg1VjVIMTlaXCIgLz5cclxuICAgICAgICBgfTwvc3ZnPmBcclxuICAgIHJldHVybiBkaXNwbGF5Q2hlY2tlZFxyXG59XHJcblxyXG5jb25zdCBlZGl0U3ZnID0gaSA9PiB7XHJcbiAgICByZXR1cm4gYDxzdmcgY2xhc3M9XCJlZGl0LWJ0blwiIGRhdGEtdGFzaz1cIiR7aX1cIiBzdHlsZT1cIndpZHRoOjIwcHg7aGVpZ2h0OjIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMCAySDRDMi45IDIgMiAyLjkgMiA0VjE2QzIgMTcuMTEgMi45IDE4IDQgMThIOEwxMiAyMkwxNiAxOEgyMEMyMS4xMSAxOCAyMiAxNy4xMSAyMiAxNlY0QzIyIDIuOSAyMS4xMSAyIDIwIDJNOS4wOCAxNUg3VjEyLjkxTDEzLjE3IDYuNzJMMTUuMjQgOC44TDkuMDggMTVNMTYuODQgNy4yTDE1LjgzIDguMjFMMTMuNzYgNi4xOEwxNC43NyA1LjE2QzE0Ljk3IDQuOTUgMTUuMzEgNC45NCAxNS41NSA1LjE2TDE2Ljg0IDYuNDFDMTcuMDUgNi42MiAxNy4wNiA2Ljk2IDE2Ljg0IDcuMlpcIiAvPlxyXG48L3N2Zz5gXHJcbn1cclxuXHJcbmNvbnN0IHRyYXNoU3ZnID0gaSA9PiB7XHJcbiAgICByZXR1cm4gYDxzdmcgY2xhc3M9XCJkZWxldGUtYnRuXCIgZGF0YS1kZWxldGU9XCIke2l9XCIgc3R5bGU9XCJ3aWR0aDoyMHB4O2hlaWdodDoyMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTksNEgxNS41TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOVpcIiAvPlxyXG48L3N2Zz5gXHJcbn1cclxuXHJcblxyXG5jb25zdCBkb3duQXJyb3cgPSBpID0+IHtcclxuICAgIHJldHVybmA8c3ZnIGNsYXNzPVwiZG93bi1hcnJvd1wiIGRhdGEtYXJyb3c9XCIke2l9XCIgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaXCIgLz5cclxuPC9zdmc+YFxyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKVxyXG5cclxuRXZlbnRzLmFkZFByb2pCdG5FdmVudCgpXHJcbkV2ZW50cy5hZGRUaGVQcm9qQnRuRXZlbnQoKVxyXG5cclxuIiwiaW1wb3J0IHsgbG9hZFRhc2tzIH0gZnJvbSBcIi4vZG9tLWNvbnRlbnRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRFZGl0aW9uID0gKGluZGV4KSA9PiB7XHJcbiAgICBsZXQgc3RvcmFnZWRUYXNrcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpXHJcbiAgICByZXR1cm4gc3RvcmFnZWRUYXNrc1tpbmRleF1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB3cml0ZUVkaXRpb24gPSAoaW5kZXgsIGVkaXRlZFRhc2spID0+IHtcclxuICAgIGxldCBzdG9yYWdlZFRhc2tzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSlcclxuICAgIHN0b3JhZ2VkVGFza3NbaW5kZXhdID0gZWRpdGVkVGFza1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2snLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlZFRhc2tzKSlcclxuXHJcbiAgICBsb2FkVGFza3MoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4vZGVsZXRlLXRhc2tcIjtcclxuaW1wb3J0IHsgY2xvc2VUYXNrLCBsb2FkVGFza3MgfSBmcm9tIFwiLi9kb20tY29udGVudFwiO1xyXG5pbXBvcnQgeyBsb2FkRWRpdGlvbiwgd3JpdGVFZGl0aW9uIH0gZnJvbSBcIi4vZWRpdC10YXNrXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUl0LCByZUluaXRWYWx1ZXMsIHZhbHVlc0VkaXQgfSBmcm9tIFwiLi90YXNrLWZvcm1cIjtcclxuXHJcblxyXG5jb25zdCBFdmVudHMgPSAoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxyXG4gICAgICAgIGNvbnN0IHRhc2tIZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staGVhZGVyID4gaDInKVxyXG4gICAgICAgIGxldCBzaWRlQmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1iYXIgZGl2OmZpcnN0LWNoaWxkIGEsIC5zaWRlLWJhciAjcHJvamVjdHMgYScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaG9tZUJ0bkV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzaWRlQmFySXRlbXMuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2lkZUJhckl0ZW1zWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIHRhc2tIZWFkZXJUZXh0LmlubmVySFRNTCA9ICdUb2RheSdcclxuICAgICAgICAgICAgbG9hZFRhc2tzKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBzaWRlQmFySXRlbXNFdmVudCA9ICgpID0+IHtcclxuICAgICAgICBzaWRlQmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1iYXIgZGl2OmZpcnN0LWNoaWxkIGEsIC5zaWRlLWJhciAjcHJvamVjdHMgYScpXHJcbiAgICAgICAgc2lkZUJhckl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNpZGVCYXJJdGVtcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB0YXNrSGVhZGVyVGV4dC5pbm5lckhUTUwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLnRleHRDb250ZW50XHJcbiAgICAgICAgICAgICAgICBsb2FkVGFza3MoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1iYXInKVxyXG5cclxuICAgIGNvbnN0IG1lbnVCdG5FdmVudCA9ICgpID0+IHtcclxuICAgICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoc2lkZUJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSl7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjMwMHB4IDFmclwiO1xyXG4gICAgICAgICAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjAgMWZyXCI7XHJcbiAgICAgICAgICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgYnRuQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1hZGQnKVxyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcclxuICAgIGNvbnN0IG5ld1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2sgPiBmb3JtJylcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKVxyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpXHJcblxyXG4gICAgY29uc3QgYWRkVGFza0J0bkV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBidG5BZGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNhbmNlbCcpXHJcblxyXG4gICAgY29uc3QgYnRuQ2FuY2VsRXZlbnQgPSAoKSA9PntcclxuICAgICAgICBidG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHsgXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2xvc2VUYXNrKCkgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNsb3NlJylcclxuXHJcbiAgICBjb25zdCBidG5DbG9zZUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7IFxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlVGFzaygpIFxyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHsgXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2xvc2VUYXNrKCkgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGNsaWNrT25UYXNrRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWNrT25UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNsaWNrT25UYXNrLmZvckVhY2godG9EbyA9PiB7XHJcbiAgICAgICAgICAgIHRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b0RvKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudCA9IHRvRG8ucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRvd25BcnJvdyA9IHRvRG8ucXVlcnlTZWxlY3RvcignLmRvd24tYXJyb3cnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGVzY3JpcHRpb25FbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgaWYoZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKXtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICAgICAgZG93bkFycm93LmNsYXNzTGlzdC5hZGQoJ3R1cm4xODAnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgndHVybjE4MCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgdGFza1N0YXRlQnRuRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhc2tTdGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1zdGF0ZScpXHJcbiAgICAgICAgdGFza1N0YXRlQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrT2JqID0gbG9hZEVkaXRpb24oYnRuLmRhdGFzZXQuc3RhdGUpXHJcbiAgICAgICAgICAgICAgICBpZih0YXNrT2JqLmNoZWNrbGlzdCkgdGFza09iai5jaGVja2xpc3QgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZWxzZSB0YXNrT2JqLmNoZWNrbGlzdCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHdyaXRlRWRpdGlvbihidG4uZGF0YXNldC5zdGF0ZSwgdGFza09iailcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBidG5FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1lZGl0JylcclxuICAgIGxldCB0YXNrSW5mbywgdGFza0luZGV4O1xyXG5cclxuICAgIGNvbnN0IGVkaXRFdmVudExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3ZnLmVkaXQtYnRuJylcclxuICAgICAgICBlZGl0QnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ0bkVkaXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICB0YXNrSW5kZXggPSBidG4uZGF0YXNldC50YXNrXHJcbiAgICAgICAgICAgICAgICB0YXNrSW5mbyA9IGxvYWRFZGl0aW9uKHRhc2tJbmRleClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzRWRpdCh0YXNrSW5mbylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBidG5FZGl0RXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgYnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0luZm8pXHJcbiAgICAgICAgICAgIHdyaXRlRWRpdGlvbih0YXNrSW5kZXgsIGNyZWF0ZUl0KCkpXHJcbiAgICAgICAgICAgIHJlSW5pdFZhbHVlcygpO1xyXG4gICAgICAgICAgICBjbG9zZVRhc2soKSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3ZnLmRlbGV0ZS1idG4nKVxyXG4gICAgICAgIGRlbGV0ZUJ0bi5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2soYnRuLmRhdGFzZXQuZGVsZXRlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKVxyXG4gICAgY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvai1idG4nKVxyXG4gICAgY29uc3QgYWRkVGhlUHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvaicpXHJcbiAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qLW5hbWUnKVxyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpXHJcblxyXG4gICAgY29uc3QgYWRkUHJvakJ0bkV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3l1dXUnKVxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFRoZVByb2pCdG5FdmVudD0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFRoZVByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qTmFtZS52YWx1ZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2pOYW1lLnZhbHVlID0gJydcclxuICAgICAgICAgICAgY2xvc2VUYXNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhvbWVCdG5FdmVudCwgXHJcbiAgICAgICAgc2lkZUJhckl0ZW1zRXZlbnQsXHJcbiAgICAgICAgbWVudUJ0bkV2ZW50LFxyXG4gICAgICAgIGFkZFRhc2tCdG5FdmVudCxcclxuICAgICAgICBidG5DYW5jZWxFdmVudCxcclxuICAgICAgICBidG5DbG9zZUV2ZW50LFxyXG4gICAgICAgIG92ZXJsYXlFdmVudCxcclxuICAgICAgICBjbGlja09uVGFza0V2ZW50LFxyXG4gICAgICAgIHRhc2tTdGF0ZUJ0bkV2ZW50LFxyXG4gICAgICAgIGVkaXRFdmVudExpc3RlbmVyLFxyXG4gICAgICAgIGJ0bkVkaXRFdmVudCxcclxuICAgICAgICBkZWxldGVFdmVudExpc3RlbmVyLFxyXG4gICAgICAgIGFkZFByb2pCdG5FdmVudCxcclxuICAgICAgICBhZGRUaGVQcm9qQnRuRXZlbnRcclxuICAgIH1cclxuXHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50czsiLCJleHBvcnQgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XHJcbiAgICBsZXQgc3RvcmFnZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcclxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxyXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcclxuICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXHJcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXHJcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcclxuICAgIH1cclxufSIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbmNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1uYW1lJylcclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbicpXHJcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpXHJcbmNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpXHJcbmNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JylcclxuY29uc3QgdGFza0RvbmVDaGVja2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRvbmUnKVxyXG5cclxubGV0IHRhc2tOYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcclxubGV0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG5sZXQgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxubGV0IHByb2plY3QgPSBwcm9qZWN0U2VsZWN0LnZhbHVlO1xyXG5sZXQgcHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxubGV0IHRhc2tEb25lID0gdGFza0RvbmVDaGVja2J1dHRvbi5jaGVja2VkO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZUluaXRWYWx1ZXMgPSAoKSA9PiB7XHJcbiAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gJydcclxuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJydcclxuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9ICcnXHJcbiAgICBwcm9qZWN0U2VsZWN0LnZhbHVlID0gJydcclxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gJydcclxuICAgIHRhc2tEb25lQ2hlY2tidXR0b24uY2hlY2tlZCA9IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB2YWx1ZXNFZGl0ID0gKHRhc2spID0+IHtcclxuICAgIGxldCB7dGl0bGUsIGRlc2NpcHRpb24sIGRlZmF1dGxEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgY2hlY2tsaXN0fSA9IHRhc2tcclxuXHJcbiAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gdGl0bGU7XHJcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGRlc2NpcHRpb247XHJcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBkZWZhdXRsRGF0ZTtcclxuICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBwcm9qZWN0XHJcbiAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgdGFza0RvbmVDaGVja2J1dHRvbi5jaGVja2VkID0gY2hlY2tsaXN0O1xyXG4gICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlSXQgPSAoKSA9PiB7XHJcbiAgICB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XHJcbiAgICB0YXNrRGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgIGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICBwcm9qZWN0ID0gcHJvamVjdFNlbGVjdC52YWx1ZTtcclxuICAgIHByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcbiAgICB0YXNrRG9uZSA9IHRhc2tEb25lQ2hlY2tidXR0b24uY2hlY2tlZDtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCB0YXNrRG9uZSk7XHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NpcHRpb24sIGR1ZURhdGUsICBwcmlvcml0eSwgcHJvamVjdCwgY2hlY2tsaXN0KXtcclxuICAgICBcclxuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBkdWVEYXRlLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoaW5wdXREYXRlKSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfTtcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kZXNjaXB0aW9uID0gZGVzY2lwdGlvbiBcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBmb3JtYXR0ZWREYXRlXHJcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlRGF0ZS5zcGxpdCgnVCcpWzFdXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxyXG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0XHJcbiAgICAgICAgdGhpcy5kZWZhdXRsRGF0ZSA9IGR1ZURhdGU7XHJcblxyXG4gICAgfVxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXHJcXG4gICAgLS1saW1lLTQwMDogI2EzZTYzNTtcXHJcXG4gICAgLS1saW1lLTYwMDogIzY1YTMwZDtcXHJcXG4gICAgLS1saW1lLTcwMDogIzRkN2MwZjtcXHJcXG4gICAgLS1ncmlzOiAjRkFGQUZBO1xcclxcbiAgICAtLWdyaXMtb3NjdXJvOiAjOGE4YThhO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBkaXYsIG5hdntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9ue1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC43cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ0cHggMTAwcHggMWZyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcbi8qbmF2IGJhciB0b3AgKi9cXHJcXG5cXHJcXG5uYXZ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUtNjAwKTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgICBncmlkLXJvdzogMSAvIDI7XFxyXFxufVxcclxcblxcclxcbm5hdiBhe1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogLjJyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiBhOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi8qbmF2YmFyIHRvcCBsZWZ0IHNpZGUgICovXFxyXFxuXFxyXFxuLm5hdi1se1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWwgPiBkaXZ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgcGFkZGluZzogMCAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sID4gZGl2ID4gaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uYXYtbCAuc2VhcmNoLWlucHV0IGEgc3ZnIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qbmF2YmFyIHRvcCByaWdodCBzaWRlICAqL1xcclxcblxcclxcbi5uYXYtcntcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiB3aGl0ZSBvdmVybGF5ICovXFxyXFxuLm92ZXJsYXl7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjQ0O1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOZXcgdGFzayB3aW5kb3cgKi9cXHJcXG5cXHJcXG4jbmV3LXRhc2t7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyNSU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzVweCAycHggIzAwMDAwMDQwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtID4gZGl2e1xcclxcbiAgICBtYXJnaW46IC4zcmVtIDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gaW5wdXQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gI3Rhc2stbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtID4gZGl2Om50aC1jaGlsZCgzKSwgI25ldy10YXNrID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoNCl7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlblxcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgLmR1ZS1kYXRlLWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIC5leHRyYS1maWVsZHMgPiBkaXYge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIGxhYmVse1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtICNkdWUtZGF0ZXtcXHJcXG4gICAgY29sb3I6ICM1NTU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXRhc2sgZm9ybSAuYnV0dG9uc3tcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idG4tZ3JlZW57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUtNjAwKTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG4tZ3JlZW46aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUtNzAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYW5jZWx7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNhbmNlbDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogbmV3IHByb2plY3Qgd2luZG93ICovXFxyXFxuI25ldy1wcm9qZWN0e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggMnB4ICMwMDAwMDA0MDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0IGZvcm17XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dDpmb2N1c3tcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0ID4gZm9ybSAucHJvai1idG5ze1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXFxyXFxufVxcclxcblxcclxcbi8qIHNpZGUgYmFyICovXFxyXFxuXFxyXFxuLnNpZGUtYmFye1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICBwYWRkaW5nOiAgMnJlbTtcXHJcXG4gICAgdG9wOiA0NHB4O1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3Jpcyk7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciA+IGRpdiA+IGEsIC50YXNrLWhlYWRlciBhLCAuc2lkZS1iYXIgI3Byb2plY3RzIGEge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzAwMDsgICAgXFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciA+IGRpdiA+IGE6aG92ZXIsLnRhc2staGVhZGVyIGE6aG92ZXIsIC5zaWRlLWJhciAuYWN0aXZlLCAuc2lkZS1iYXIgI3Byb2plY3RzIGE6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwODtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciAjY3JlYXRlZC1wcm9qZWN0c3tcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgI2NyZWF0ZWQtcHJvamVjdHMgIGE6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgbWFyZ2luOiAycHggMnJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpZGUtYmFyICNwcm9qZWN0c3tcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciAjcHJvamVjdHMgYXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKnRhc2sgaGVhZGVyICovXFxyXFxuLnRhc2staGVhZGVye1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi8qIHRhc2sgc3BhY2UgKi9cXHJcXG4udGFza3N7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLyplYWNoIHRhc2sqL1xcclxcbi50YXNrIHtcXHJcXG4gICAgbWFyZ2luOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrID4gZGl2e1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5kaXNwbGF5LWRhdGV7XFxyXFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmNoZWNrLWJ0biB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLnRhc2stZGVzY3JpcHRpb257XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxuICAgIG1hcmdpbjogMCAzcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAuY29tcGxldGVkLXRhc2t7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5tb2QtYnRucyBzdmc6aG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmRvd24tYXJyb3d7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcbi8qIGhpZGUgY2xhc3MgKi9cXHJcXG5cXHJcXG4uaGlkZXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnR1cm4xODB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTOztBQUViOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixPQUFPO0lBQ1AsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUEseUJBQXlCOztBQUV6QjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLDBCQUEwQjs7QUFFMUI7SUFDSTtBQUNKOzs7QUFHQSxrQkFBa0I7QUFDbEI7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsVUFBVTtBQUNkOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxvQkFBb0I7QUFDeEI7OztBQUdBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUdBLHVCQUF1QjtBQUN2QjtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSTtBQUNKOztBQUVBLGFBQWE7O0FBRWI7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsTUFBTTtBQUNWOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7Ozs7QUFJQSxlQUFlO0FBQ2Y7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBLGVBQWU7QUFDZjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOzs7QUFHQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLGVBQWU7O0FBRWY7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICAgLS1saW1lLTQwMDogI2EzZTYzNTtcXHJcXG4gICAgLS1saW1lLTYwMDogIzY1YTMwZDtcXHJcXG4gICAgLS1saW1lLTcwMDogIzRkN2MwZjtcXHJcXG4gICAgLS1ncmlzOiAjRkFGQUZBO1xcclxcbiAgICAtLWdyaXMtb3NjdXJvOiAjOGE4YThhO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBkaXYsIG5hdntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9ue1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC43cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ0cHggMTAwcHggMWZyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcbi8qbmF2IGJhciB0b3AgKi9cXHJcXG5cXHJcXG5uYXZ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUtNjAwKTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgICBncmlkLXJvdzogMSAvIDI7XFxyXFxufVxcclxcblxcclxcbm5hdiBhe1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogLjJyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiBhOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi8qbmF2YmFyIHRvcCBsZWZ0IHNpZGUgICovXFxyXFxuXFxyXFxuLm5hdi1se1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWwgPiBkaXZ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgcGFkZGluZzogMCAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sID4gZGl2ID4gaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uYXYtbCAuc2VhcmNoLWlucHV0IGEgc3ZnIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qbmF2YmFyIHRvcCByaWdodCBzaWRlICAqL1xcclxcblxcclxcbi5uYXYtcntcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiB3aGl0ZSBvdmVybGF5ICovXFxyXFxuLm92ZXJsYXl7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjQ0O1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOZXcgdGFzayB3aW5kb3cgKi9cXHJcXG5cXHJcXG4jbmV3LXRhc2t7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyNSU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzVweCAycHggIzAwMDAwMDQwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtID4gZGl2e1xcclxcbiAgICBtYXJnaW46IC4zcmVtIDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gaW5wdXQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gI3Rhc2stbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtID4gZGl2Om50aC1jaGlsZCgzKSwgI25ldy10YXNrID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoNCl7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlblxcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgLmR1ZS1kYXRlLWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIC5leHRyYS1maWVsZHMgPiBkaXYge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIGxhYmVse1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtICNkdWUtZGF0ZXtcXHJcXG4gICAgY29sb3I6ICM1NTU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXRhc2sgZm9ybSAuYnV0dG9uc3tcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idG4tZ3JlZW57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUtNjAwKTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG4tZ3JlZW46aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUtNzAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYW5jZWx7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNhbmNlbDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogbmV3IHByb2plY3Qgd2luZG93ICovXFxyXFxuI25ldy1wcm9qZWN0e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggMnB4ICMwMDAwMDA0MDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0IGZvcm17XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dDpmb2N1c3tcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0ID4gZm9ybSAucHJvai1idG5ze1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXFxyXFxufVxcclxcblxcclxcbi8qIHNpZGUgYmFyICovXFxyXFxuXFxyXFxuLnNpZGUtYmFye1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICBwYWRkaW5nOiAgMnJlbTtcXHJcXG4gICAgdG9wOiA0NHB4O1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3Jpcyk7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciA+IGRpdiA+IGEsIC50YXNrLWhlYWRlciBhLCAuc2lkZS1iYXIgI3Byb2plY3RzIGEge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzAwMDsgICAgXFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciA+IGRpdiA+IGE6aG92ZXIsLnRhc2staGVhZGVyIGE6aG92ZXIsIC5zaWRlLWJhciAuYWN0aXZlLCAuc2lkZS1iYXIgI3Byb2plY3RzIGE6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwODtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciAjY3JlYXRlZC1wcm9qZWN0c3tcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgI2NyZWF0ZWQtcHJvamVjdHMgIGE6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgbWFyZ2luOiAycHggMnJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpZGUtYmFyICNwcm9qZWN0c3tcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciAjcHJvamVjdHMgYXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKnRhc2sgaGVhZGVyICovXFxyXFxuLnRhc2staGVhZGVye1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi8qIHRhc2sgc3BhY2UgKi9cXHJcXG4udGFza3N7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLyplYWNoIHRhc2sqL1xcclxcbi50YXNrIHtcXHJcXG4gICAgbWFyZ2luOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrID4gZGl2e1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5kaXNwbGF5LWRhdGV7XFxyXFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmNoZWNrLWJ0biB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLnRhc2stZGVzY3JpcHRpb257XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxuICAgIG1hcmdpbjogMCAzcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAuY29tcGxldGVkLXRhc2t7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5tb2QtYnRucyBzdmc6aG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmRvd24tYXJyb3d7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcbi8qIGhpZGUgY2xhc3MgKi9cXHJcXG5cXHJcXG4uaGlkZXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnR1cm4xODB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0FmdGVyKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS1uZXcnO1xyXG5pbXBvcnQgeyBsb2FkUHJvamVjdHMsIGxvYWRUYXNrcyB9IGZyb20gJy4vZG9tLWNvbnRlbnQnO1xyXG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9jYWwgc3RvcmFnZSBmb3VuZCcpXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ25vIGxvY2FsIHN0b3JhZ2UgYXZhaWxhYmxlJylcclxuICB9XHJcblxyXG5sb2FkVGFza3MoKTtcclxubG9hZFByb2plY3RzKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNsb3NlVGFzayIsImxvYWRUYXNrcyIsImNyZWF0ZUl0IiwicmVJbml0VmFsdWVzIiwiYXJyVGVtcG9yYWwiLCJidG5BZGRUYXNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVUYXNrIiwibmV3VGFzayIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic3RvcmFnZWRUYXNrcyIsIkpTT04iLCJwYXJzZSIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibG9hZFByb2plY3RzIiwiY3JlYXRlUHJvamVjdCIsInByb2plY3ROYW1lIiwic3RvcmFnZWRQcm9qZWN0IiwiZ2V0UHJvamVjdCIsImRlbGV0ZVRhc2siLCJpbmRleCIsInNwbGljZSIsImlzVG9kYXkiLCJpc0FmdGVyIiwiRXZlbnRzIiwic2lkZUJhckl0ZW1zRXZlbnQiLCJ0YXNrIiwicXVlcnlTZWxlY3RvciIsInRhc2tIZWFkZXJUZXh0Iiwic2lkZUJhckl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsImhvbWVCdG5FdmVudCIsIm1lbnVCdG5FdmVudCIsIm5ld1Byb2plY3QiLCJvdmVybGF5IiwibmV3VGFza1dpbmRvdyIsImJ0bkFkZCIsImJ0bkVkaXQiLCJhZGRUYXNrQnRuRXZlbnQiLCJwcm9qZWN0Rm9ybSIsImJ0bkNhbmNlbEV2ZW50IiwiYnRuQ2xvc2VFdmVudCIsIm92ZXJsYXlFdmVudCIsInRhc2tTdG9yZWQiLCJ0YXNrQ29udGVudCIsInJlZHVjZSIsImFjYyIsImkiLCJ0aXRsZSIsImRlc2NpcHRpb24iLCJkdWVEYXRlIiwiZHVlVGltZSIsInByaW9yaXR5IiwicHJvamVjdCIsImNoZWNrbGlzdCIsInRyaW0iLCJEYXRlIiwic2hvd0NoZWNrZWQiLCJkb3duQXJyb3ciLCJlZGl0U3ZnIiwic2hvd1ByaW9yaXR5IiwidHJhc2hTdmciLCJjbGlja09uVGFza0V2ZW50IiwidGFza1N0YXRlQnRuRXZlbnQiLCJlZGl0RXZlbnRMaXN0ZW5lciIsImRlbGV0ZUV2ZW50TGlzdGVuZXIiLCJwcm9qZWN0c0RpdiIsInByb2plY3RzT3B0aW9ucyIsInByb2plY3RzIiwiZm9yRWFjaCIsInByb2oiLCJidG5FZGl0RXZlbnQiLCJkaXNwbGF5UHJpb3JpdHkiLCJkaXNwbGF5Q2hlY2tlZCIsImFkZFByb2pCdG5FdmVudCIsImFkZFRoZVByb2pCdG5FdmVudCIsImxvYWRFZGl0aW9uIiwid3JpdGVFZGl0aW9uIiwiZWRpdGVkVGFzayIsInZhbHVlc0VkaXQiLCJob21lQnRuIiwicmVtb3ZlIiwiaXRlbSIsInRleHRDb250ZW50IiwibWVudUJ0biIsInNpZGVCYXIiLCJjb250YWlucyIsImNvbnRlbnQiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJhZGRUYXNrQnRuIiwiYnRuQ2FuY2VsIiwiYnRuQ2xvc2UiLCJjbGlja09uVGFzayIsInRvRG8iLCJkZXNjcmlwdGlvbkVsZW1lbnQiLCJ0YXNrU3RhdGVCdG5zIiwiYnRuIiwidGFza09iaiIsImRhdGFzZXQiLCJzdGF0ZSIsInRhc2tJbmZvIiwidGFza0luZGV4IiwiZWRpdEJ0bnMiLCJkZWxldGVCdG4iLCJkZWxldGUiLCJhZGRQcm9qQnRuIiwiYWRkVGhlUHJvakJ0biIsInByb2pOYW1lIiwidmFsdWUiLCJzdG9yYWdlQXZhaWxhYmxlIiwidHlwZSIsInN0b3JhZ2UiLCJ4IiwicmVtb3ZlSXRlbSIsIkRPTUV4Y2VwdGlvbiIsImNvZGUiLCJuYW1lIiwibGVuZ3RoIiwiVGFzayIsInRhc2tOYW1lSW5wdXQiLCJ0YXNrRGVzY3JpcHRpb25JbnB1dCIsImR1ZURhdGVJbnB1dCIsInByb2plY3RTZWxlY3QiLCJwcmlvcml0eVNlbGVjdCIsInRhc2tEb25lQ2hlY2tidXR0b24iLCJ0YXNrTmFtZSIsInRhc2tEZXNjcmlwdGlvbiIsInRhc2tEb25lIiwiY2hlY2tlZCIsImRlZmF1dGxEYXRlIiwiY29uc3RydWN0b3IiLCJpbnB1dERhdGUiLCJzcGxpdCIsImRhdGUiLCJvcHRpb25zIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=