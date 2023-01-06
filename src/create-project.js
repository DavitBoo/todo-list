export const createProject = projectName =>  {

    if(window.localStorage.getItem('projects')){

        let storagedProject = JSON.parse(window.localStorage.getItem('projects'))
        storagedProject.push(projectName)
        localStorage.setItem('projects', JSON.stringify(storagedProject))

    }else{

        localStorage.setItem('projects', JSON.stringify([projectName]))

    }
}

export const getProject = () => {
    if(window.localStorage.getItem('projects')){
        return JSON.parse(window.localStorage.getItem('projects'))
    }
}