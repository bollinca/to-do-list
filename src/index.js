import { createLayout, itemManipulation, folderManipulation} from './dom-manip.js';
import { setListeners } from './listener-control.js';

createLayout();
itemManipulation.updateProperties();

folderManipulation.updateContainer();
folderManipulation.addFolder();

itemManipulation.addToDo();

setListeners.removeItem();
setListeners.callForm();
setListeners.markComplete();
setListeners.addNew();

folderManipulation.updateContainer();

setListeners.addProject();
