const createLayout = () => {
    const contentContainer = document.querySelector('#content');
    const selectionGrid = document.createElement('div');
    selectionGrid.classList.add('grid');
    const addItem = document.createElement('button');
    addItem.id = 'add-item';
    addItem.textContent = 'Add Item';

    contentContainer.append(addItem);
    contentContainer.append(selectionGrid);
};

const itemManipulation = {
    contentContainer: document.querySelector('#content'),
    selectionGrid: null,

    updateProperties: function() {
        this.selectionGrid = document.querySelector('.grid');
    },

    addItem: function() {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item', 'to-do');
        this.selectionGrid.append(gridItem);
        return gridItem;
    },

    removeItem: function(e) {
        let currentTarget = e.target;
        currentTarget.parentNode.removeChild(currentTarget);
    },

    markComplete: function(e) {
        e.target.classList.toggle('complete');
    },

//     setPriority
    
//     setDescription
    
//     setDueDate

};

export { itemManipulation, createLayout };