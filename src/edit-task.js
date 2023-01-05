export const loadEdition = (index) => {
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
    return storagedTasks[index]
}


export const writeEdition = (index, editedTask) => {
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
    storagedTasks[index] = editedTask
}