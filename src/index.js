import { createLayout, toDoController, projectController } from './dom-manip.js'
import { setListeners } from './listener-control.js'
import { storageControl } from './storage.js'

createLayout()
toDoController.defineList()

projectController.updateProjMenu()
if (window.localStorage.allProjects) {
  storageControl.projects.summonStored()
  setListeners.updateProjectList()
  setListeners.projectDeletion()
  setListeners.projectSelection()
  if (window.localStorage.allItems) {
    storageControl.items.summonStored()
  }
} else {
  projectController.addProject('Default')
  setListeners.updateProjectList()
  setListeners.projectDeletion()
  setListeners.projectSelection()
}

setListeners.setAll()
