import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBKKV9Tn3eW_P4XXj2hDqX24YjSkWAYKds",
  authDomain: "todolist-9c8f1.firebaseapp.com",
  projectId: "todolist-9c8f1",
  storageBucket: "todolist-9c8f1.appspot.com",
  messagingSenderId: "982450165115",
  appId: "1:982450165115:web:74d3595b356854f09e19de"
});

const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// const todosCol = collection(db, 'todos')
// const snapshort = await getDocs(todosCol)

// Agrega un listener para el botón de inicio de sesión con Google
const googleLoginButton = document.getElementById("google-login-btn");
googleLoginButton.addEventListener("click", () => {
  // Crea el objeto del proveedor de Google
  const provider = new GoogleAuthProvider();

  // Inicia sesión con Google
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      // Usuario autenticado correctamente
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);
      // Aquí puedes almacenar la información del usuario en tu base de datos
    })
    .catch((error) => {
      // Error al autenticar el usuario
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error al autenticar el usuario:", errorMessage);
    });
});


onAuthStateChanged(auth, user => {
  if(user !== null){
    console.log('logged in!')
  } else {
    console.log('No user')
  }
})

import createTask from './create-new';
import { loadProjects, loadTasks } from './dom-content';
import { storageAvailable } from './local-storage';

import './style.css';

if (storageAvailable('localStorage')) {
    console.log('local storage found')
  }
  else {
    console.log('no local storage available')
  }

loadTasks();
loadProjects();


