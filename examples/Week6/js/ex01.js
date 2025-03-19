// Illustrate the difference between capturing and bubbling for events

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const para = document.querySelector("#para");

para.addEventListener('click', function() {
    console.log('Paragraph Clicked!');
}, false);

parent.addEventListener('click', function() {
    console.log('Parent Div Clicked!');
}, false);

child.addEventListener('click', function() {
    console.log('Child Div Clicked!');
}, false);

document.addEventListener('click', function() {
    console.log('Document Clicked Capture');
}, true);