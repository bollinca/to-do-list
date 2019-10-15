import { createLayout, toDoController, projectController} from './dom-manip.js';
import { setListeners } from './listener-control.js';

createLayout();
toDoController.defineList();

projectController.updateProjMenu();
projectController.addProject('Default');

setListeners.setAll();