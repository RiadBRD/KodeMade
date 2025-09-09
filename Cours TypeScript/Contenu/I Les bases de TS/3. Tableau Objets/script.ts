const fruits = ["fraise", "pomme"];
fruits.push("cerise");
console.log(fruits);

const mixedArray = [1, "txt", [1, 2, 3]];
mixedArray.push(10);
console.log(mixedArray);

let nums: number[];
nums = [1, 2, 3];

let nums2: number[] = [];
nums2.push(2);

let random : any[];
random = [true,12,"Foo"];


const car = {
    name:"Audi",
    model:"A1",
    km:7000
}

console.log(car.name);

let profile : {
    name:string,
    age:number
    hobbies:any []
}

profile = {
    name:"Riad",
    age : 27,
    hobbies :["Foot",10]
}

console.log(profile)

let user : {
    name : string,
    age : number,
    favFood : string[],
    data:any
} = {
    name : "John Doe",
    age : 16,
    favFood : ["Pizza","Grec"],
    data : 50
}