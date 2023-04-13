import { loadProjects } from "./dom-content"
import { addTaskToFirebase, auth, db } from "./index";
import { get, ref } from "firebase/database";

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

export const getProject = async() => {
    const user = auth.currentUser;

    if (user !== null){
        try {
            const snapshot = await get(ref(db, "projects"));
            if (snapshot.exists()) {
              const projects = snapshot.val();
              return projects;
            } else {
              return null;
            }
          } catch (error) {
            console.error(error);
          }
    }else if(window.localStorage.getItem('projects')){
        return JSON.parse(window.localStorage.getItem('projects'))
    }
}