import { itemManipulation, itemForm } from './dom-manip.js';

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
            
            let newEditButton = newItem.querySelector('.edit');
            newEditButton.addEventListener('click', () => {
                itemForm.createForm()
                this.editItem();
            });
        });
    },

    callForm: function (targets) {
        targets.forEach(target => {
            target.addEventListener('click', () => {
                itemForm.createForm();
                this.editItem();
            });
        });
    },

    editItem: function () {
        let confirm = document.querySelector('#confirm');
        confirm.addEventListener('click', () => {
            let formTest = confirm.parentNode;
            let formArray = Array.from(formTest.querySelectorAll('input'));
            formArray.push(formTest.querySelector('#description'));

            let formValues = formArray.map((item) => (item.value));
            console.log(formValues);
        });
    }
};

export { setListeners };