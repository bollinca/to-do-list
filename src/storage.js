import { projectController, toDoController } from './dom-manip.js';
import { setListeners } from './listener-control.js';

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

        summonStored: function () {
            let projectNames = this.getAllProj();
            projectNames.forEach(name => projectController.addProject(name));
        },
    },

    items: {
        setAllItems: function () {
            this.itemList = Array.from(document.querySelectorAll('.list-item'));
            let itemValuesMapped = this.itemList.map(item => [item.attributes['data-parent-project'].value, item.attributes['data-type-name'].value,
                                                            item.attributes['data-type-due-date'].value, item.attributes['data-type-priority'].value,
                                                            item.attributes['data-type-description'].value, item.attributes['data-type-completed'].value]);
            localStorage.setItem('allItems', JSON.stringify(itemValuesMapped));
        },

        getAllItems: function () {
            return JSON.parse(localStorage.getItem('allItems'));
        },

        summonStored: function () {
            let itemArrays = this.getAllItems();
            itemArrays.forEach(array => {
                let newToDo = toDoController.addToDo(...array);
                setListeners.loadToDoListeners(newToDo);
            });
        }
    },
};

export { storageControl };