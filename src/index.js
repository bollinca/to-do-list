import { createLayout, itemManipulation } from './dom-manip.js';

createLayout();
itemManipulation.updateProperties();
itemManipulation.addItem();
itemManipulation.addItem();
itemManipulation.addItem();

let testTime = itemManipulation.addItem();

let testCell = itemManipulation.addItem();
testCell.addEventListener('click', (e) => itemManipulation.markComplete(e));
testTime.addEventListener('click', (e) => itemManipulation.removeItem(e));