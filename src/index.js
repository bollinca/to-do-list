import { createLayout, toDoController, projectController} from './dom-manip.js';
import { setListeners } from './listener-control.js';

createLayout();
toDoController.defineGrid();

projectController.updateProjMenu();
projectController.addProject();

toDoController.addToDo();

setListeners.toDoCreation();
setListeners.toDoDeletion();
setListeners.toDoCompletion();
setListeners.formSummoning();

projectController.updateProjMenu();

setListeners.projectCreation();
