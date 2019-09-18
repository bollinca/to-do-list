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

        let itemName = document.createElement('h2');
        itemName.textContent = 'Hey dude';
        let itemDue = document.createElement('h3');
        itemDue.textContent = '9/9/19';
        let itemPriority = document.createElement('p');
        itemPriority.textContent = '5';

        this.selectionGrid.append(gridItem);
        gridItem.append(itemName);
        gridItem.append(itemDue);
        gridItem.append(itemPriority);
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

const folderManipulation = {
    container: null,
    updateContainer: function () {
        this.container = document.querySelector('#project-menu')
    },

    // addFolder: function() {
// 
    // },
// 
    // removeFolder: function() {
        // 
    // }
}

export { itemManipulation, createLayout, folderManipulation };