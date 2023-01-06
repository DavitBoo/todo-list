import { loadTasks } from "./dom-content";

export const deleteTask = (index) => {
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
    storagedTasks.splice(index, 1);
    localStorage.setItem('task', JSON.stringify(storagedTasks))

    loadTasks();
}
