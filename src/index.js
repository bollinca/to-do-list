import { createLayout, itemManipulation, folderManipulation, editItem } from './dom-manip.js';
import { setListeners } from './listener-control.js';

createLayout();
itemManipulation.updateProperties();
itemManipulation.addItem();
itemManipulation.addItem();
let test = itemManipulation.addItem();

let removeButtons = Array.from(document.querySelectorAll('.remove'));
setListeners.removeItem(removeButtons);

let gridItems = Array.from(document.querySelectorAll('.grid-item'));
setListeners.markComplete(gridItems);

let addItem = document.querySelector('#add-item');
setListeners.addNew(addItem);

folderManipulation.updateContainer();

///testing
itemManipulation.setData(test, 'name');
itemManipulation.setData(test, 'description');
itemManipulation.setData(test, 'due-date');
itemManipulation.setData(test, 'priority');
editItem.createForm();
