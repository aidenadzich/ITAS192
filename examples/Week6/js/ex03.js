const body = document.querySelector("body");
const el1=document.querySelector("#level1");
const el2=document.querySelector("#level2");
const elTable=document.querySelector("#tableId");
const elRowArr=document.querySelectorAll("tr");
const elColArr=document.querySelectorAll("td");

const changeClass = function() {
    this.classList.toggle("colourClass");
}

const changeFont = function() {
    this.classList.toggle("newFont");
}

const whatClicked = function() {
    let target = e.target;
    console.log(target);
    let targetNow = e.currentTarget;
}

elTable.addEventListener('click', whatClicked, false);