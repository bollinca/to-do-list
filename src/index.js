import { createLayout, toDoController, projectController} from './dom-manip.js';
import { setListeners } from './listener-control.js';

createLayout();
toDoController.defineGrid();

projectController.updateProjMenu();
projectController.addProject();

toDoController.addToDo();

setListeners.removeItem();
setListeners.callForm();
setListeners.markComplete();
setListeners.addNew();

projectController.updateProjMenu();

setListeners.addProject();
