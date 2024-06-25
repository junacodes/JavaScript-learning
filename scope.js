// const multiply = (x, y ) => {
//     return (x*y);
// }
// let multiResult = multiply(30, 7);
// console.log(multiResult);


// // constructor function
// function Person (){
//     this.name = "John",
//     this.age = 23;
// }
// const person = new Person();
// console.log(person.name);
// console.log(person.age);

// Q1
function add (a , b ){
    return a + b ;

}
const num = 20;
const num2 = 60;
const addResult = add(num , num2);
console.log(addResult);

// Q2
let s = [2 , 3 , 4 ,5];
function arr(){
    let f = s.slice(0, 1);
    let l = s.slice(-1);
    console.log(f)
    console.log(l);
}
arr();

function Person(){
    this.name = "John";
    this.age = 23;
    this.place = "New York";

}
const person = new Person()
console.log(person.name);
console.log(person.age);
console.log(person.place);