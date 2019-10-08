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

        let toDoDelete = document.createElement('button');
        toDoDelete.classList.add('remove');
        toDoDelete.textContent = 'X';

        let toDoEdit = document.createElement('button');
        toDoEdit.classList.add('edit');
        toDoEdit.textContent = 'Edit';

        let toDoControls = document.createElement('div');
        toDoControls.class = 'item-controls';
        toDoControls.append(toDoDelete, toDoEdit);
        toDoContainer.append(toDoControls);

        let toDoName = document.createElement('h2');
        toDoName.textContent = 'Default Title';
        toDoName.setAttribute('data-type', 'name');

        let toDoDueDate = document.createElement('h3');
        toDoDueDate.textContent = '9/9/2019';
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

    addProject: function () {
        if (document.querySelector('.folder[data-folder-active]')) {
            (() => {
                let oldActiveProject = document.querySelector('.folder[data-folder-active]');
                oldActiveProject.toggleAttribute('data-folder-active');
            })();
        };

        let project = document.createElement('button');
        project.classList.add('folder');
        project.textContent = prompt('Project Name?');
        project.setAttribute('data-project-name', `${project.textContent}`);
        project.toggleAttribute('data-folder-active');
        project.addEventListener('click', (e) => {
            this.hideInactiveToDos(e.target.textContent);
        });
        this.projectMenu.append(project);
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
    // 
    // removeFolder: function() {
    // 
    // }
}

const itemForm = {
    contentContainer: document.querySelector('#content'),

    createForm: function () {
        let form = document.createElement('form');
        form.id = 'item-form';

        let nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'name');
        nameLabel.textContent = 'Name:'
        let nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.id = 'name';

        let priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = 'Priority Level:';
        let priorityInput = document.createElement('input');
        priorityInput.id = 'priority';
        priorityInput.setAttribute('type', 'number');

        let dueLabel = document.createElement('label');
        dueLabel.setAttribute('for', 'due');
        dueLabel.textContent = 'Due Date:';
        let dueInput = document.createElement('input');
        dueInput.id = 'due';
        dueInput.setAttribute('type', 'date');

        let descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        descriptionLabel.textContent = 'Description:';
        let descriptionInput = document.createElement('textarea');
        descriptionInput.id = 'description';

        let confirmButton = document.createElement('button');
        confirmButton.setAttribute('type', 'button');
        confirmButton.textContent = 'Confirm';
        confirmButton.id = 'confirm';

        form.append(nameLabel, nameInput, dueLabel, dueInput, priorityLabel, priorityInput, descriptionLabel, descriptionInput, confirmButton);

        this.contentContainer.append(form);
    },
};

export { toDoController, createLayout, projectController, itemForm };