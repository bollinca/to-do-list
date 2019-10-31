import { storageControl } from './storage.js'

const createLayout = () => {
  const mainContainer = document.querySelector('#content')
  const toDoList = document.createElement('div')
  toDoList.classList.add('list')

  const toDoButton = document.createElement('button')
  toDoButton.id = 'add-item'
  toDoButton.textContent = 'Add Item'

  const projectMenu = document.createElement('div')
  projectMenu.id = 'project-menu'
  const pMenuTitle = document.createElement('h2')
  pMenuTitle.textContent = 'Projects:'
  const projectButton = document.createElement('button')
  projectButton.textContent = 'New Project'
  projectButton.id = 'create-project'

  projectMenu.append(pMenuTitle)
  projectMenu.append(projectButton)
  mainContainer.append(projectMenu)
  mainContainer.append(toDoButton)
  mainContainer.append(toDoList)
}

const toDoController = {
  mainContainer: document.querySelector('#content'),
  toDoList: null,

  defineList: function () {
    this.toDoList = document.querySelector('.list')
  },

  addToDo: function (project = null, name = 'Default Name', due = '2019-09-09', priority = '5', description = 'Default Description', completed = false) {
    let activeFolderName
    let activeFolder
    if (project === null) {
      activeFolder = (() => document.querySelector('.folder[data-folder-active]'))()
      activeFolderName = (() => activeFolder.attributes['data-project-name'].value)()
    } else if (project !== null) {
      activeFolder = document.querySelector(`.folder[data-project-name=${project}]`)
      if (activeFolder === null) {
        console.log('no active folder')
      } else {
        activeFolderName = project
        activeFolder.click()
      }
    }

    const toDoContainer = document.createElement('div')
    toDoContainer.classList.add('list-item', 'to-do')
    toDoContainer.setAttribute('data-parent-project', activeFolderName)
    toDoContainer.setAttribute('data-type-name', name)
    toDoContainer.setAttribute('data-type-due-date', due)
    toDoContainer.setAttribute('data-type-priority', priority)
    toDoContainer.setAttribute('data-type-description', description)
    toDoContainer.setAttribute('data-type-completed', completed)

    const toDoDeleter = document.createElement('button')
    toDoDeleter.classList.add('remove')
    toDoDeleter.textContent = 'X'

    const toDoEditor = document.createElement('button')
    toDoEditor.classList.add('edit')
    toDoEditor.textContent = 'Edit'

    const toDoControls = document.createElement('div')
    toDoControls.class = 'item-controls'
    toDoControls.append(toDoDeleter, toDoEditor)
    toDoContainer.append(toDoControls)
    // Editable properties
    const toDoName = document.createElement('h2')
    toDoName.textContent = name
    toDoName.setAttribute('data-type', 'name')

    const toDoDueDate = document.createElement('h3')
    toDoDueDate.textContent = due
    toDoDueDate.setAttribute('data-type', 'due-date')

    const toDoPriority = document.createElement('p')
    toDoPriority.textContent = priority
    toDoPriority.setAttribute('data-type', 'priority')

    const toDoDescription = document.createElement('p')
    const descriptionExpander = document.createElement('button')
    descriptionExpander.classList.add('description-expander')
    descriptionExpander.textContent = 'Show/Hide Description'
    toDoDescription.textContent = description
    toDoDescription.setAttribute('data-type', 'description')

    const toDoCheckbox = document.createElement('input')
    toDoCheckbox.setAttribute('type', 'checkbox')
    toDoCheckbox.classList.add('complete-checkbox')

    this.toDoList.append(toDoContainer)
    toDoContainer.append(toDoCheckbox, toDoName, toDoDueDate, toDoPriority, descriptionExpander, toDoDescription)
    storageControl.items.setAllItems()

    return toDoContainer
  },

  remove: function (toDo) {
    toDo.parentNode.removeChild(toDo)
  },

  markComplete: function (toDo) {
    toDo.classList.toggle('complete')
    if (toDo.classList.contains('complete')) {
      toDo.setAttribute('data-type-completed', true)
    } else {
      toDo.setAttribute('data-type-completed', false)
    }
    storageControl.items.setAllItems()
  }
}

