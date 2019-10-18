import { createLayout, toDoController, projectController } from './dom-manip.js';
import { setListeners } from './listener-control.js';
import { storageControl } from './storage.js';

createLayout();
toDoController.defineList();

projectController.updateProjMenu();
if (localStorage.allProjects) {
    storageControl.projects.summonStoredProjects();
} else {
    projectController.addProject('Default');
}

setListeners.setAll();
