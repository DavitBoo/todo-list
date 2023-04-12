import { loadTasks } from "./dom-content";
import { auth, db } from "./index";
import { ref, remove, child } from 'firebase/database';

export const deleteTask = (index) => {
    const user = auth.currentUser

    if(user !== null){
        const tasksRef = ref(db, "tasks");

        remove(child(tasksRef, index)).then(() => {
            console.log("Tarea eliminada exitosamente");

        }).catch((error) => {
            console.log("Error eliminando tarea: ", error);
        });

    } else {
        let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
        storagedTasks.splice(index, 1);
        localStorage.setItem('task', JSON.stringify(storagedTasks))
    }

    loadTasks();
}
