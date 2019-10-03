import { createLayout, itemManipulation, folderManipulation, itemForm } from './dom-manip.js';
import { setListeners } from './listener-control.js';

createLayout();
itemManipulation.updateProperties();

folderManipulation.updateContainer();
folderManipulation.addFolder();

itemManipulation.addItem();
itemManipulation.addItem();
itemManipulation.addItem();

let removeButtons = Array.from(document.querySelectorAll('.remove'));
setListeners.removeItem(removeButtons);

let editButtons = Array.from(document.querySelectorAll('.edit'));
setListeners.callForm(editButtons);

let gridItems = Array.from(document.querySelectorAll('.grid-item'));
setListeners.markComplete(gridItems);

let addItem = document.querySelector('#add-item');
setListeners.addNew(addItem);

folderManipulation.updateContainer();
setListeners.addProject();
folderManipulation.hideContent('test');