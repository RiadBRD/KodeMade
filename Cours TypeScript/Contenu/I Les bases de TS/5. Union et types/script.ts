// Union
let code : string | number;
code = "string"
code = 1

let arr :  (boolean|number)[]
arr = [true,false,999]

const foo = (param:number|string)=> {
    console.log(param);
}

foo("Test")

// Types perso

type mixedNumStr = number | string;

let num :mixedNumStr
num = 10
num = "Foo"

const foo2 = (param:mixedNumStr)=> {
    console.log(param);
}

foo("Test")

type element = {
    x:number;
    y:number;
    id: number | string;
    visible : boolean
}

const button :  element = {
    x:99,
    y:99,
    id:999,
    visible: true 
}