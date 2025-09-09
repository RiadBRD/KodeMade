const itemsContainer = document.querySelectorAll(
  ".items-container"
) as NodeListOf<HTMLDivElement>;

let actualContainer: HTMLDivElement,
  actualBtn: HTMLButtonElement,
  actualUL: HTMLUListElement,
  actualForm: HTMLFormElement,
  actualTextInput: HTMLInputElement,
  actualValidation: HTMLSpanElement;

function addContainerListners(currentContainer: HTMLDivElement) {
  const currentCloseFormBtn = currentContainer.querySelector(
    ".close-form-btn"
  ) as HTMLButtonElement;

  const currentContainerDeletionBtn = currentContainer.querySelector(
    ".delete-container-btn"
  ) as HTMLButtonElement;

  const currentAddItemBtn = currentContainer.querySelector(
    ".add-item-btn"
  ) as HTMLButtonElement;

  const currentForm = currentContainer.querySelector('form') as HTMLFormElement

  deleteBtnListeners(currentContainerDeletionBtn);
  addItemBtnListeners(currentAddItemBtn);
  closingFormBtnListeners(currentCloseFormBtn);
  addFormSubmitListeners(currentForm);
}

itemsContainer.forEach((container: HTMLDivElement) => {
  addContainerListners(container);
});

function addItemBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener("click", handleAddItem);
}

function deleteBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener("click", handleContainerDeletion);
}

function closingFormBtnListeners(btn:HTMLButtonElement){
  btn.addEventListener("click",() => toggleForm(actualBtn,actualForm,false))
}

function addFormSubmitListeners(form:HTMLFormElement){
  form.addEventListener("submit",createNewItem)
}

function handleAddItem(event: MouseEvent) {
  const btn = event.target as HTMLButtonElement;
  if (actualContainer) toggleForm(actualBtn, actualForm, false);

  setContainerItems(btn);
  toggleForm(actualBtn, actualForm, true);
}

function setContainerItems(btn: HTMLButtonElement) {
  actualBtn = btn;
  actualContainer = btn.parentElement as HTMLDivElement;
  actualUL = actualContainer.querySelector("ul") as HTMLUListElement;
  actualTextInput = actualContainer.querySelector("input") as HTMLInputElement;
  actualForm = actualContainer.querySelector("form") as HTMLFormElement;
  actualValidation = actualContainer.querySelector(
    ".validation-msg"
  ) as HTMLSpanElement;
}

function toggleForm(
  btn: HTMLButtonElement,
  form: HTMLFormElement,
  action: Boolean
) {
  if (!action) {
    form.style.display = "none";
    btn.style.display = "block";
  } else if (action) {
    form.style.display = "block";
    btn.style.display = "none";
  }
}

function handleContainerDeletion(event: MouseEvent) {
  const btn = event.target as HTMLButtonElement;
  const btnArray = [
    ...document.querySelectorAll(".delete-container-btn"),
  ] as HTMLButtonElement[];
  const containers = [
    ...document.querySelectorAll(".items-container"),
  ] as HTMLDivElement[];
  containers[btnArray.indexOf(btn)]?.remove();
}


function createNewItem(event:Event){
  
}
