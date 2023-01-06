import createTask from './create-new';
import { loadTasks } from './dom-content';
import { storageAvailable } from './local-storage';

import './style.css';

if (storageAvailable('localStorage')) {
    console.log('local storage found')
  }
  else {
    console.log('no local storage available')
  }

loadTasks();


