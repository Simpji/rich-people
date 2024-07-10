// let firstName = "Nonso"
// let lastName = "Simple"
// let age = 30
// let isMale = true

// console.log(`i'm ${firstName} ${lastName} ${age} ${isMale}`);
// console.log(name = "nonso", age = 30, isMale = true);

// Variable and DataType
//let var const

// let firstName = "Nonso"
// firstName = "Simple"
// console.log(firstName);

//string boolean number null undefined

let val;

let firstName = "Simple, am, learning, javascript";//string
let lastName = "Nonso"
let age = 25;
let isMale = true
//property
val = firstName.length
//methods
val = firstName.toLowerCase();
val = firstName.charAt(3)
val = firstName.indexOf("p")
val = firstName.split(",")
val = firstName.replace("Simple", "Williams")
val = firstName.substring(0, 4)
val = firstName.toUpperCase().charAt(3)
// console.log(val);

// let html = `
//       <ul>`+`<li> Simple is learning javascript`+`</li>`+`</ul>
// `

// let html = `
//    <ul>
//      <li>Name:${firstName}</li>
//      <li>Last:${lastName}</li>
//      <li>Age:25</li>
//      <li>is-Male: true</li>
//    </ul>
// `
// document.body.innerHTML=html

//Array

let array = ["coding", "cars", "sleeping", "working"]

array.push("simple")
array.unshift("williams")
array.pop()
array.shift()
array.splice(1,2)
console.log(array[2]);
console.log(array.length);
console.log(array);

let me = Array.isArray(array)
console.log(me);

const persons = {
    firstName: "simple",
    lastName: "Williams",
    age: 25,
    Hobbies:["cooking", "eating", "calling"],
    address:{
        state: "lagos",
        city: "ikeja"
    }
}

// console.log(persons.address.city);

// let tasks = [
//     {
//         id: 1,
//         task: "html",
//         is_complete: true,
//     },
//     {
//         id: 2,
//         task: "css",
//         is_complete: true,
//     },
//     {
//         id: 3,
//         task: "bootstrap",
//         is_complete: true,
//     },
//     {
//         id: 4,
//         task: "javascript",
//         is_complete: false,
//     },
// ]

// tasks.unshift({id:4, task: "javascript", is_complete:true})

// console.log(tasks)


//Learning Loop 
//A loop is a programming construct that allows you to repeatedly execute a block of code as long as a specified condition is true.

//For Loop, a for loop is a control flow statement, it consists of three optional parts.  initialization, condition, and increment
//for(initialization; condition, increment/decrement)
// for(i = 0; i < 10; i++){
//     console.log(i);
// }
//While loop, is another type of control flow statement
// let i =0
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// let cars = ["Toyata", "Volvo", "Benz", "Ferrari"]
// console.log(cars);

// for(let i = 0; i < cars.length; i++){
//     console.log(i);
//     console.log(cars[i]);
// }

//for of loop
// for(let car of cars){
//     console.log(car);
// }


let tasks = [
    {
        id: 1,
        task: "html",
        is_complete: true,
    },
    {
        id: 2,
        task: "css",
        is_complete: true,
    },
    {
        id: 3,
        task: "bootstrap",
        is_complete: true,
    },
    {
        id: 4,
        task: "javascript",
        is_complete: false,
    },
]
tasks.unshift({id:6, task:"react", is_complete: false})
tasks.push({id:7, task:"node", is_complete: false})

// for(let item =0; item < tasks.length; item++){
//     console.log(item);
//     console.log(tasks[item]);
// }

// for(let task of tasks){
//     console.log(task);
//     // console.log(tasks[0].task);
// }

// for ... each
// tasks.forEach(function(task){
//     console.log(task);
//     //  console.log(tasks[0].task);
// })

// Map
// const rest = tasks.map(function(task){
//     return task;
// })

// console.log(rest);

//Filter
const rests = tasks.filter(function(task){
    return task.is_complete !== true;
}).map(function(task){
    return task.task
})
console.log(rests);

//IF statement
let i = 100

// if (i >= 100) {
//     console.log("Hello")
// }
//IF ... ELSE
// if (i === 10) {
//     console.log(`${i} is not 100`);
// }else{
//     console.log(`${i} is 100`);
// }
//IF ELSE IF

// if (i === 100) {
//    console.log(`${i} is 100`); 
// }else if(i === 50){
//     console.log(`${i} is 50`);
// }else{
//     console.log("no number found");
// }

// let grad = prompt('Enter Grade')
let grade = 100

if (grade > 59 || grade === 100) {
    console.log("Excellent")
}else if (grade > 30 || grade === 60){
    console.log("pass")
}else{
    console.log("failed")
}

// const x = 10;
// console.log(x === 10? 'Hello': 'Hi');

// let color = "yellow"
// switch(color){
//     case 'red':
//     console.log(`${color} is red`);
//     break
//     case 'blue':
//         console.log(`${color} is blue`);
//         break
//         case 'yellow':
//             console.log(`${color} is yellow`);
//             break
//         default:
//             console.log(`${color} is not blue or red`);
      
// }
const color = ()=>{
    switch ('yellow') {
        case 'red':
            return ('Color is red');
            break
            case 'yellow':
            return ('Color is yellow');
            break
            case 'blue':
                return ('Color is blue');
                break
                default:
                    return ('no color found');
    }
}
console.log(color());

// let todays = prompt('Enter Grade')

const today = ()=>{
switch('friday'){
    case 'monday':
        return ('Today is monday');
        break
    case 'sunday':
        return ('TOday is sunday');
        break
    case 'tuesday':
        return ('Today is tuesday');
        break
    case 'wednesday':
        return ('Today is wednesday');
         break
    case 'thursday':
         return ('Today is thursday');
         break
    case 'friday':
         return ('Today is friday');
         break
    case 'saturday':
         return ('Today is saturday');
         break
    default:
        return ('Today is not found');
    }  
}
console.log(today());

//Function
// function call (){
//     console.log("pick call");
// }
// call()
//Function with argument and parameter
function call(name, person){
    console.log(`${name} is calling ${person} and she is not picking her call since morning`);
}
call('Williams', 'sandra')

// const calculate = (Num1, Num2) =>{
//     return Num1 + Num2
// }
// console.log(calculate(7, 8));

// const calculate = (Num1 =10, Num2 =7) =>{
//     return Num1 + Num2
// }
// console.log(calculate());
const calculate = (Num1 =10, Num2 =7) =>{
    return Num1 + Num2
}
console.log(calculate(2,2));
const add = (num1, num2) =>{
    return num1 + num2;
}
console.log(add(4,5));

// let val;
// let firstName = "simple";

// val = firstName.charAt(3).toUpperCase()
// console.log(val);

// const person = {
//     name: "Simple Williams",
//     age: 24,
//     Hobbies: ["Cooking", "Seeping", "Coding"],
//     address:{
//         state: "lagos",
//         city: "ikeja"
//     }
// }
// console.log(person);
// console.log(person.Hobbies[1]);
// console.log(person.address);


// console.log(tasks[1].task);

// if (grade === 100) {
//     console.log ("Excellent")
// }else if(grade === 80){
//     console.log ("Very Good")
// }else if(grade === 70){
//     console.log ("Good")
// }else if(grade === 60){
//     console.log ("Pass")
// }else{
//     console.log ("Failed")
// }

