const currentEl = document.querySelector("#current");
const elTable=document.querySelector("#tableId");


const whatClicked = function(e) {
    let target = e.target;
    console.log(target);
    let targetNow = e.currentTarget;
    currentEl.innerHTML += `${target.tagName} was pressed from overtarget ${targetNow.tagName}<br>`;
    target.textContent = `Changed it`
}

elTable.addEventListener('click', whatClicked, false);