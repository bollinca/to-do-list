import { setListeners } from "./listener-control";

const createLayout = () => {
    const mainContainer = document.querySelector('#content');
    const toDoGrid = document.createElement('div');
    toDoGrid.classList.add('grid');

    const toDoButton = document.createElement('button');
    toDoButton.id = 'add-item';
    toDoButton.textContent = 'Add Item';

    const projectMenu = document.createElement('div');
    projectMenu.id = 'project-menu';
    const pMenuTitle = document.createElement('h2');
    pMenuTitle.textContent = 'Projects:';
    const projectButton = document.createElement('button');
    projectButton.textContent = 'New Project';
    projectButton.id = 'create-project';

    projectMenu.append(pMenuTitle);
    projectMenu.append(projectButton);
    mainContainer.append(projectMenu);
    mainContainer.append(toDoButton);
    mainContainer.append(toDoGrid);
};

const toDoController = {
    mainContainer: document.querySelector('#content'),
    toDoGrid: null,

    defineGrid: function () {
        this.toDoGrid = document.querySelector('.grid');
    },

    addToDo: function () {
        let activeFolder = (() => document.querySelector('.folder[data-folder-active]'))();
        let activeFolderName = (() => activeFolder.attributes['data-project-name'].value)();

        let toDoContainer = document.createElement('div');
        toDoContainer.classList.add('grid-item', 'to-do');
        toDoContainer.setAttribute('data-parent-project', `${activeFolderName}`)

        let toDoDeleter = document.createElement('button');
        toDoDeleter.classList.add('remove');
        toDoDeleter.textContent = 'X';

        let toDoEditor = document.createElement('button');
        toDoEditor.classList.add('edit');
        toDoEditor.textContent = 'Edit';

        let toDoControls = document.createElement('div');
        toDoControls.class = 'item-controls';
        toDoControls.append(toDoDeleter, toDoEditor);
        toDoContainer.append(toDoControls);

        let toDoName = document.createElement('h2');
        toDoName.textContent = 'Default Title';
        toDoName.setAttribute('data-type', 'name');

        let toDoDueDate = document.createElement('h3');
        toDoDueDate.textContent = '2019-09-09';
        toDoDueDate.setAttribute('data-type', 'due-date');

        let toDoPriority = document.createElement('p');
        toDoPriority.textContent = '5';
        toDoPriority.setAttribute('data-type', 'priority');

        let toDoDescription = document.createElement('p');
        toDoDescription.textContent = 'Test description';
        toDoDescription.setAttribute('data-type', 'description');

        let toDoCheckbox = document.createElement('input');
        toDoCheckbox.setAttribute('type', 'checkbox');
        toDoCheckbox.classList.add('complete-checkbox');

        this.toDoGrid.append(toDoContainer);
        toDoContainer.append(toDoName, toDoDueDate, toDoPriority, toDoDescription, toDoCheckbox);

        return toDoContainer;
    },

    remove: function (toDo) {
        toDo.parentNode.removeChild(toDo);
    },

    markComplete: function (toDo) {
        toDo.classList.toggle('complete');
    },
};

const projectController = {
    projectMenu: null,
    updateProjMenu: function () {
        this.projectMenu = document.querySelector('#project-menu')
    },

    addProject: function (projectName) {
        let oldActiveProject = document.querySelector('.folder[data-folder-active]');
        if (document.querySelector('.folder[data-folder-active]')) {
            (() => {
                oldActiveProject.toggleAttribute('data-folder-active');
            })();
        };

        let projectList = document.querySelectorAll('.folder');
        
        if (!projectName) {
            projectName = prompt('Project Name?');
        };

        projectList.forEach(project => {
            if (projectName === project.attributes['data-project-name'].value) {
                oldActiveProject.click();
                alert('Name in use. Please select another');
                throw 'Name in use';
            }
        });
        let projectContainer = document.createElement('div');
        let project = document.createElement('button');
        let projectDelete = document.createElement('button');

        projectDelete.classList.add('folder-delete');
        projectContainer.append(project);
        projectContainer.append(projectDelete);

        project.classList.add('folder');
        project.textContent = projectName;

        project.setAttribute('data-project-name', `${project.textContent}`);
        project.toggleAttribute('data-folder-active');
        project.addEventListener('click', (e) => {
            this.hideInactiveToDos(e.target.textContent);
        });
        setListeners.projectDeletion(project);
        this.projectMenu.append(projectContainer);
        return project;
    },

    hideInactiveToDos: function (activeFolderName) {
        let allToDos = Array.from(document.querySelectorAll(`.grid-item`));
        allToDos.forEach(toDo => {
            if (toDo.attributes['data-parent-project'].value !== activeFolderName && toDo.hasAttribute('data-item-hidden') === false) {
                toDo.toggleAttribute('data-item-hidden');
            } else if (toDo.attributes['data-parent-project'].value === activeFolderName && toDo.attributes['data-item-hidden']) {
                toDo.toggleAttribute('data-item-hidden');
            }
        });
    },
}

const toDoForm = {
    mainContainer: document.querySelector('#content'),

    display: function (event) {
        let form = document.createElement('form');
        form.id = 'item-form';
        let toDo = event.target.parentNode.parentNode;

        let oldName = toDo.querySelector('h2[data-type=name]');
        let oldPriority = toDo.querySelector('p[data-type=priority]');
        let oldDue = toDo.querySelector('h3');
        let oldDescription = toDo.querySelector('p[data-type=description]');

        let nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'name');
        nameLabel.textContent = 'Name:'
        let nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.id = 'name';
        nameInput.value = `${oldName.textContent}`;

        let priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = 'Priority Level:';
        let priorityInput = document.createElement('input');
        priorityInput.id = 'priority';
        priorityInput.setAttribute('type', 'number');
        priorityInput.value = `${oldPriority.textContent}`;

        let dueLabel = document.createElement('label');
        dueLabel.setAttribute('for', 'due');
        dueLabel.textContent = 'Due Date:';
        let dueInput = document.createElement('input');
        dueInput.id = 'due';
        dueInput.setAttribute('type', 'date');
        dueInput.value = `${oldDue.textContent}`

        let descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        descriptionLabel.textContent = 'Description:';
        let descriptionInput = document.createElement('textarea');
        descriptionInput.id = 'description';
        descriptionInput.textContent = `${oldDescription.textContent}`;

        let formConfirm = document.createElement('button');
        formConfirm.setAttribute('type', 'button');
        formConfirm.textContent = 'Confirm';
        formConfirm.id = 'confirm';

        form.append(nameLabel, nameInput, dueLabel, dueInput, priorityLabel, priorityInput, descriptionLabel, descriptionInput, formConfirm);

        this.mainContainer.append(form);
    },
};

export { toDoController, createLayout, projectController, toDoForm };