import { createLayout, itemManipulation } from './dom-manip.js';

createLayout();
itemManipulation.updateProperties();
itemManipulation.addItem();
itemManipulation.addItem();
itemManipulation.addItem();

let testTime = itemManipulation.addItem();
let addItem = document.querySelector('#add-item');
let removeButtons = Array.from(document.querySelectorAll('.remove'));
removeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let target = e.target.parentNode;
        console.log(e.target.parentNode);
        itemManipulation.removeItem(target);
    })
});

testTime.addEventListener('click', (e) => itemManipulation.markComplete(e));
addItem.addEventListener('click', () => itemManipulation.addItem());