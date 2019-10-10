import { toDoController, toDoForm, projectController } from './dom-manip.js';

const setListeners = {
    toDoDeletion: function () {
        let toDoDeleters = Array.from(document.querySelectorAll('.remove'));
        toDoDeleters.forEach(remover => {
            remover.addEventListener('click', () => {
                let toDoControls = remover.parentNode;
                let toDo = toDoControls.parentNode;
                toDoController.remove(toDo);
            });
        });
    },

    toDoCompletion: function () {
        let toDoArray = Array.from(document.querySelectorAll('.grid-item'));
        toDoArray.forEach(toDo => {
            let toDoCheckbox = toDo.querySelector('.complete-checkbox');
            toDoCheckbox.addEventListener('click', () => {
                toDoController.markComplete(toDo);
            });
        });
    },

    toDoCreation: function () {
        let toDoCreator = document.querySelector('#add-item');
        toDoCreator.addEventListener('click', () => {
            let newToDo = toDoController.addToDo();
            let newCompleter = newToDo.querySelector('.complete-checkbox');
            newCompleter.addEventListener('click', () => toDoController.markComplete(newToDo));

            let newDeleter = newToDo.querySelector('.remove');
            newDeleter.addEventListener('click', () => toDoController.remove(newToDo));

            let newEditor = newToDo.querySelector('.edit');
            newEditor.addEventListener('click', (e) => {
                toDoForm.display()
                this.editItem(e);
            });
        });
    },

    projectList: document.querySelectorAll('button.folder'),

    updateProjectList: function () {
        this.projectList = document.querySelectorAll('button.folder');
    },

    projectCreation: function () {
        let createProjectButton = document.querySelector('#create-project');
        createProjectButton.addEventListener('click', () => {
            projectController.addProject()
            this.updateProjectList();
            this.projectSelection();
        });

    },

    projectSelection: function () {
        this.projectList.forEach(project => {
            if (project.hasAttribute('data-has-select-listener') !== true) {
                project.addEventListener('click', () => {
                    this.projectDeactivation(this.projectList);
                    project.setAttribute('data-has-select-listener', true);
                    project.toggleAttribute('data-folder-active');
                });
            }
        });
    },

    projectDeactivation: function (listOfProjects) {
        listOfProjects.forEach(project => {
            if (project.hasAttribute('data-folder-active')) {
                project.toggleAttribute('data-folder-active');
            }
        });
    },

    formSummoning: function () {
        let toDoEditors = Array.from(document.querySelectorAll('.edit'));
        toDoEditors.forEach(editor => {
            editor.addEventListener('click', (e) => {
                toDoForm.display();
                this.editItem(e);
            });
        });
    },

    editItem: function (e) {
        let itemControls = e.target.parentNode;
        let formTarget = itemControls.parentNode;
        let formConfirm = document.querySelector('#confirm');
        let form = formConfirm.parentNode;

        let userInputs = Array.from(form.querySelectorAll('input'));
        userInputs.push(form.querySelector('#description'));

        formConfirm.addEventListener('click', () => {
            let userData = userInputs.map((input) => (input.value));
            let dataDisplays = formTarget.querySelectorAll(`[data-type]`);
            for (let i = 0; i < dataDisplays.length; i++) {
                dataDisplays[i].textContent = userData[i];
            };
            form.parentNode.removeChild(form);
        });
    },
};

export { setListeners };