const projectController = {
  projectMenu: null,
  updateProjMenu: function () {
    this.projectMenu = document.querySelector('#project-menu')
  },

  addProject: function (projectName) {
    const oldActiveProject = document.querySelector('.folder[data-folder-active]')
    if (document.querySelector('.folder[data-folder-active]')) {
      (() => {
        oldActiveProject.toggleAttribute('data-folder-active')
      })()
    }

    const projectList = document.querySelectorAll('.folder')

    if (!projectName) {
      projectName = window.prompt('Project Name?')
      if (projectName === null) {
        throw new Error('prompt cancelled')
      }
    }

    projectList.forEach(project => {
      if (projectName === project.attributes['data-project-name'].value) {
        oldActiveProject.click()
        window.alert('Name in use. Please select another')
        throw new Error('Name in use')
      }
    })
    const projectContainer = document.createElement('div')
    const project = document.createElement('button')
    const projectDelete = document.createElement('button')

    projectDelete.classList.add('folder-delete')
    projectContainer.append(project)
    projectContainer.append(projectDelete)

    project.classList.add('folder')
    project.textContent = projectName

    project.setAttribute('data-project-name', `${project.textContent}`)
    project.toggleAttribute('data-folder-active')
    project.addEventListener('click', (e) => {
      this.hideInactiveToDos(e.target.textContent)
    })
    this.projectMenu.append(projectContainer)
    storageControl.projects.setAllProj()
    return project
  },

  hideInactiveToDos: function (activeFolderName) {
    const allToDos = Array.from(document.querySelectorAll('.list-item'))
    allToDos.forEach(toDo => {
      if (toDo.attributes['data-parent-project'].value !== activeFolderName && toDo.hasAttribute('data-item-hidden') === false) {
        toDo.toggleAttribute('data-item-hidden')
      } else if (toDo.attributes['data-parent-project'].value === activeFolderName && toDo.attributes['data-item-hidden']) {
        toDo.toggleAttribute('data-item-hidden')
      }
    })
  }
}

const toDoForm = {
  mainContainer: document.querySelector('#content'),

  display: function (event) {
    const toDo = event.target.parentNode.parentNode
    if (!document.querySelector('#item-form')) {
      const form = document.createElement('form')
      form.id = 'item-form'

      const oldName = toDo.querySelector('h2[data-type=name]')
      const oldPriority = toDo.querySelector('p[data-type=priority]')
      const oldDue = toDo.querySelector('h3')
      const oldDescription = toDo.querySelector('p[data-type=description]')

      const nameLabel = document.createElement('label')
      nameLabel.setAttribute('for', 'name')
      nameLabel.textContent = 'Name:'
      const nameInput = document.createElement('input')
      nameInput.setAttribute('type', 'text')
      nameInput.id = 'name'
      nameInput.value = `${oldName.textContent}`
      nameInput.setAttribute('data-type-name', nameInput.value)

      const priorityLabel = document.createElement('label')
      priorityLabel.setAttribute('for', 'priority')
      priorityLabel.textContent = 'Priority Level:'
      const priorityInput = document.createElement('input')
      priorityInput.id = 'priority'
      priorityInput.setAttribute('type', 'number')
      priorityInput.value = `${oldPriority.textContent}`
      priorityInput.setAttribute('data-type-priority', priorityInput.value)

      const dueLabel = document.createElement('label')
      dueLabel.setAttribute('for', 'due')
      dueLabel.textContent = 'Due Date:'
      const dueInput = document.createElement('input')
      dueInput.id = 'due'
      dueInput.setAttribute('type', 'date')
      dueInput.value = `${oldDue.textContent}`
      dueInput.setAttribute('data-type-due-date', dueInput.value)

      const descriptionLabel = document.createElement('label')
      descriptionLabel.setAttribute('for', 'description')
      descriptionLabel.textContent = 'Description:'
      const descriptionInput = document.createElement('textarea')
      descriptionInput.id = 'description'
      descriptionInput.textContent = `${oldDescription.textContent}`
      descriptionInput.setAttribute('data-type-description', descriptionInput.value)

      const formConfirm = document.createElement('button')
      formConfirm.setAttribute('type', 'button')
      formConfirm.textContent = 'Confirm'
      formConfirm.id = 'confirm'

      form.append(nameLabel, nameInput, dueLabel, dueInput, priorityLabel, priorityInput, descriptionLabel, descriptionInput, formConfirm)

      this.mainContainer.append(form)
    }
  }
}

export { toDoController, createLayout, projectController, toDoForm }
