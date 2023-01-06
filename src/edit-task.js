import { loadTasks } from "./dom-content"

export const loadEdition = (index) => {
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
    return storagedTasks[index]
}


export const writeEdition = (index, editedTask) => {
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
    storagedTasks[index] = editedTask
    localStorage.setItem('task', JSON.stringify(storagedTasks))

    loadTasks();
}
