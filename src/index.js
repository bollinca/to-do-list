import { createLayout, itemManipulation, folderManipulation, itemForm } from './dom-manip.js';
import { setListeners } from './listener-control.js';

createLayout();
itemManipulation.updateProperties();

folderManipulation.updateContainer();
folderManipulation.addFolder();

itemManipulation.addItem();

setListeners.removeItem();
setListeners.callForm();
setListeners.markComplete();
setListeners.addNew();

folderManipulation.updateContainer();

setListeners.addProject();
