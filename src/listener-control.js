// let addItem = document.querySelector('#add-item');

import { itemManipulation } from './dom-manip.js';

const setListeners = {
    removeItem: function(targets) {
        targets.forEach(target => {
            target.addEventListener('click', () => {
                let gridItemToRemove = target.parentNode;
                itemManipulation.removeItem(gridItemToRemove);
            });
        });
    },

    markComplete: function(targets) {
        targets.forEach(target => {
            target.addEventListener('click', () => itemManipulation.markComplete(target));
        });
    },

};

// addItem.addEventListener('click', () => {
// let currentItem = itemManipulation.addItem();
// currentItem.addEventListener('click', (e) => itemManipulation.markComplete(e.target));
// let itemRemover = currentItem.querySelector('.remove');
// itemRemover.addEventListener('click', (e) => {
// let target = e.target.parentNode;
// itemManipulation.removeItem(target);
// });
// });

export { setListeners };