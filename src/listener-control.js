import { itemManipulation, itemForm, folderManipulation } from './dom-manip.js';

const setListeners = {
    removeItem: function () {
        let removeButtons = Array.from(document.querySelectorAll('.remove'));
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                let itemControls = button.parentNode;
                let entireItem = itemControls.parentNode;
                itemManipulation.removeItem(entireItem);
            });
        });
    },

    markComplete: function () {
        let gridItems = Array.from(document.querySelectorAll('.grid-item'));
        gridItems.forEach(item => {
            let completeCheckbox = item.querySelector('.complete-checkbox');
            completeCheckbox.addEventListener('click', () => {
                itemManipulation.markComplete(item);
            });
        });
    },

    addNew: function (target) {
        let addItem = document.querySelector('#add-item');
        addItem.addEventListener('click', () => {
            let newItem = itemManipulation.addItem();
            let newCheckbox = newItem.querySelector('.complete-checkbox');
            newCheckbox.addEventListener('click', () => itemManipulation.markComplete(newItem));

            let newRemoveButton = newItem.querySelector('.remove');
            newRemoveButton.addEventListener('click', () => itemManipulation.removeItem(newItem));

            let newEditButton = newItem.querySelector('.edit');
            newEditButton.addEventListener('click', (e) => {
                itemForm.createForm()
                this.editItem(e);
            });
        });
    },

    addProject: function () {
        let createProjectButton = document.querySelector('#create-project');
        createProjectButton.addEventListener('click', () => folderManipulation.addFolder());
    },

    callForm: function () {
        let editButtons = Array.from(document.querySelectorAll('.edit'));
        editButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                itemForm.createForm();
                this.editItem(e);
            });
        });
    },

    editItem: function (e) {
        let itemControls = e.target.parentNode;
        let targetForEdit = itemControls.parentNode;
        let confirm = document.querySelector('#confirm');
        let form = confirm.parentNode;

        let formArray = Array.from(form.querySelectorAll('input'));
        formArray.push(form.querySelector('#description'));

        confirm.addEventListener('click', () => {
            let formValues = formArray.map((item) => (item.value));
            let dataChunks = targetForEdit.querySelectorAll(`[data-type]`);
            for (let i = 0; i < dataChunks.length; i++) {
                dataChunks[i].textContent = formValues[i];
            };
            form.parentNode.removeChild(form);
        });
    },

    hideOtherFolderItems: function () {
        let folders = Array.from(document.querySelectorAll('.folder'));
        folders.forEach(folder => {
            folder.addEventListener('click', (e) => {
                folderManipulation.hideContent(e.target.attributes['data-project-name'].value);
            })
        });
    },
};

export { setListeners };