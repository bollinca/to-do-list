const createLayout = () => {
    const contentContainer = document.querySelector('#content');
    const selectionGrid = document.createElement('div');
    selectionGrid.classList.add('grid');
    const addItem = document.createElement('button');
    addItem.id = 'add-item';
    addItem.textContent = 'Add Item';
    const projectMenu = document.createElement('div');
    projectMenu.id = 'project-menu';
    projectMenu.textContent = 'Projects:'

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
        gridItem.append(removeButton);

        this.selectionGrid.append(gridItem);
        return gridItem;
    },

    removeItem: function (target) {
        target.parentNode.removeChild(target);
    },

    markComplete: function (target) {
        target.classList.toggle('complete');
    },

    //     setPriority

    //     setDescription

    //     setDueDate

};

export { itemManipulation, createLayout };