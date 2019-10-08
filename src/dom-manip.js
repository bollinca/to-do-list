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

const itemManipulation = {
    mainContainer: document.querySelector('#content'),
    toDoGrid: null,

    updateProperties: function () {
        this.toDoGrid = document.querySelector('.grid');
    },

    addToDo: function () {
        let activeFolder = (() => document.querySelector('.folder[data-folder-active]'))();
        let activeFolderName = (() => activeFolder.attributes['data-project-name'].value)();

        let toDoContainer = document.createElement('div');
        toDoContainer.classList.add('grid-item', 'to-do');
        toDoContainer.setAttribute('data-parent-project', `${activeFolderName}`)

        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'X';

        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';

        let itemControlsDiv = document.createElement('div');
        itemControlsDiv.class = 'item-controls';
        itemControlsDiv.append(removeButton, editButton);
        toDoContainer.append(itemControlsDiv);

        let itemName = document.createElement('h2');
        itemName.textContent = 'Default Title';
        itemName.setAttribute('data-type', 'name');

        let itemDue = document.createElement('h3');
        itemDue.textContent = '9/9/2019';
        itemDue.setAttribute('data-type', 'due-date');

        let itemPriority = document.createElement('p');
        itemPriority.textContent = '5';
        itemPriority.setAttribute('data-type', 'priority');

        let itemDescription = document.createElement('p');
        itemDescription.textContent = 'Test description';
        itemDescription.setAttribute('data-type', 'description');

        let completeCheckbox = document.createElement('input');
        completeCheckbox.setAttribute('type', 'checkbox');
        completeCheckbox.classList.add('complete-checkbox');

        this.toDoGrid.append(toDoContainer);
        toDoContainer.append(itemName, itemDue, itemPriority, itemDescription, completeCheckbox);
        return toDoContainer;
    },

    removeItem: function (target) {
        target.parentNode.removeChild(target);
    },

    markComplete: function (target) {
        target.classList.toggle('complete');
    },
};

const folderManipulation = {
    container: null,
    updateContainer: function () {
        this.container = document.querySelector('#project-menu')
    },

    addFolder: function () {
        if (document.querySelector('.folder[data-folder-active]')) {
            (() => {
                let oldActiveFolder = document.querySelector('.folder[data-folder-active]');
                oldActiveFolder.toggleAttribute('data-folder-active');
            })();
        };

        let folder = document.createElement('button');
        folder.classList.add('folder');
        folder.textContent = prompt('Project Name?');
        folder.setAttribute('data-project-name', `${folder.textContent}`);
        folder.toggleAttribute('data-folder-active');
        folder.addEventListener('click', (e) => {
            this.hideContent(e.target.textContent);
        });
        this.container.append(folder);
    },

    hideContent: function (activeFolderName) {
        let allItems = Array.from(document.querySelectorAll(`.grid-item`));
        allItems.forEach(item => {
            if (item.attributes['data-parent-project'].value !== activeFolderName && item.hasAttribute('data-item-hidden') === false) {
                item.toggleAttribute('data-item-hidden');
            } else if (item.attributes['data-parent-project'].value === activeFolderName && item.attributes['data-item-hidden']) {
                item.toggleAttribute('data-item-hidden');
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

export { itemManipulation, createLayout, folderManipulation, itemForm };