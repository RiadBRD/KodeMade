//Type Assertion
// let txt:string
// txt="str"
// Assertion
// const form :HTMLFormElement = document.querySelector('form')!
// console.log(form);
//Type Casting
const form = document.querySelector('form');
const form1 = document.querySelector('.form-container'); //Ca peut etre n'importe quel element qui a cette classe
const input = document.querySelector('input');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.log("SUBMITTED");
}
const paragraphList = document.querySelectorAll('p');
console.log(paragraphList);
window.addEventListener('click', handleClick);
function handleClick(event) {
    console.log(event.clientX, event.clientY);
}
export {};
//# sourceMappingURL=script.js.map