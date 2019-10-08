import { toDoController, toDoForm, projectController } from './dom-manip.js';

const setListeners = {
    removeItem: function () {
        let removeButtons = Array.from(document.querySelectorAll('.remove'));
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                let itemControls = button.parentNode;
                let entireItem = itemControls.parentNode;
                toDoController.remove(entireItem);
            });
        });
    },

    markComplete: function () {
        let gridItems = Array.from(document.querySelectorAll('.grid-item'));
        gridItems.forEach(item => {
            let completeCheckbox = item.querySelector('.complete-checkbox');
            completeCheckbox.addEventListener('click', () => {
                toDoController.markComplete(item);
            });
        });
    },

    addNew: function (target) {
        let addItem = document.querySelector('#add-item');
        addItem.addEventListener('click', () => {
            let newItem = toDoController.addToDo();
            let newCheckbox = newItem.querySelector('.complete-checkbox');
            newCheckbox.addEventListener('click', () => toDoController.markComplete(newItem));

            let newRemoveButton = newItem.querySelector('.remove');
            newRemoveButton.addEventListener('click', () => toDoController.remove(newItem));

            let newEditButton = newItem.querySelector('.edit');
            newEditButton.addEventListener('click', (e) => {
                toDoForm.display()
                this.editItem(e);
            });
        });
    },

    addProject: function () {
        let createProjectButton = document.querySelector('#create-project');
        createProjectButton.addEventListener('click', () => projectController.addProject());
    },

    callForm: function () {
        let editButtons = Array.from(document.querySelectorAll('.edit'));
        editButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                toDoForm.display();
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
};

export { setListeners };