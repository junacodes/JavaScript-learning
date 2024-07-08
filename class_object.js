// class Person{
//     constructor(name , age){
//         this.name = name;
//         this.age = age

//     }
//     greet(){
//         console.log(` ${this.name}  ${this.age} old`)
        
    
// }
// let person1 = new Person("john", 25);
// // console.log(person1.name)
// // console.log(person1.age);
// person1.greet();

// class Book  {
//     constructor(title, author, pages){
// this.title = title,
// this.author = author,
// this.pages = pages

// }
// getTitleBook(){
//     console.log(`title : ${this.title},  author: ${this.author}, pages :  ${this.pages} `)
// }

// }
// // let book1 = new book("Alice's Adventures in Wonderland", "Lewis Carroll", 352)
// // // console.log(book1.title);
// // // console.log(book1.author);
// // // console.log(book1.pages);


// class EBook extends Book{
//     constructor(title, author, pages, file_size){
//         super(title, author, pages);
//         this.file_size = file_size;
//     }
//     getTitleBook(){
//         console.log(`title: ${this.title} ,author: ${this.author}, page:${this.pages} File size: ${this.file_size}`)
//     }
// } 
// const book = new Book ("Alice's Adventures in Wonderland", "Lewis Carroll", 352)
// const ebook = new EBook("Alice's Adventures in Wonderland", "Lewis Carroll", 352, 2)
// console.log(book.getTitleBook())
// console.log(ebook.getTitleBook()); 


// Q2
// class Shape {
//     calculatorArea (){
//         return 0;
//     }
// }
// class Circle extends Shape{
//     constructor(radius){
//         super();
//         this.radius = radius;
//     }
//     calculatorArea(){
//         return Math.PI * this.radius ** 2
//     }
// }
// class Rectangle extends Shape{
//     constructor(width,height){
//         super();
//         this.width = width;
//         this.height = height;

//     }
//     calculatorArea(){
//         return this.width * this.height;
//     }

// }
// const circle = new Circle (6);
// console.log(`Area of circle : ${circle.calculatorArea()}`);
// const rectangle = new Rectangle(12 ,35);
// console.log(`Area of rectangle : ${rectangle.calculatorArea()}`)


// class Book {
//     static count = 0 ;
//     constructor (title , author ){
//         this.title = title;
//         this.author = author;
//         Book.count++
//     }
//     static  getBookCount(){
//         return Book.count;
//     }
// }
// const book1 = new Book('1990', 'George Orwell')
// const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');
// console.log(Book.getBookCount());

// Q3
class operation{
    static addNumbers(x, y ){
        return x + y 
    }
    static multiplyNumbers(x ,y){
        return x * y ; 
    }

}
const resultAdd = operation.addNumbers(20, 30);
const resultMultiply = operation.multiplyNumbers(3 , 6);
console.log(resultAdd);
console.log(resultMultiply);

 

// Q4
class Person { 
    #name ;
    #age; 

    constructor(name, age ){
        this.#name = name;
        this.#age = age;

    }
    getName(){
        return this.#name;
    }
setName(name){
    this.#name = name;
}


getAge (){
    return this.#age;
}
setAge(age){
    if(age  > 0 ){
        this.#age = age;
    }else{
        console.log('please enter the valid  age');
    }
}

}


const person1 = new Person("john" , 35);
console.log(person1.getName());
console.log(person1.getAge());
person1.setName ('Alice');
person1.setAge(30);
console.log(person1.getName());
console.log(person1.getAge());

// person1.setAge(-5);
// console.log(person1.getAge());