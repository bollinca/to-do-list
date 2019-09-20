// let addItem = document.querySelector('#add-item');

import { itemManipulation } from './dom-manip.js';

const setListeners = {
    removeItem: function (targets) {
        targets.forEach(target => {
            target.addEventListener('click', () => {
                let gridItemToRemove = target.parentNode;
                itemManipulation.removeItem(gridItemToRemove);
            });
        });
    },

    markComplete: function (targets) {
        targets.forEach(target => {
            target.addEventListener('click', () => itemManipulation.markComplete(target));
        });
    },

    addNew: function (target) {
        target.addEventListener('click', () => {
            let newItem = itemManipulation.addItem();
            newItem.addEventListener('click', () => itemManipulation.markComplete(newItem));
            let newRemoveButton = newItem.querySelector('.remove');
            newRemoveButton.addEventListener('click', () => itemManipulation.removeItem(newRemoveButton.parentNode));
        });
    }
};

export { setListeners };