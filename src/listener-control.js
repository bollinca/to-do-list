// let addItem = document.querySelector('#add-item');

import { itemManipulation } from './dom-manip.js';

const setRemoveListeners = (targets) => {
    targets.forEach(target => {
        target.addEventListener('click', () => {
            let gridItemToRemove = target.parentNode;
            itemManipulation.removeItem(gridItemToRemove);
        });
    });
};

const setCompleteListeners = (targets) => {
    targets.forEach(target => {
        target.addEventListener('click', () => itemManipulation.markComplete(target));
    });
};

let gridItems = Array.from(document.querySelectorAll('.grid-item'));
gridItems.forEach(item => {
    item.addEventListener('click', (e) => itemManipulation.markComplete(e.target));
});

// addItem.addEventListener('click', () => {
// let currentItem = itemManipulation.addItem();
// currentItem.addEventListener('click', (e) => itemManipulation.markComplete(e.target));
// let itemRemover = currentItem.querySelector('.remove');
// itemRemover.addEventListener('click', (e) => {
// let target = e.target.parentNode;
// itemManipulation.removeItem(target);
// });
// });

export { setRemoveListeners, setCompleteListeners };