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

    projectList: document.querySelectorAll('button.folder'),

    updateProjectList: function () {
        this.projectList = document.querySelectorAll('button.folder');
    },

    projectCreation: function () {
        let createProjectButton = document.querySelector('#create-project');
        createProjectButton.addEventListener('click', () => {
            let project = projectController.addProject()
            this.updateProjectList();
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

    projectDeletion: function (project) {
        let projectContainer = project.parentNode;
        let projectDataName = project.attributes['data-project-name'].value;
        let projectDeleter = projectContainer.querySelector('.folder-delete');
        projectDeleter.addEventListener('click', () => {
            projectContainer.parentNode.removeChild(projectContainer);
            let projectChildren = document.querySelectorAll(`div[data-parent-project=${projectDataName}`);
            projectChildren.forEach(toDoChild => {
                let toDoRemove = toDoChild.querySelector('.remove');
                toDoRemove.click();
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

    setAll: function () {
        this.toDoCreation();
        this.toDoDeletion();
        this.toDoCompletion();
        this.projectCreation();
    },
};

export { setListeners };