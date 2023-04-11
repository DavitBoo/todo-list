import { closeTask, loadTasks } from "./dom-content";
import { createIt, reInitValues } from "./task-form";
import { addTaskToFirebase, auth } from "./index";



const btnAddTask = document.getElementById('btn-add')

btnAddTask.addEventListener('click', e => {
    e.preventDefault();
    createTask();
    closeTask();
})

const createTask = () =>  {

    let newTask = createIt();
    const user = auth.currentUser;
    
    if (user !== null) {
        // Agrega la nueva tarea a la base de datos de Firebase
        addTaskToFirebase(newTask, 'tasks');
    }
    else if(window.localStorage.getItem('task')){
        let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
        storagedTasks.push(newTask)
        localStorage.setItem('task', JSON.stringify(storagedTasks))
    }else{
        localStorage.setItem('task', JSON.stringify([newTask]))

    }

    reInitValues();
    loadTasks();

}


export {createTask};

