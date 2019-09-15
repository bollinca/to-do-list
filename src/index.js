import { createLayout, itemManipulation } from './dom-manip.js';
import { setRemoveListeners, setCompleteListeners } from './listener-control.js';

createLayout();
itemManipulation.updateProperties();
itemManipulation.addItem();
itemManipulation.addItem();
itemManipulation.addItem();

let addItem = document.querySelector('#add-item');
let removeButtons = Array.from(document.querySelectorAll('.remove'));
setRemoveListeners(removeButtons);

let gridItems = Array.from(document.querySelectorAll('.grid-item'));
setCompleteListeners(gridItems);

addItem.addEventListener('click', () => {
    let currentItem = itemManipulation.addItem();
    currentItem.addEventListener('click', (e) => itemManipulation.markComplete(e.target));
    let itemRemover = currentItem.querySelector('.remove');
    itemRemover.addEventListener('click', (e) => {
        let target = e.target.parentNode;
        itemManipulation.removeItem(target);
    });
});
