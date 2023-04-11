import { loadProjects } from "./dom-content"
import { addTaskToFirebase, auth } from "./index";

export const createProject = projectName =>  {

    const user = auth.currentUser;

    if (user !== null){
        addTaskToFirebase(projectName, 'projects');
    }
    else if(window.localStorage.getItem('projects')){

        let storagedProject = JSON.parse(window.localStorage.getItem('projects'))
        storagedProject.push(projectName)
        localStorage.setItem('projects', JSON.stringify(storagedProject))

    }else{

        localStorage.setItem('projects', JSON.stringify([projectName]))

    }

    loadProjects()
}

export const getProject = () => {
    if(window.localStorage.getItem('projects')){
        return JSON.parse(window.localStorage.getItem('projects'))
    }
}