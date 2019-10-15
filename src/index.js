import { createLayout, toDoController, projectController} from './dom-manip.js';
import { setListeners } from './listener-control.js';
import { storageControl } from './storage.js';

createLayout();
toDoController.defineList();

projectController.updateProjMenu();
projectController.addProject('Default');

setListeners.setAll();