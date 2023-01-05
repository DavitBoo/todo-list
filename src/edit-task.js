export const loadEdition = (index) => {
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
    return storagedTasks[index]
}


export const writeEdition = (index, editedTask) => {
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
    storagedTasks[index] = editedTask
}

/// ahora lo que pretendo es generar con JS la ventana de nueva tarea y la de editar tarea con el mismo código