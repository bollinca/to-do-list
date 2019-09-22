import { itemManipulation, itemForm, folderManipulation } from './dom-manip.js';

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

    addProject: function() {
        let createProjectButton = document.querySelector('#create-project');
        createProjectButton.addEventListener('click', () => folderManipulation.addFolder());
    },

    callForm: function (targets) {
        targets.forEach(target => {
            target.addEventListener('click', (e) => {
                itemForm.createForm();
                this.editItem(e);
            });
        });
    },

    editItem: function (e) {
        let targetItem = e.target.parentNode;
        console.log(targetItem);
        let confirm = document.querySelector('#confirm');
        let formTest = confirm.parentNode;

        let formArray = Array.from(formTest.querySelectorAll('input'));
        formArray.push(formTest.querySelector('#description'));
        
        confirm.addEventListener('click', () => {
            let formValues = formArray.map((item) => (item.value));
            console.log(formValues);
            let nameTest = formTest.querySelector(`[data-type=name]`);
            // nameTest.textContent = formValues[0];
            console.log(nameTest);
        });
    }
};

export { setListeners };