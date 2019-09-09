const createLayout = () => {
    const contentContainer = document.querySelector('#content');
    const selectionGrid = document.createElement('div');
    selectionGrid.classList.add('grid');

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

    // removeItem: function(e) {
    //     let currentTarget = e.target;
    // },

    markComplete: function(e) {
        e.target.classList.add('complete');
    },

//     setPriority
    
//     setDescription
    
//     setDueDate

};

export { itemManipulation, createLayout };