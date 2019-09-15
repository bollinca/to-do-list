import { createLayout, itemManipulation } from './dom-manip.js';

createLayout();
itemManipulation.updateProperties();
itemManipulation.addItem();
itemManipulation.addItem();
itemManipulation.addItem();

let addItem = document.querySelector('#add-item');
let removeButtons = Array.from(document.querySelectorAll('.remove'));
removeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let target = e.target.parentNode;
        itemManipulation.removeItem(target);
    })
});
let gridItems = Array.from(document.querySelectorAll('.grid-item'));
gridItems.forEach(item => {
    item.addEventListener('click', (e) => itemManipulation.markComplete(e.target));
});

addItem.addEventListener('click', () => {
    let currentItem = itemManipulation.addItem();
    currentItem.addEventListener('click', (e) => itemManipulation.markComplete(e.target));
    let itemRemover = currentItem.querySelector('.remove');
    itemRemover.addEventListener('click', (e) => {
        let target = e.target.parentNode;
        itemManipulation.removeItem(target);
    });
});
