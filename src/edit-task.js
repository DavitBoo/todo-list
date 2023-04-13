import { loadTasks } from "./dom-content"
import { auth, db } from "./index";
import { ref, get, set } from "firebase/database";

export const loadEdition = async (index) => {
    const user = auth.currentUser

    if(user !== null){
        const tasksRef = ref(db, `tasks/${index}`)
        const snapshot = await get(tasksRef)
        const task = snapshot.val();
        return task
        
    } else {
        let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
        return storagedTasks[index]
    }
}


export const writeEdition = async (index, editedTask) => {
    const user = auth.currentUser;
  
    if (user !== null) {
      const tasksRef = ref(db, `tasks/${index}`);
      await set(tasksRef, await editedTask);
    } else {
      let storagedTasks = JSON.parse(window.localStorage.getItem("task"));
      storagedTasks[index] = await editedTask;
      localStorage.setItem("task", JSON.stringify(storagedTasks));
    }
  
    loadTasks();
  };
