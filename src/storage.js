const storageControl = {
    projectList: document.querySelectorAll('.folder'),
    itemList: document.querySelectorAll('.list-item'),

    updateProjList: function () {
        this.projectList = document.querySelectorAll('.folder')
        console.log(this.projectList);
    },

    setAllProj: function () {
        this.updateProjList();
        localStorage.setItem('allProjects', `${this.projectList}`);
    },

    getAllProj: function () {
        localStorage.getItem('allProjects');
    },

    updateItemList: function () {
        this.itemList = document.querySelectorAll('.list-item');
        console.log(this.itemList);
    },

    setAllItems: function () {
        this.updateItemList();
        localStorage.setItem('allItems', `${this.itemList}`);
    },

    getAllItems: function () {
        localStorage.getItem('allItems');
    }

};

export { storageControl };