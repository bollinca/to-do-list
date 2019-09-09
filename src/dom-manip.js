const createLayout = () => {
    const contentContainer = document.querySelector('#content');
    const selectionGrid = document.createElement('div');
    selectionGrid.classList.add('grid');

    contentContainer.append(selectionGrid);
};


const itemManipulation = () => {
    const contentContainer = document.querySelector('#content');
    const selectionGrid = document.querySelector('.grid');
    console.log(selectionGrid);
//     const addItem

//     const removeItem

//     const markComplete

//     const setPriority
    
//     const setDescription
    
//     const setDueDate

//     const setClass
};

export { createLayout, itemManipulation };