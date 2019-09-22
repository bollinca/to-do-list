const createLayout = () => {
    const contentContainer = document.querySelector('#content');
    const selectionGrid = document.createElement('div');
    selectionGrid.classList.add('grid');

    const addItem = document.createElement('button');
    addItem.id = 'add-item';
    addItem.textContent = 'Add Item';

    const projectMenu = document.createElement('div');
    projectMenu.id = 'project-menu';
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Projects:';
    const makeNewProject = document.createElement('button');
    makeNewProject.textContent = 'New Project';
    makeNewProject.id = 'create-project';

    projectMenu.append(menuTitle);
    projectMenu.append(makeNewProject);
    contentContainer.append(projectMenu);
    contentContainer.append(addItem);
    contentContainer.append(selectionGrid);
};

const itemManipulation = {
    contentContainer: document.querySelector('#content'),
    selectionGrid: null,

    updateProperties: function () {
        this.selectionGrid = document.querySelector('.grid');
    },

    addItem: function () {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item', 'to-do');

        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'X';
        
        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        
        let itemControlsDiv = document.createElement('div');
        itemControlsDiv.class = 'item-controls';
        itemControlsDiv.append(removeButton, editButton);
        gridItem.append(itemControlsDiv);

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

        this.selectionGrid.append(gridItem);
        gridItem.append(itemName, itemDue, itemPriority, itemDescription);
        return gridItem;
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
        let folder = document.createElement('button');
        folder.classList.add('folder');
        let folderName = prompt('Project Name?');
        folder.textContent = folderName;
        this.container.append(folder);
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

        form.append(nameLabel);
        form.append(nameInput);
        form.append(priorityLabel);
        form.append(priorityInput);
        form.append(dueLabel);
        form.append(dueInput);
        form.append(descriptionLabel);
        form.append(descriptionInput);
        form.append(confirmButton);

        console.log(form);
        this.contentContainer.append(form);
    },
};

export { itemManipulation, createLayout, folderManipulation, itemForm };