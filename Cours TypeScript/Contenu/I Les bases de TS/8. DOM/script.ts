//Type Assertion
// let txt:string
// txt="str"


// Assertion
// const form :HTMLFormElement = document.querySelector('form')!
// console.log(form);

//Type Casting
const form  = document.querySelector('form') as HTMLFormElement
const form1 = document.querySelector('.form-container'); //Ca peut etre n'importe quel element qui a cette classe
const input = document.querySelector('input') as HTMLInputElement


form.addEventListener('submit',handleSubmit)

function handleSubmit(event:Event){
    event.preventDefault();
    console.log("SUBMITTED");
}

const paragraphList = document.querySelectorAll('p');
console.log(paragraphList);
window.addEventListener('click',handleClick)

function handleClick(event : MouseEvent){
  console.log(event.clientX , event.clientY);
}




