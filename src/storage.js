import { projectController } from './dom-manip.js';

const storageControl = {
    projectList: document.querySelectorAll('.folder'),
    itemList: document.querySelectorAll('.list-item'),

    projects: {
        setAllProj: function () {
            this.projectList = Array.from(document.querySelectorAll('.folder'));
            this.projectList = this.projectList.map(item => item.attributes['data-project-name'].value);
            localStorage.setItem('allProjects', `${JSON.stringify(this.projectList)}`);
        },

        getAllProj: function () {
            return JSON.parse(localStorage.getItem('allProjects'));
        },

        summonStoredProjects: function () {
            let projectNames = this.getAllProj();
            projectNames.forEach(name => projectController.addProject(name));
        },
    },

    items: {
        setAllItems: function () {
            this.itemList = Array.from(document.querySelectorAll('.list-item'));
            
            localStorage.setItem('allItems', `${this.itemList}`);
            // this.itemList.forEach(item => console.log(item.attributes));
        },

        getAllItems: function () {
            localStorage.getItem('allItems');
        }
    }

};

export { storageControl };