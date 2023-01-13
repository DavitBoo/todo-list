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
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _delete_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-task */ "./src/delete-task.js");
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");
/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-task */ "./src/edit-task.js");
/* harmony import */ var _task_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-form */ "./src/task-form.js");





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
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_2__.loadTasks)();
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
        (0,_dom_content__WEBPACK_IMPORTED_MODULE_2__.loadTasks)();
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
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_2__.closeTask)();
    });
  };
  const btnClose = document.getElementById('btn-close');
  const btnCloseEvent = () => {
    btnClose.addEventListener('click', e => {
      e.preventDefault();
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_2__.closeTask)();
    });
  };
  const overlayEvent = () => {
    overlay.addEventListener('click', e => {
      e.preventDefault();
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_2__.closeTask)();
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
        let taskObj = (0,_edit_task__WEBPACK_IMPORTED_MODULE_3__.loadEdition)(btn.dataset.state);
        if (taskObj.checklist) taskObj.checklist = false;else taskObj.checklist = true;
        (0,_edit_task__WEBPACK_IMPORTED_MODULE_3__.writeEdition)(btn.dataset.state, taskObj);
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
        taskInfo = (0,_edit_task__WEBPACK_IMPORTED_MODULE_3__.loadEdition)(taskIndex);
        (0,_task_form__WEBPACK_IMPORTED_MODULE_4__.valuesEdit)(taskInfo);
      });
    });
  };
  const btnEditEvent = () => {
    btnEdit.addEventListener('click', e => {
      e.preventDefault();
      console.log(taskInfo);
      (0,_edit_task__WEBPACK_IMPORTED_MODULE_3__.writeEdition)(taskIndex, (0,_task_form__WEBPACK_IMPORTED_MODULE_4__.createIt)());
      (0,_task_form__WEBPACK_IMPORTED_MODULE_4__.reInitValues)();
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_2__.closeTask)();
    });
  };
  const deleteEventListener = () => {
    const deleteBtn = document.querySelectorAll('svg.delete-btn');
    deleteBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        (0,_delete_task__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(btn.dataset.delete);
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
      (0,_create_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(projName.value);
      projName.value = '';
      (0,_dom_content__WEBPACK_IMPORTED_MODULE_2__.closeTask)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxTQUFTLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLE9BQU8sS0FB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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQztBQUNrQjtBQUNMO0FBRTlCO0FBRXJCLElBQUk0RCxnRUFBZ0IsQ0FBQyxjQUFjLENBQUMsRUFBRTtFQUNsQzNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDO0FBQ3BDLENBQUMsTUFDSTtFQUNIRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztBQUMzQztBQUVGaEIsdURBQVMsRUFBRTtBQUNYdUIsMERBQVksRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlLW5ldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kZWxldGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb20tY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay1mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNBZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9zZVRhc2ssIGxvYWRUYXNrcyB9IGZyb20gXCIuL2RvbS1jb250ZW50XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUl0LCByZUluaXRWYWx1ZXMgfSBmcm9tIFwiLi90YXNrLWZvcm1cIjtcclxuXHJcblxyXG5sZXQgYXJyVGVtcG9yYWwgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbGVmb25vIGVuIG1vZG8gYXZpw7NuXCIsXHJcbiAgICAgICAgXCJkZXNjaXB0aW9uXCI6IFwiSGFzdGEgbGFzIDkgbm8gY29uZWN0YXIgZWwgbcOzdmlsXCIsXHJcbiAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMy0wMS0zMVQyMjo0NFwiLFxyXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJoaWdoXCIsXHJcbiAgICAgICAgXCJwcm9qZWN0XCI6IFwiXCIsXHJcbiAgICAgICAgXCJjaGVja2xpc3RcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiRXN0aXJhclwiLFxyXG4gICAgICAgIFwiZGVzY2lwdGlvblwiOiBcIkVzdGlyYW1pZW50b3MgY2FsaSBtb3ZlXCIsXHJcbiAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMy0wMi0yOFQyMjo0NFwiLFxyXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJtaWRkbGVcIixcclxuICAgICAgICBcInByb2plY3RcIjogXCJcIixcclxuICAgICAgICBcImNoZWNrbGlzdFwiOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiMTYgbWluIG1pbmRmdWxsbmVzc1wiLFxyXG4gICAgICAgIFwiZGVzY2lwdGlvblwiOiBcIkVzdGlyYW1pZW50b3MgY2FsaSBtb3ZlXCIsXHJcbiAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMy0wMS0wNFQwODo0NFwiLFxyXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJsb3dcIixcclxuICAgICAgICBcInByb2plY3RcIjogXCJcIixcclxuICAgICAgICBcImNoZWNrbGlzdFwiOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiTHV0aGVyaWFcIixcclxuICAgICAgICBcImRlc2NpcHRpb25cIjogXCJVbmEgaG9yYSBhIG1pcyBndWl0YXJyYXNcIixcclxuICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIzLTAxLTE4VDE4OjAwXCIsXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgIFwicHJvamVjdFwiOiBcIlwiLFxyXG4gICAgICAgIFwiY2hlY2tsaXN0XCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wcmFyIHRvYWxsYSBqYXBvbmVzYVwiLFxyXG4gICAgICAgIFwiZGVzY2lwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjMtMDEtMDVUMTg6MDBcIixcclxuICAgICAgICBcInByaW9yaXR5XCI6IFwibG93XCIsXHJcbiAgICAgICAgXCJwcm9qZWN0XCI6IFwiXCIsXHJcbiAgICAgICAgXCJjaGVja2xpc3RcIjogZmFsc2VcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWFkZCcpXHJcblxyXG5idG5BZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjcmVhdGVUYXNrKCk7XHJcbiAgICBjbG9zZVRhc2soKTtcclxufSlcclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiAge1xyXG5cclxuICAgIGxldCBuZXdUYXNrID0gY3JlYXRlSXQoKTtcclxuXHJcbiAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hleScpXHJcbiAgICAgICAgbGV0IHN0b3JhZ2VkVGFza3MgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzaycpKVxyXG4gICAgICAgIHN0b3JhZ2VkVGFza3MucHVzaChuZXdUYXNrKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZWRUYXNrcykpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzaycsIEpTT04uc3RyaW5naWZ5KFtuZXdUYXNrXSkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlSW5pdFZhbHVlcygpO1xyXG4gICAgbG9hZFRhc2tzKCk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtjcmVhdGVUYXNrLCBhcnJUZW1wb3JhbH07XHJcblxyXG4iLCJpbXBvcnQgeyBsb2FkUHJvamVjdHMgfSBmcm9tIFwiLi9kb20tY29udGVudFwiXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdCA9IHByb2plY3ROYW1lID0+ICB7XHJcblxyXG4gICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKXtcclxuXHJcbiAgICAgICAgbGV0IHN0b3JhZ2VkUHJvamVjdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxyXG4gICAgICAgIHN0b3JhZ2VkUHJvamVjdC5wdXNoKHByb2plY3ROYW1lKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VkUHJvamVjdCkpXHJcblxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KFtwcm9qZWN0TmFtZV0pKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJvamVjdHMoKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcclxuICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSl7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgbG9hZFRhc2tzIH0gZnJvbSBcIi4vZG9tLWNvbnRlbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBsZXQgc3RvcmFnZWRUYXNrcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpXHJcbiAgICBzdG9yYWdlZFRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzaycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VkVGFza3MpKVxyXG5cclxuICAgIGxvYWRUYXNrcygpO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGdldFByb2plY3QgfSBmcm9tICcuL2NyZWF0ZS1wcm9qZWN0J1xyXG5pbXBvcnQgeyBpc1RvZGF5LCBpc0FmdGVyIH0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMnXHJcblxyXG5FdmVudHMuc2lkZUJhckl0ZW1zRXZlbnQoKVxyXG5cclxuY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXHJcblxyXG5jb25zdCB0YXNrSGVhZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWhlYWRlciA+IGgyJylcclxubGV0IHNpZGVCYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWJhciBkaXY6Zmlyc3QtY2hpbGQgYSwgLnNpZGUtYmFyICNwcm9qZWN0cyBhJylcclxuXHJcbnRhc2tIZWFkZXJUZXh0LmlubmVySFRNTCA9ICdUb2RheSdcclxuc2lkZUJhckl0ZW1zWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG5FdmVudHMuaG9tZUJ0bkV2ZW50KCk7XHJcblxyXG5FdmVudHMubWVudUJ0bkV2ZW50KCk7XHJcblxyXG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJylcclxuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpXHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXHJcbmNvbnN0IG5ld1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2sgPiBmb3JtJylcclxuY29uc3QgYnRuQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1hZGQnKVxyXG5jb25zdCBidG5FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1lZGl0JylcclxuXHJcblxyXG5FdmVudHMuYWRkVGFza0J0bkV2ZW50KCk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNsb3NlVGFzayA9ICgpID0+IHtcclxuICAgIGJ0bkFkZC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIGJ0bkVkaXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG59XHJcblxyXG5FdmVudHMuYnRuQ2FuY2VsRXZlbnQoKTtcclxuRXZlbnRzLmJ0bkNsb3NlRXZlbnQoKTtcclxuRXZlbnRzLm92ZXJsYXlFdmVudCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRUYXNrcyA9ICgpID0+IHtcclxuICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzaycpKXtcclxuICAgICAgICBsZXQgdGFza1N0b3JlZCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpXHJcbiAgICAgICAgbGV0IHRhc2tDb250ZW50ID0gdGFza1N0b3JlZC5yZWR1Y2UoKGFjYywgdGFzaywgaSkgPT4ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQge3RpdGxlLCBkZXNjaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSwgcHJvamVjdCwgY2hlY2tsaXN0fSA9IHRhc2tcclxuXHJcbiAgICAgICAgICAgIGlmKFxyXG5cclxuICAgICAgICAgICAgICAgIHRhc2tIZWFkZXJUZXh0LmlubmVySFRNTC50cmltKCkgPT09ICdJbmJveCcgJiYgY2hlY2tsaXN0ID09PSBmYWxzZSB8fFxyXG4gICAgICAgICAgICAgICAgdGFza0hlYWRlclRleHQuaW5uZXJIVE1MLnRyaW0oKSA9PT0gJ1RvZGF5JyAmJiBpc1RvZGF5KG5ldyBEYXRlKGR1ZURhdGUpKSB8fFxyXG4gICAgICAgICAgICAgICAgdGFza0hlYWRlclRleHQuaW5uZXJIVE1MLnRyaW0oKSA9PT0gJ1VwY29taW5nJyAmJiBpc0FmdGVyKG5ldyBEYXRlKGR1ZURhdGUpLCBuZXcgRGF0ZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgdGFza0hlYWRlclRleHQuaW5uZXJIVE1MLnRyaW0oKSA9PT0gJ0ZpbmlzaGVkIG5vdCBkZWxldGVkJyAmJiBjaGVja2xpc3QgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgIHRhc2tIZWFkZXJUZXh0LmlubmVySFRNTC50cmltKCkgPT09IHByb2plY3RcclxuICAgIFxyXG4gICAgICAgICAgICApe1xyXG5cclxuICAgICAgICAgICAgICAgIGFjYyArPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiIGRhdGEtdGFzaz1cIiR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCAgJHtjaGVja2xpc3QgPyBgY29tcGxldGVkLXRhc2tgOiBgYH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c2hvd0NoZWNrZWQoY2hlY2tsaXN0LCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Rvd25BcnJvdyhpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBtb2QtYnRuc1wiPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZWRpdFN2ZyhpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c2hvd1ByaW9yaXR5KHByaW9yaXR5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dHJhc2hTdmcoaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkdWVEYXRlfSBhdCAke2R1ZVRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uIGhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Rlc2NpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFjY1xyXG4gICAgICAgIH0sICcnKVxyXG5cclxuICAgICAgICB0YXNrLmlubmVySFRNTCA9IHRhc2tDb250ZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIEV2ZW50cy5jbGlja09uVGFza0V2ZW50KCk7XHJcbiAgICAgICAgRXZlbnRzLnRhc2tTdGF0ZUJ0bkV2ZW50KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgRXZlbnRzLmVkaXRFdmVudExpc3RlbmVyKCk7XHJcbiAgICBFdmVudHMuZGVsZXRlRXZlbnRMaXN0ZW5lcigpO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXHJcbmNvbnN0IHByb2plY3RzT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JylcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBwcm9qZWN0c0Rpdi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgcHJvamVjdHNPcHRpb25zLmlubmVySFRNTCA9IGA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQ+U2VsZWN0IFByb2plY3Q8L29wdGlvbj5gXHJcbiAgICBsZXQgcHJvamVjdHMgPSBnZXRQcm9qZWN0KClcclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2ogPT4ge1xyXG4gICAgICAgIHByb2plY3RzRGl2LmlubmVySFRNTCArPSBgPGEgaHJlZj1cIlwiPjxkaXYgY2xhc3M9XCJwcm9qLW1hcmNcIj4ke3Byb2p9PC9kaXY+PC9hPmBcclxuICAgICAgICBwcm9qZWN0c09wdGlvbnMuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qfVwiPiR7cHJvan08L29wdGlvbj5gXHJcbiAgICB9KVxyXG4gICAgc2lkZUJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtYmFyIGRpdjpmaXJzdC1jaGlsZCBhLCAuc2lkZS1iYXIgI3Byb2plY3RzIGEnKVxyXG4gICAgY29uc29sZS5sb2coc2lkZUJhckl0ZW1zKVxyXG4gICAgRXZlbnRzLnNpZGVCYXJJdGVtc0V2ZW50KCk7XHJcbn1cclxuXHJcbkV2ZW50cy5idG5FZGl0RXZlbnQoKTtcclxuXHJcbmNvbnN0IHNob3dQcmlvcml0eSA9IHByaW9yaXR5ID0+IHtcclxuICAgIGxldCBkaXNwbGF5UHJpb3JpdHkgPSBgJHtwcmlvcml0eT09PSdoaWdoJz8gYDxzdmcgc3R5bGU9XCJ3aWR0aDoyMHB4O2hlaWdodDoyMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cInJlZFwiIGQ9XCJNMTQuNCw2TDE0LDRINVYyMUg3VjE0SDEyLjZMMTMsMTZIMjBWNkgxNC40WlwiIC8+XHJcbjwvc3ZnPmA6IChwcmlvcml0eT09PSdtaWRkbGUnPyBgPHN2ZyBzdHlsZT1cIndpZHRoOjIwcHg7aGVpZ2h0OjIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbjxwYXRoIGZpbGw9XCJvcmFuZ2VcIiBkPVwiTTE0LjQsNkwxNCw0SDVWMjFIN1YxNEgxMi42TDEzLDE2SDIwVjZIMTQuNFpcIiAvPlxyXG48L3N2Zz5gIDogYDxzdmcgc3R5bGU9XCJ3aWR0aDoyMHB4O2hlaWdodDoyMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG48cGF0aCBmaWxsPVwiZ3JlZW5cIiBkPVwiTTE0LjQsNkwxNCw0SDVWMjFIN1YxNEgxMi42TDEzLDE2SDIwVjZIMTQuNFpcIiAvPlxyXG48L3N2Zz5gKX1gXHJcbiAgICByZXR1cm4gZGlzcGxheVByaW9yaXR5XHJcbn1cclxuXHJcbmNvbnN0IHNob3dDaGVja2VkID0gKGNoZWNrbGlzdCwgaSkgPT4ge1xyXG4gICAgbGV0IGRpc3BsYXlDaGVja2VkID0gYDxzdmcgY2xhc3M9XCJ0YXNrLXN0YXRlXCIgZGF0YS1zdGF0ZT1cIiR7aX1cIiBzdHlsZT1cIndpZHRoOjE2cHg7aGVpZ2h0OjE2cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+ICR7Y2hlY2tsaXN0ID8gYFxyXG4gICAgICAgIDxwYXRoIGZpbGw9XCJncmVlblwiIGQ9XCJNOSwyMC40MkwyLjc5LDE0LjIxTDUuNjIsMTEuMzhMOSwxNC43N0wxOC44OCw0Ljg4TDIxLjcxLDcuNzFMOSwyMC40MlpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPmAgOiBgXHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5LDNINUMzLjg5LDMgMywzLjg5IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUMyMSwzLjg5IDIwLjEsMyAxOSwzTTE5LDVWMTlINVY1SDE5WlwiIC8+XHJcbiAgICAgICAgYH08L3N2Zz5gXHJcbiAgICByZXR1cm4gZGlzcGxheUNoZWNrZWRcclxufVxyXG5cclxuY29uc3QgZWRpdFN2ZyA9IGkgPT4ge1xyXG4gICAgcmV0dXJuIGA8c3ZnIGNsYXNzPVwiZWRpdC1idG5cIiBkYXRhLXRhc2s9XCIke2l9XCIgc3R5bGU9XCJ3aWR0aDoyMHB4O2hlaWdodDoyMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjAgMkg0QzIuOSAyIDIgMi45IDIgNFYxNkMyIDE3LjExIDIuOSAxOCA0IDE4SDhMMTIgMjJMMTYgMThIMjBDMjEuMTEgMTggMjIgMTcuMTEgMjIgMTZWNEMyMiAyLjkgMjEuMTEgMiAyMCAyTTkuMDggMTVIN1YxMi45MUwxMy4xNyA2LjcyTDE1LjI0IDguOEw5LjA4IDE1TTE2Ljg0IDcuMkwxNS44MyA4LjIxTDEzLjc2IDYuMThMMTQuNzcgNS4xNkMxNC45NyA0Ljk1IDE1LjMxIDQuOTQgMTUuNTUgNS4xNkwxNi44NCA2LjQxQzE3LjA1IDYuNjIgMTcuMDYgNi45NiAxNi44NCA3LjJaXCIgLz5cclxuPC9zdmc+YFxyXG59XHJcblxyXG5jb25zdCB0cmFzaFN2ZyA9IGkgPT4ge1xyXG4gICAgcmV0dXJuIGA8c3ZnIGNsYXNzPVwiZGVsZXRlLWJ0blwiIGRhdGEtZGVsZXRlPVwiJHtpfVwiIHN0eWxlPVwid2lkdGg6MjBweDtoZWlnaHQ6MjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5LDRIMTUuNUwxNC41LDNIOS41TDguNSw0SDVWNkgxOU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlaXCIgLz5cclxuPC9zdmc+YFxyXG59XHJcblxyXG5cclxuY29uc3QgZG93bkFycm93ID0gaSA9PiB7XHJcbiAgICByZXR1cm5gPHN2ZyBjbGFzcz1cImRvd24tYXJyb3dcIiBkYXRhLWFycm93PVwiJHtpfVwiIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlwiIC8+XHJcbjwvc3ZnPmBcclxufVxyXG5cclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJylcclxuXHJcbkV2ZW50cy5hZGRQcm9qQnRuRXZlbnQoKVxyXG5FdmVudHMuYWRkVGhlUHJvakJ0bkV2ZW50KClcclxuXHJcbiIsImltcG9ydCB7IGxvYWRUYXNrcyB9IGZyb20gXCIuL2RvbS1jb250ZW50XCJcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkRWRpdGlvbiA9IChpbmRleCkgPT4ge1xyXG4gICAgbGV0IHN0b3JhZ2VkVGFza3MgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzaycpKVxyXG4gICAgcmV0dXJuIHN0b3JhZ2VkVGFza3NbaW5kZXhdXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgd3JpdGVFZGl0aW9uID0gKGluZGV4LCBlZGl0ZWRUYXNrKSA9PiB7XHJcbiAgICBsZXQgc3RvcmFnZWRUYXNrcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpXHJcbiAgICBzdG9yYWdlZFRhc2tzW2luZGV4XSA9IGVkaXRlZFRhc2tcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZWRUYXNrcykpXHJcblxyXG4gICAgbG9hZFRhc2tzKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi9kZWxldGUtdGFza1wiO1xyXG5pbXBvcnQgeyBjbG9zZVRhc2ssIGxvYWRUYXNrcyB9IGZyb20gXCIuL2RvbS1jb250ZW50XCI7XHJcbmltcG9ydCB7IGxvYWRFZGl0aW9uLCB3cml0ZUVkaXRpb24gfSBmcm9tIFwiLi9lZGl0LXRhc2tcIjtcclxuaW1wb3J0IHsgY3JlYXRlSXQsIHJlSW5pdFZhbHVlcywgdmFsdWVzRWRpdCB9IGZyb20gXCIuL3Rhc2stZm9ybVwiO1xyXG5cclxuY29uc3QgRXZlbnRzID0gKCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcclxuICAgICAgICBjb25zdCB0YXNrSGVhZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWhlYWRlciA+IGgyJylcclxuICAgICAgICBsZXQgc2lkZUJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtYmFyIGRpdjpmaXJzdC1jaGlsZCBhLCAuc2lkZS1iYXIgI3Byb2plY3RzIGEnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhvbWVCdG5FdmVudCA9ICgpID0+IHtcclxuICAgICAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2lkZUJhckl0ZW1zLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNpZGVCYXJJdGVtc1sxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB0YXNrSGVhZGVyVGV4dC5pbm5lckhUTUwgPSAnVG9kYXknXHJcbiAgICAgICAgICAgIGxvYWRUYXNrcygpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgc2lkZUJhckl0ZW1zRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkZUJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtYmFyIGRpdjpmaXJzdC1jaGlsZCBhLCAuc2lkZS1iYXIgI3Byb2plY3RzIGEnKVxyXG4gICAgICAgIHNpZGVCYXJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzaWRlQmFySXRlbXMuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgdGFza0hlYWRlclRleHQuaW5uZXJIVE1MID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdkaXYnKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgbG9hZFRhc2tzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtYmFyJylcclxuXHJcbiAgICBjb25zdCBtZW51QnRuRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKHNpZGVCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpe1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIzMDBweCAxZnJcIjtcclxuICAgICAgICAgICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIwIDFmclwiO1xyXG4gICAgICAgICAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYWRkJylcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXHJcbiAgICBjb25zdCBuZXdUYXNrV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrID4gZm9ybScpXHJcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJylcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKVxyXG5cclxuICAgIGNvbnN0IGFkZFRhc2tCdG5FdmVudCA9ICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYnRuQWRkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICBuZXdUYXNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnRuQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jYW5jZWwnKVxyXG5cclxuICAgIGNvbnN0IGJ0bkNhbmNlbEV2ZW50ID0gKCkgPT57XHJcbiAgICAgICAgYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7IFxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlVGFzaygpIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbG9zZScpXHJcblxyXG4gICAgY29uc3QgYnRuQ2xvc2VFdmVudCA9ICgpID0+IHtcclxuICAgICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4geyBcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjbG9zZVRhc2soKSBcclxuICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG92ZXJsYXlFdmVudCA9ICgpID0+IHtcclxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7IFxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlVGFzaygpIFxyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBjbGlja09uVGFza0V2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjbGlja09uVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcclxuICAgICAgICBcclxuICAgICAgICBjbGlja09uVGFzay5mb3JFYWNoKHRvRG8gPT4ge1xyXG4gICAgICAgICAgICB0b0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9EbylcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSB0b0RvLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJylcclxuICAgICAgICAgICAgICAgIGxldCBkb3duQXJyb3cgPSB0b0RvLnF1ZXJ5U2VsZWN0b3IoJy5kb3duLWFycm93JylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uRWxlbWVudClcclxuICAgICAgICAgICAgICAgIGlmKGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvd25BcnJvdy5jbGFzc0xpc3QuYWRkKCd0dXJuMTgwJylcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICAgICAgZG93bkFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ3R1cm4xODAnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHRhc2tTdGF0ZUJ0bkV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrU3RhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stc3RhdGUnKVxyXG4gICAgICAgIHRhc2tTdGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza09iaiA9IGxvYWRFZGl0aW9uKGJ0bi5kYXRhc2V0LnN0YXRlKVxyXG4gICAgICAgICAgICAgICAgaWYodGFza09iai5jaGVja2xpc3QpIHRhc2tPYmouY2hlY2tsaXN0ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGVsc2UgdGFza09iai5jaGVja2xpc3QgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB3cml0ZUVkaXRpb24oYnRuLmRhdGFzZXQuc3RhdGUsIHRhc2tPYmopXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgYnRuRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZWRpdCcpXHJcbiAgICBsZXQgdGFza0luZm8sIHRhc2tJbmRleDtcclxuXHJcbiAgICBjb25zdCBlZGl0RXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2Zy5lZGl0LWJ0bicpXHJcbiAgICAgICAgZWRpdEJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBidG5FZGl0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgdGFza0luZGV4ID0gYnRuLmRhdGFzZXQudGFza1xyXG4gICAgICAgICAgICAgICAgdGFza0luZm8gPSBsb2FkRWRpdGlvbih0YXNrSW5kZXgpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhbHVlc0VkaXQodGFza0luZm8pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgYnRuRWRpdEV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGJ0bkVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tJbmZvKVxyXG4gICAgICAgICAgICB3cml0ZUVkaXRpb24odGFza0luZGV4LCBjcmVhdGVJdCgpKVxyXG4gICAgICAgICAgICByZUluaXRWYWx1ZXMoKTtcclxuICAgICAgICAgICAgY2xvc2VUYXNrKCkgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2Zy5kZWxldGUtYnRuJylcclxuICAgICAgICBkZWxldGVCdG4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVUYXNrKGJ0bi5kYXRhc2V0LmRlbGV0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJylcclxuICAgIGNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2otYnRuJylcclxuICAgIGNvbnN0IGFkZFRoZVByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2onKVxyXG4gICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvai1uYW1lJylcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2pCdG5FdmVudCA9ICgpID0+IHtcclxuICAgICAgICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5dXV1JylcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRUaGVQcm9qQnRuRXZlbnQ9ICgpID0+IHtcclxuICAgICAgICBhZGRUaGVQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QocHJvak5hbWUudmFsdWUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9qTmFtZS52YWx1ZSA9ICcnXHJcbiAgICAgICAgICAgIGNsb3NlVGFzaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBob21lQnRuRXZlbnQsIFxyXG4gICAgICAgIHNpZGVCYXJJdGVtc0V2ZW50LFxyXG4gICAgICAgIG1lbnVCdG5FdmVudCxcclxuICAgICAgICBhZGRUYXNrQnRuRXZlbnQsXHJcbiAgICAgICAgYnRuQ2FuY2VsRXZlbnQsXHJcbiAgICAgICAgYnRuQ2xvc2VFdmVudCxcclxuICAgICAgICBvdmVybGF5RXZlbnQsXHJcbiAgICAgICAgY2xpY2tPblRhc2tFdmVudCxcclxuICAgICAgICB0YXNrU3RhdGVCdG5FdmVudCxcclxuICAgICAgICBlZGl0RXZlbnRMaXN0ZW5lcixcclxuICAgICAgICBidG5FZGl0RXZlbnQsXHJcbiAgICAgICAgZGVsZXRlRXZlbnRMaXN0ZW5lcixcclxuICAgICAgICBhZGRQcm9qQnRuRXZlbnQsXHJcbiAgICAgICAgYWRkVGhlUHJvakJ0bkV2ZW50XHJcbiAgICB9XHJcblxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xyXG4gICAgbGV0IHN0b3JhZ2U7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxyXG4gICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxyXG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxyXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxyXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpXHJcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24nKVxyXG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKVxyXG5jb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKVxyXG5jb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpXHJcbmNvbnN0IHRhc2tEb25lQ2hlY2tidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kb25lJylcclxuXHJcbmxldCB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XHJcbmxldCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxubGV0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbmxldCBwcm9qZWN0ID0gcHJvamVjdFNlbGVjdC52YWx1ZTtcclxubGV0IHByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcbmxldCB0YXNrRG9uZSA9IHRhc2tEb25lQ2hlY2tidXR0b24uY2hlY2tlZDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVJbml0VmFsdWVzID0gKCkgPT4ge1xyXG4gICAgdGFza05hbWVJbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9ICcnXHJcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgcHJvamVjdFNlbGVjdC52YWx1ZSA9ICcnXHJcbiAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9ICcnXHJcbiAgICB0YXNrRG9uZUNoZWNrYnV0dG9uLmNoZWNrZWQgPSBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmFsdWVzRWRpdCA9ICh0YXNrKSA9PiB7XHJcbiAgICBsZXQge3RpdGxlLCBkZXNjaXB0aW9uLCBkZWZhdXRsRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGNoZWNrbGlzdH0gPSB0YXNrXHJcblxyXG4gICAgdGFza05hbWVJbnB1dC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjaXB0aW9uO1xyXG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZGVmYXV0bERhdGU7XHJcbiAgICBwcm9qZWN0U2VsZWN0LnZhbHVlID0gcHJvamVjdFxyXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBwcmlvcml0eTtcclxuICAgIHRhc2tEb25lQ2hlY2tidXR0b24uY2hlY2tlZCA9IGNoZWNrbGlzdDtcclxuICAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUl0ID0gKCkgPT4ge1xyXG4gICAgdGFza05hbWUgPSB0YXNrTmFtZUlucHV0LnZhbHVlO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgcHJvamVjdCA9IHByb2plY3RTZWxlY3QudmFsdWU7XHJcbiAgICBwcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG4gICAgdGFza0RvbmUgPSB0YXNrRG9uZUNoZWNrYnV0dG9uLmNoZWNrZWQ7XHJcbiAgICBcclxuICAgIHJldHVybiBuZXcgVGFzayh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgdGFza0RvbmUpO1xyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjaXB0aW9uLCBkdWVEYXRlLCAgcHJpb3JpdHksIHByb2plY3QsIGNoZWNrbGlzdCl7XHJcbiAgICAgXHJcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gZHVlRGF0ZS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGlucHV0RGF0ZSkpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH07XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuZGVzY2lwdGlvbiA9IGRlc2NpcHRpb24gXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZm9ybWF0dGVkRGF0ZVxyXG4gICAgICAgIHRoaXMuZHVlVGltZSA9IGR1ZURhdGUuc3BsaXQoJ1QnKVsxXVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcclxuICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdFxyXG4gICAgICAgIHRoaXMuZGVmYXV0bERhdGUgPSBkdWVEYXRlO1xyXG5cclxuICAgIH1cclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxyXFxuICAgIC0tbGltZS00MDA6ICNhM2U2MzU7XFxyXFxuICAgIC0tbGltZS02MDA6ICM2NWEzMGQ7XFxyXFxuICAgIC0tbGltZS03MDA6ICM0ZDdjMGY7XFxyXFxuICAgIC0tZ3JpczogI0ZBRkFGQTtcXHJcXG4gICAgLS1ncmlzLW9zY3VybzogIzhhOGE4YTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSwgZGl2LCBuYXZ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kLWZsZXh7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NHB4IDEwMHB4IDFmcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdiBiYXIgdG9wICovXFxyXFxuXFxyXFxubmF2e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYXtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdmJhciB0b3AgbGVmdCBzaWRlICAqL1xcclxcblxcclxcbi5uYXYtbHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sID4gZGl2e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbCA+IGRpdiA+IGlucHV0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWwgLnNlYXJjaC1pbnB1dCBhIHN2ZyB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdmJhciB0b3AgcmlnaHQgc2lkZSAgKi9cXHJcXG5cXHJcXG4ubmF2LXJ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogd2hpdGUgb3ZlcmxheSAqL1xcclxcbi5vdmVybGF5e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY0NDtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV3IHRhc2sgd2luZG93ICovXFxyXFxuXFxyXFxuI25ldy10YXNre1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggMnB4ICMwMDAwMDA0MDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdntcXHJcXG4gICAgbWFyZ2luOiAuM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtICN0YXNrLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoMyksICNuZXctdGFzayA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpe1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrIC5kdWUtZGF0ZS1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAuZXh0cmEtZmllbGRzID4gZGl2IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSBsYWJlbHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAjZHVlLWRhdGV7XFxyXFxuICAgIGNvbG9yOiAjNTU1O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrIGZvcm0gLmJ1dHRvbnN7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuLWdyZWVue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdyZWVuOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTcwMCk7XFxyXFxufVxcclxcblxcclxcbi5idG4tY2FuY2Vse1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlzKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaXMtb3NjdXJvKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYW5jZWw6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIG5ldyBwcm9qZWN0IHdpbmRvdyAqL1xcclxcbiNuZXctcHJvamVjdHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDJweCAjMDAwMDAwNDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCBmb3Jte1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6Zm9jdXN7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gLnByb2otYnRuc3tcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxcclxcbn1cXHJcXG5cXHJcXG4vKiBzaWRlIGJhciAqL1xcclxcblxcclxcbi5zaWRlLWJhcntcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgcGFkZGluZzogIDJyZW07XFxyXFxuICAgIHRvcDogNDRweDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgPiBkaXYgPiBhLCAudGFzay1oZWFkZXIgYSwgLnNpZGUtYmFyICNwcm9qZWN0cyBhIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMwMDA7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgPiBkaXYgPiBhOmhvdmVyLC50YXNrLWhlYWRlciBhOmhvdmVyLCAuc2lkZS1iYXIgLmFjdGl2ZSwgLnNpZGUtYmFyICNwcm9qZWN0cyBhOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgI2NyZWF0ZWQtcHJvamVjdHN7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyICNjcmVhdGVkLXByb2plY3RzICBhOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZS02MDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIG1hcmdpbjogMnB4IDJyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWRlLWJhciAjcHJvamVjdHN7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgI3Byb2plY3RzIGF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyp0YXNrIGhlYWRlciAqL1xcclxcbi50YXNrLWhlYWRlcntcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDI7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0YXNrIHNwYWNlICovXFxyXFxuLnRhc2tze1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcclxcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi8qZWFjaCB0YXNrKi9cXHJcXG4udGFzayB7XFxyXFxuICAgIG1hcmdpbjogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVye1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFzayA+IGRpdntcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAuZGlzcGxheS1kYXRle1xcclxcbiAgICBtYXJnaW46IC41cmVtIDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5jaGVjay1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC50YXNrLWRlc2NyaXB0aW9ue1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgICBtYXJnaW46IDAgM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmNvbXBsZXRlZC10YXNre1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAubW9kLWJ0bnMgc3ZnOmhvdmVye1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5kb3duLWFycm93e1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoaWRlIGNsYXNzICovXFxyXFxuXFxyXFxuLmhpZGV7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50dXJuMTgwe1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBLGVBQWU7O0FBRWY7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBLHlCQUF5Qjs7QUFFekI7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSwwQkFBMEI7O0FBRTFCO0lBQ0k7QUFDSjs7O0FBR0Esa0JBQWtCO0FBQ2xCO0lBQ0ksa0JBQWtC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QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxyXFxuICAgIC0tbGltZS00MDA6ICNhM2U2MzU7XFxyXFxuICAgIC0tbGltZS02MDA6ICM2NWEzMGQ7XFxyXFxuICAgIC0tbGltZS03MDA6ICM0ZDdjMGY7XFxyXFxuICAgIC0tZ3JpczogI0ZBRkFGQTtcXHJcXG4gICAgLS1ncmlzLW9zY3VybzogIzhhOGE4YTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSwgZGl2LCBuYXZ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kLWZsZXh7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NHB4IDEwMHB4IDFmcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdiBiYXIgdG9wICovXFxyXFxuXFxyXFxubmF2e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYXtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdmJhciB0b3AgbGVmdCBzaWRlICAqL1xcclxcblxcclxcbi5uYXYtbHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sID4gZGl2e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbCA+IGRpdiA+IGlucHV0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWwgLnNlYXJjaC1pbnB1dCBhIHN2ZyB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdmJhciB0b3AgcmlnaHQgc2lkZSAgKi9cXHJcXG5cXHJcXG4ubmF2LXJ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogd2hpdGUgb3ZlcmxheSAqL1xcclxcbi5vdmVybGF5e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY0NDtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV3IHRhc2sgd2luZG93ICovXFxyXFxuXFxyXFxuI25ldy10YXNre1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggMnB4ICMwMDAwMDA0MDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdntcXHJcXG4gICAgbWFyZ2luOiAuM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtICN0YXNrLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoMyksICNuZXctdGFzayA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpe1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrIC5kdWUtZGF0ZS1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAuZXh0cmEtZmllbGRzID4gZGl2IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSBsYWJlbHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAjZHVlLWRhdGV7XFxyXFxuICAgIGNvbG9yOiAjNTU1O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrIGZvcm0gLmJ1dHRvbnN7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuLWdyZWVue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdyZWVuOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTcwMCk7XFxyXFxufVxcclxcblxcclxcbi5idG4tY2FuY2Vse1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlzKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaXMtb3NjdXJvKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYW5jZWw6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIG5ldyBwcm9qZWN0IHdpbmRvdyAqL1xcclxcbiNuZXctcHJvamVjdHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDJweCAjMDAwMDAwNDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCBmb3Jte1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6Zm9jdXN7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gLnByb2otYnRuc3tcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxcclxcbn1cXHJcXG5cXHJcXG4vKiBzaWRlIGJhciAqL1xcclxcblxcclxcbi5zaWRlLWJhcntcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgcGFkZGluZzogIDJyZW07XFxyXFxuICAgIHRvcDogNDRweDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgPiBkaXYgPiBhLCAudGFzay1oZWFkZXIgYSwgLnNpZGUtYmFyICNwcm9qZWN0cyBhIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMwMDA7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgPiBkaXYgPiBhOmhvdmVyLC50YXNrLWhlYWRlciBhOmhvdmVyLCAuc2lkZS1iYXIgLmFjdGl2ZSwgLnNpZGUtYmFyICNwcm9qZWN0cyBhOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgI2NyZWF0ZWQtcHJvamVjdHN7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyICNjcmVhdGVkLXByb2plY3RzICBhOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGltZS02MDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIG1hcmdpbjogMnB4IDJyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWRlLWJhciAjcHJvamVjdHN7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgI3Byb2plY3RzIGF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyp0YXNrIGhlYWRlciAqL1xcclxcbi50YXNrLWhlYWRlcntcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDI7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0YXNrIHNwYWNlICovXFxyXFxuLnRhc2tze1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcclxcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi8qZWFjaCB0YXNrKi9cXHJcXG4udGFzayB7XFxyXFxuICAgIG1hcmdpbjogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVye1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFzayA+IGRpdntcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAuZGlzcGxheS1kYXRle1xcclxcbiAgICBtYXJnaW46IC41cmVtIDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5jaGVjay1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC50YXNrLWRlc2NyaXB0aW9ue1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgICBtYXJnaW46IDAgM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmNvbXBsZXRlZC10YXNre1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAubW9kLWJ0bnMgc3ZnOmhvdmVye1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5kb3duLWFycm93e1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoaWRlIGNsYXNzICovXFxyXFxuXFxyXFxuLmhpZGV7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50dXJuMTgwe1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNBZnRlclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBhZnRlciB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWZ0ZXIoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGUtbmV3JztcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzLCBsb2FkVGFza3MgfSBmcm9tICcuL2RvbS1jb250ZW50JztcclxuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvY2FsIHN0b3JhZ2UgZm91bmQnKVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdubyBsb2NhbCBzdG9yYWdlIGF2YWlsYWJsZScpXHJcbiAgfVxyXG5cclxubG9hZFRhc2tzKCk7XHJcbmxvYWRQcm9qZWN0cygpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjbG9zZVRhc2siLCJsb2FkVGFza3MiLCJjcmVhdGVJdCIsInJlSW5pdFZhbHVlcyIsImFyclRlbXBvcmFsIiwiYnRuQWRkVGFzayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlVGFzayIsIm5ld1Rhc2siLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInN0b3JhZ2VkVGFza3MiLCJKU09OIiwicGFyc2UiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxvYWRQcm9qZWN0cyIsImNyZWF0ZVByb2plY3QiLCJwcm9qZWN0TmFtZSIsInN0b3JhZ2VkUHJvamVjdCIsImdldFByb2plY3QiLCJkZWxldGVUYXNrIiwiaW5kZXgiLCJzcGxpY2UiLCJpc1RvZGF5IiwiaXNBZnRlciIsIkV2ZW50cyIsInNpZGVCYXJJdGVtc0V2ZW50IiwidGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXNrSGVhZGVyVGV4dCIsInNpZGVCYXJJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJob21lQnRuRXZlbnQiLCJtZW51QnRuRXZlbnQiLCJuZXdQcm9qZWN0Iiwib3ZlcmxheSIsIm5ld1Rhc2tXaW5kb3ciLCJidG5BZGQiLCJidG5FZGl0IiwiYWRkVGFza0J0bkV2ZW50IiwicHJvamVjdEZvcm0iLCJidG5DYW5jZWxFdmVudCIsImJ0bkNsb3NlRXZlbnQiLCJvdmVybGF5RXZlbnQiLCJ0YXNrU3RvcmVkIiwidGFza0NvbnRlbnQiLCJyZWR1Y2UiLCJhY2MiLCJpIiwidGl0bGUiLCJkZXNjaXB0aW9uIiwiZHVlRGF0ZSIsImR1ZVRpbWUiLCJwcmlvcml0eSIsInByb2plY3QiLCJjaGVja2xpc3QiLCJ0cmltIiwiRGF0ZSIsInNob3dDaGVja2VkIiwiZG93bkFycm93IiwiZWRpdFN2ZyIsInNob3dQcmlvcml0eSIsInRyYXNoU3ZnIiwiY2xpY2tPblRhc2tFdmVudCIsInRhc2tTdGF0ZUJ0bkV2ZW50IiwiZWRpdEV2ZW50TGlzdGVuZXIiLCJkZWxldGVFdmVudExpc3RlbmVyIiwicHJvamVjdHNEaXYiLCJwcm9qZWN0c09wdGlvbnMiLCJwcm9qZWN0cyIsImZvckVhY2giLCJwcm9qIiwiYnRuRWRpdEV2ZW50IiwiZGlzcGxheVByaW9yaXR5IiwiZGlzcGxheUNoZWNrZWQiLCJhZGRQcm9qQnRuRXZlbnQiLCJhZGRUaGVQcm9qQnRuRXZlbnQiLCJsb2FkRWRpdGlvbiIsIndyaXRlRWRpdGlvbiIsImVkaXRlZFRhc2siLCJ2YWx1ZXNFZGl0IiwiaG9tZUJ0biIsInJlbW92ZSIsIml0ZW0iLCJ0ZXh0Q29udGVudCIsIm1lbnVCdG4iLCJzaWRlQmFyIiwiY29udGFpbnMiLCJjb250ZW50Iiwic3R5bGUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiYWRkVGFza0J0biIsImJ0bkNhbmNlbCIsImJ0bkNsb3NlIiwiY2xpY2tPblRhc2siLCJ0b0RvIiwiZGVzY3JpcHRpb25FbGVtZW50IiwidGFza1N0YXRlQnRucyIsImJ0biIsInRhc2tPYmoiLCJkYXRhc2V0Iiwic3RhdGUiLCJ0YXNrSW5mbyIsInRhc2tJbmRleCIsImVkaXRCdG5zIiwiZGVsZXRlQnRuIiwiZGVsZXRlIiwiYWRkUHJvakJ0biIsImFkZFRoZVByb2pCdG4iLCJwcm9qTmFtZSIsInZhbHVlIiwic3RvcmFnZUF2YWlsYWJsZSIsInR5cGUiLCJzdG9yYWdlIiwieCIsInJlbW92ZUl0ZW0iLCJET01FeGNlcHRpb24iLCJjb2RlIiwibmFtZSIsImxlbmd0aCIsIlRhc2siLCJ0YXNrTmFtZUlucHV0IiwidGFza0Rlc2NyaXB0aW9uSW5wdXQiLCJkdWVEYXRlSW5wdXQiLCJwcm9qZWN0U2VsZWN0IiwicHJpb3JpdHlTZWxlY3QiLCJ0YXNrRG9uZUNoZWNrYnV0dG9uIiwidGFza05hbWUiLCJ0YXNrRGVzY3JpcHRpb24iLCJ0YXNrRG9uZSIsImNoZWNrZWQiLCJkZWZhdXRsRGF0ZSIsImNvbnN0cnVjdG9yIiwiaW5wdXREYXRlIiwic3BsaXQiLCJkYXRlIiwib3B0aW9ucyIsInllYXIiLCJtb250aCIsImRheSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9