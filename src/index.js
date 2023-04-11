import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { getDatabase, ref, push, set } from "firebase/database";

import createTask from './create-new';
import { loadProjects, loadTasks } from './dom-content';
import { storageAvailable } from './local-storage';

import './style.css';


const firebaseApp = initializeApp({
  apiKey: "AIzaSyBKKV9Tn3eW_P4XXj2hDqX24YjSkWAYKds",
  authDomain: "todolist-9c8f1.firebaseapp.com",
  databaseURL: "https://todolist-9c8f1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todolist-9c8f1",
  storageBucket: "todolist-9c8f1.appspot.com",
  messagingSenderId: "982450165115",
  appId: "1:982450165115:web:74d3595b356854f09e19de"
});

const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);
// const todosCol = collection(db, 'todos')
// const snapshort = await getDocs(todosCol)


// Agrega un listener para botones sesión
const googleLoginButton = document.getElementById("google-login-btn");
const logoutButton = document.getElementById("logout-btn");

onAuthStateChanged(auth, user => {
  if(user !== null){
    console.log('logged in!')
    googleLoginButton.classList.add('hide')
    logoutButton.classList.remove('hide')

  } else {
    console.log('No user')
    googleLoginButton.classList.remove('hide')
    logoutButton.classList.add('hide')

  }
})



googleLoginButton.addEventListener("click", () => {
  // Crea el objeto del proveedor de Google
  const provider = new GoogleAuthProvider();
  console.log(auth)
  console.log(provider)
  // Inicia sesión con Google
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      // Usuario autenticado correctamente
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);
      console.log('hoooola')
      // Hide or display buttons
      googleLoginButton.classList.add('hide')
      logoutButton.classList.remove('hide')
    })
    .catch((error) => {
      // Error al autenticar el usuario
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error al autenticar el usuario:", errorMessage);
    });
});

logoutButton.addEventListener("click", () => {
  auth.signOut()
    .then(() => {
      // El usuario ha cerrado sesión correctamente
      console.log("Usuario ha cerrado sesión correctamente");
      // Hide or display buttons
      googleLoginButton.classList.remove('hide')
      logoutButton.classList.add('hide')
    })
    .catch((error) => {
      // Error al cerrar sesión
      console.error("Error al cerrar sesión:", error);
    });
});

//it will load the task from localstorage (if they exist)
if (storageAvailable('localStorage')) {
  console.log('local storage found')
  loadTasks();
  loadProjects();
}
else {
  console.log('no local storage available')
}



export const addTaskToFirebase = (task) => {
  // Obtiene una referencia a la ubicación donde se almacenarán las tareas en la base de datos de Firebase
  const tasksRef = ref(db, `tasks`);

  // Crea un nuevo ID para la tarea
  const newTaskRef = push(tasksRef);

  // Agrega la nueva tarea a la base de datos de Firebase
  set(newTaskRef, task);
};








