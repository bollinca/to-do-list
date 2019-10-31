import { toDoController, toDoForm, projectController } from './dom-manip.js'
import { storageControl } from './storage.js'

const setListeners = {
  toDoDeletion: function () {
    const toDoDeleters = Array.from(document.querySelectorAll('.remove'))
    toDoDeleters.forEach(remover => {
      remover.addEventListener('click', () => {
        const toDoControls = remover.parentNode
        const toDo = toDoControls.parentNode
        toDoController.remove(toDo)
        storageControl.items.setAllItems()
      })
    })
  },

  toDoCompletion: function () {
    const toDoArray = Array.from(document.querySelectorAll('.list-item'))
    toDoArray.forEach(toDo => {
      const toDoCheckbox = toDo.querySelector('.complete-checkbox')
      toDoCheckbox.addEventListener('click', () => {
        toDoController.markComplete(toDo)
      })
    })
  },

  toDoCreation: function () {
    const toDoCreator = document.querySelector('#add-item')
    toDoCreator.addEventListener('click', () => {
      const newToDo = toDoController.addToDo()
      const newCompleter = newToDo.querySelector('.complete-checkbox')
      newCompleter.addEventListener('click', () => toDoController.markComplete(newToDo))

      const newDeleter = newToDo.querySelector('.remove')
      newDeleter.addEventListener('click', () => toDoController.remove(newToDo))
      this.toDoDescriptionExpansion(newToDo)
      storageControl.items.setAllItems()

      const newEditor = newToDo.querySelector('.edit')
      newEditor.addEventListener('click', (e) => {
        toDoForm.display(e)
        this.editItem(e)
      })
    })
  },

  toDoDescriptionExpansion: function (toDo) {
    const expansionButton = toDo.querySelector('.description-expander')
    const description = toDo.querySelector('[data-type=description]')
    expansionButton.addEventListener('click', () => {
      description.classList.toggle('active-description')
    })
  },

  loadToDoListeners: function (toDo) {
    const newEditButton = (toDo.querySelector('.edit'))
    newEditButton.addEventListener('click', (e) => {
      toDoForm.display(e)
      this.editItem(e)
    })
    const newExpansionButton = toDo.querySelector('.description-expander')
    const description = toDo.querySelector('[data-type=description]')
    newExpansionButton.addEventListener('click', () => {
      description.classList.toggle('active-description')
    })

    const checkbox = toDo.querySelector('.complete-checkbox')
    if (toDo.attributes['data-type-completed'].value === 'true') {
      toDo.classList.add('complete')
      checkbox.checked = true
    }
  },

  projectList: document.querySelectorAll('button.folder'),

  updateProjectList: function () {
    this.projectList = document.querySelectorAll('button.folder')
  },

  projectCreation: function () {
    const createProjectButton = document.querySelector('#create-project')
    createProjectButton.addEventListener('click', () => {
      const project = projectController.addProject()
      this.updateProjectList()
      this.projectDeletion()
      this.projectSelection()
      project.click()
    })
  },

  projectSelection: function () {
    this.projectList.forEach(project => {
      if (project.hasAttribute('data-has-select-listener') !== true) {
        project.addEventListener('click', () => {
          this.projectDeactivation(this.projectList)
          project.setAttribute('data-has-select-listener', true)
          project.toggleAttribute('data-folder-active')
        })
      }
    })
  },

  projectDeactivation: function (listOfProjects) {
    listOfProjects.forEach(project => {
      if (project.hasAttribute('data-folder-active')) {
        project.toggleAttribute('data-folder-active')
      }
    })
  },

  projectDeletion: function () {
    this.projectList.forEach(project => {
      const projectContainer = project.parentNode
      const projectDataName = project.attributes['data-project-name'].value
      const projectDeleter = projectContainer.querySelector('.folder-delete')
      if (!projectDeleter.hasAttribute('data-has-delete-listener')) {
        projectDeleter.toggleAttribute('data-has-delete-listener')
        projectDeleter.addEventListener('click', () => {
          projectContainer.parentNode.removeChild(projectContainer)
          const projectChildren = document.querySelectorAll(`div[data-parent-project=${projectDataName}`)
          projectChildren.forEach(toDoChild => {
            const toDoRemove = toDoChild.querySelector('.remove')
            toDoRemove.click()
          })
          storageControl.projects.setAllProj()
          storageControl.items.setAllItems()
        })
      }
    })
  },

  editItem: function (e) {
    const itemControls = e.target.parentNode
    const formTarget = itemControls.parentNode
    const formConfirm = document.querySelector('#confirm')
    const form = formConfirm.parentNode

    const userInputs = Array.from(form.querySelectorAll('input'))
    userInputs.push(form.querySelector('#description'))

    formConfirm.addEventListener('click', () => {
      const userData = userInputs.map((input) => (input.value))
      const dataDisplays = formTarget.querySelectorAll('[data-type]')
      for (let i = 0; i < dataDisplays.length; i++) {
        dataDisplays[i].textContent = userData[i]
      }
      form.parentNode.removeChild(form)

      formTarget.setAttribute('data-type-name', userInputs[0].value)
      formTarget.setAttribute('data-type-due-date', userInputs[1].value)
      formTarget.setAttribute('data-type-priority', userInputs[2].value)
      formTarget.setAttribute('data-type-description', userInputs[3].value)
      storageControl.items.setAllItems()
    })
  },

  setAll: function () {
    this.toDoCreation()
    this.toDoDeletion()
    this.toDoCompletion()
    this.projectCreation()
  }
}

export { setListeners }
