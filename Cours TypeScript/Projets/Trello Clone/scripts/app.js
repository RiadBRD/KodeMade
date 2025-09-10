"use strict";
const itemsContainer = document.querySelectorAll(".items-container");
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
function addContainerListners(currentContainer) {
    const currentCloseFormBtn = currentContainer.querySelector(".close-form-btn");
    const currentContainerDeletionBtn = currentContainer.querySelector(".delete-container-btn");
    const currentAddItemBtn = currentContainer.querySelector(".add-item-btn");
    const currentForm = currentContainer.querySelector("form");
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
    closingFormBtnListeners(currentCloseFormBtn);
    addFormSubmitListeners(currentForm);
    addDDListeners(currentContainer);
}
itemsContainer.forEach((container) => {
    addContainerListners(container);
});
function addItemBtnListeners(btn) {
    btn.addEventListener("click", handleAddItem);
}
function deleteBtnListeners(btn) {
    btn.addEventListener("click", handleContainerDeletion);
}
function closingFormBtnListeners(btn) {
    btn.addEventListener("click", () => toggleForm(actualBtn, actualForm, false));
}
function addFormSubmitListeners(form) {
    form.addEventListener("submit", createNewItem);
}
function addDDListeners(element) {
    element.addEventListener("dragstart", handleDragStart);
    element.addEventListener("dragover", handleDragOver);
    element.addEventListener("drop", handleDrop);
    element.addEventListener("dragend", handleDragEnd);
}
function handleAddItem(event) {
    const btn = event.target;
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUL = actualContainer.querySelector("ul");
    actualTextInput = actualContainer.querySelector("input");
    actualForm = actualContainer.querySelector("form");
    actualValidation = actualContainer.querySelector(".validation-msg");
}
function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
function handleContainerDeletion(event) {
    var _a;
    const btn = event.target;
    const btnArray = [
        ...document.querySelectorAll(".delete-container-btn"),
    ];
    const containers = [
        ...document.querySelectorAll(".items-container"),
    ];
    (_a = containers[btnArray.indexOf(btn)]) === null || _a === void 0 ? void 0 : _a.remove();
}
function createNewItem(event) {
    event.preventDefault();
    //Validation
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long ";
        return;
    }
    else {
        actualValidation.textContent = "";
    }
    const itemContent = actualTextInput.value;
    const li = `
  <li class="item" draggable="true">
  <p>${itemContent}</p>
  <button>X</button>
  </li>
  `;
    actualUL.insertAdjacentHTML("beforeend", li);
    const item = actualUL.lastElementChild;
    const liBtn = item.querySelector("button");
    handleItemDeletion(liBtn);
    addDDListeners(item);
    actualTextInput.value = "";
}
function handleItemDeletion(btn) {
    btn.addEventListener("click", () => {
        const elToRemove = btn.parentElement;
        elToRemove.remove();
    });
}
//Drag and drop
let dragSrcEl;
function handleDragStart(e) {
    var _a;
    e.stopPropagation();
    if (actualContainer) {
        toggleForm(actualBtn, actualForm, false);
    }
    dragSrcEl = this;
    (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/html", this.innerHTML);
}
function handleDragOver(e) {
    e.preventDefault();
}
function handleDrop(e) {
    var _a, _b;
    e.stopPropagation();
    const receptionEl = this;
    //Bouger dans une liste
    if (dragSrcEl.nodeName === "LI" &&
        receptionEl.classList.contains("items-container")) {
        (_a = receptionEl.querySelector("ul")) === null || _a === void 0 ? void 0 : _a.appendChild(dragSrcEl);
        addDDListeners(dragSrcEl);
        handleItemDeletion(dragSrcEl.querySelector("button"));
    }
    //Swap entre deux elements
    if (dragSrcEl !== this && this.classList[0] === dragSrcEl.classList[0]) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = (_b = e.dataTransfer) === null || _b === void 0 ? void 0 : _b.getData("text/html");
        if (this.classList.contains("items-container")) {
            addContainerListners(this);
            this.querySelectorAll("li").forEach((li) => {
                handleItemDeletion(li.querySelector("button"));
                addDDListeners(li);
            });
        }
        else {
            addDDListeners(this);
            handleItemDeletion(this.querySelector("button"));
        }
    }
}
function handleDragEnd(e) {
    e.stopPropagation();
    if (this.classList.contains("items-container")) {
        addContainerListners(this);
        this.querySelectorAll("li").forEach((li) => {
            handleItemDeletion(li.querySelector("button"));
            addDDListeners(li);
        });
    }
    else {
        addDDListeners(this);
    }
}
// Add New Container
const addContainerBtn = document.querySelector(".add-container-btn");
const addContainerForm = document.querySelector(".add-new-container form");
const addContainerFormInput = document.querySelector(".add-new-container input");
const validationNewContainer = document.querySelector(".add-new-container .validation-msg");
const addContainerCloseBtn = document.querySelector(".close-add-list");
const addNewContainer = document.querySelector(".add-new-container");
const containersList = document.querySelector(".main-content");
addContainerBtn.addEventListener("click", () => {
    toggleForm(addContainerBtn, addContainerForm, true);
});
addContainerCloseBtn.addEventListener("click", () => {
    toggleForm(addContainerBtn, addContainerForm, false);
});
addContainerForm.addEventListener("submit", createNewContainer);
function createNewContainer(event) {
    event.preventDefault();
    //Validation
    if (addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = "Must be at least 1 character long ";
        return;
    }
    else {
        validationNewContainer.textContent = "";
    }
    const itemsContainer = document.querySelector(".items-container");
    const newContainer = itemsContainer.cloneNode();
    const newContainerContent = `
        <div class="top-container">
          <h2>${addContainerFormInput}</h2>
          <button class="delete-container-btn">X</button>
        </div>
        <ul></ul>
        <button class="add-item-btn">Add an item</button>
        <form autocomplete="off">
          <div class="top-form-container">
            <label for="item">Add a new item</label>
            <button type="button" class="close-form-btn">X</button>
          </div>
          <input type="text" id="item" />
          <span class="validation-msg"></span>
          <button type="submit">Submit</button>
        </form>
  `;
    newContainer.innerHTML = newContainerContent;
    containersList.insertBefore(newContainer, addNewContainer);
    addContainerFormInput.value = "";
    addContainerListners(newContainer);
}
