const createLayout = () => {
    const contentContainer = document.querySelector('#content');
    const selectionGrid = document.createElement('div');
    selectionGrid.classList.add('grid');

    contentContainer.append(selectionGrid);
};

const itemManipulation = {
    contentContainer: document.querySelector('#content'),
    selectionGrid: document.querySelector('#content div'),
    addItem: function() {
        console.log(this.contentContainer);
        console.log(this.selectionGrid)
    },

//     const removeItem

//     const markComplete

//     const setPriority
    
//     const setDescription
    
//     const setDueDate

//     const setClass
};

export { itemManipulation, createLayout };