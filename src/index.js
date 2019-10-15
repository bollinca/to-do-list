import { createLayout, toDoController, projectController} from './dom-manip.js';
import { setListeners } from './listener-control.js';

createLayout();
toDoController.defineGrid();

projectController.updateProjMenu();
projectController.addProject('Default');

setListeners.setAll();