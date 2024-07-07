const multiply = (x, y ) => {
    return (x*y);
}
let multiResult = multiply(30, 7);
console.log(multiResult);


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
// let s = [2 , 3 , 4 ,5];
// // function arr(){
// //     let f = s.slice(0, 1);
// //     let l = s.slice(-1);
// //     console.log(f)
// //     console.log(l);
// //
// // arr();
// Q3
function Person( name, age , place){
    this.name = name;
    this.age = age;
    this.place = place;

}
const person = new Person("john", 23 , "Kathmandu")
console.log(person.name);
console.log(person.age);
console.log(person.place);

// Q4
function strFunction(str){
    return str.toUpperCase()
}
console.log(strFunction("hello"));
console.log(strFunction("june"));

// Q6
let myArr = [1, 3 , 4, 35 , 50];
function myList(){
    return(myArr.slice(-1));
}
const lastElement = myList(myArr);
console.log(lastElement);

// Q7
let book= {
   title :"Alice's Adventures in Wonderland",
    author : "Lewis Carroll",
    publisher : "Macmillan",
    length : 352 ,
    year : 1865,
    getBookTitle: function(){
        console.log(`${ book.title} was written by ${ book.author}in ${ book.publisher}with ${ book.length} pages  at ${ book.year}`)

    }
};
book.getBookTitle();

    


  

