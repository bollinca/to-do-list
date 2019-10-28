import { toDoController, toDoForm, projectController } from './dom-manip.js';
import { storageControl } from './storage.js';

const setListeners = {
    toDoDeletion: function () {
        let toDoDeleters = Array.from(document.querySelectorAll('.remove'));
        toDoDeleters.forEach(remover => {
            remover.addEventListener('click', () => {
                let toDoControls = remover.parentNode;
                let toDo = toDoControls.parentNode;
                toDoController.remove(toDo);
                storageControl.items.setAllItems();
            });
        });
    },

    toDoCompletion: function () {
        let toDoArray = Array.from(document.querySelectorAll('.list-item'));
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
            this.toDoDescriptionExpansion(newToDo);
            storageControl.items.setAllItems();

            let newEditor = newToDo.querySelector('.edit');
            newEditor.addEventListener('click', (e) => {
                toDoForm.display(e);
                this.editItem(e);
            });
        });
    },

    toDoDescriptionExpansion: function (toDo) {
        let expansionButton = toDo.querySelector('.description-expander');
        let description = toDo.querySelector('[data-type=description]');
        expansionButton.addEventListener('click', () => {
            description.classList.toggle('active-description');
        });
    },

    loadToDoListeners: function (toDo) {
        let newEditButton = (toDo.querySelector('.edit'));
        newEditButton.addEventListener('click', (e) => {
            toDoForm.display(e);
            this.editItem(e);
        });
        let newExpansionButton = toDo.querySelector('.description-expander');
        let description = toDo.querySelector('[data-type=description]');
        newExpansionButton.addEventListener('click', () => {
            description.classList.toggle('active-description');
        });

        let checkbox = toDo.querySelector('.complete-checkbox');
        if (toDo.attributes['data-type-completed'].value === 'true') {
            toDo.classList.add('complete');
            checkbox.checked = true;
        }
    },

    projectList: document.querySelectorAll('button.folder'),

    updateProjectList: function () {
        this.projectList = document.querySelectorAll('button.folder');
    },

    projectCreation: function () {
        let createProjectButton = document.querySelector('#create-project');
        createProjectButton.addEventListener('click', () => {
            let project = projectController.addProject()
            this.updateProjectList();
            this.projectDeletion();
            this.projectSelection();
            project.click();
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

    projectDeletion: function () {
        this.projectList.forEach(project => {
            let projectContainer = project.parentNode;
            let projectDataName = project.attributes['data-project-name'].value;
            let projectDeleter = projectContainer.querySelector('.folder-delete');
            if (projectDeleter.hasAttribute('data-has-delete-listener')) {
                return;
            } else {
                projectDeleter.toggleAttribute('data-has-delete-listener');
                projectDeleter.addEventListener('click', () => {
                    projectContainer.parentNode.removeChild(projectContainer);
                    let projectChildren = document.querySelectorAll(`div[data-parent-project=${projectDataName}`);
                    projectChildren.forEach(toDoChild => {
                        let toDoRemove = toDoChild.querySelector('.remove');
                        toDoRemove.click();
                    });
                    storageControl.projects.setAllProj();
                    storageControl.items.setAllItems();
                });
            }
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
            }
            form.parentNode.removeChild(form);

            formTarget.setAttribute('data-type-name', userInputs[0].value);
            formTarget.setAttribute('data-type-due-date', userInputs[1].value);
            formTarget.setAttribute('data-type-priority', userInputs[2].value);
            formTarget.setAttribute('data-type-description', userInputs[3].value);
            storageControl.items.setAllItems();
        });
    },

    setAll: function () {
        this.toDoCreation();
        this.toDoDeletion();
        this.toDoCompletion();
        this.projectCreation();
    },
};

export { setListeners };