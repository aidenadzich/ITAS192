function itemDone(e) {
    //todo: Remove the item from the list
    let target = e.target;

    let elParent = target.parentNode;
    let elGrandParent = elParent.parentNode;

    let elList = null;
    let elListParent = null;
    if (target.nodeName.toLowerCase() === "a") {
        elList = elGrandParent;
        elListParent = elParent;
    } else if (target.nodeName.toLowerCase() === "li") {
        elList = elParent;
        elListParent = target;
    }

    if (elList !== null) 
        elList.removeChild(elListParent);
    e.preventDefault();
}
const el = document.querySelector("#shoppingList");
el.addEventListener('click', itemDone);