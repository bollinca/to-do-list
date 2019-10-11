import { createLayout, toDoController, projectController} from './dom-manip.js';
import { setListeners } from './listener-control.js';

createLayout();
toDoController.defineGrid();

projectController.updateProjMenu();

setListeners.toDoCreation();
setListeners.toDoDeletion();
setListeners.toDoCompletion();
// setListeners.formSummoning();
setListeners.projectCreation();
