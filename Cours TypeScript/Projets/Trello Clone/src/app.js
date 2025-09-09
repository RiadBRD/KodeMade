"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemsContainer = document.querySelectorAll('.items-container');
function addContainerListners(currentContainer) {
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    deleteBtnListeners(currentContainerDeletionBtn);
}
itemsContainer.forEach((container) => {
    addContainerListners(container);
});
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDeletion);
}
function handleContainerDeletion(event) {
    const btn = event.target;
    const btnArray = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[btnArray.indexOf(btn)]?.remove();
}
//# sourceMappingURL=app.js.map