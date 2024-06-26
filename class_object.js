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

class Book  {
    constructor(title, author, pages){
this.title = title,
this.author = author,
this.pages = pages

}
getTitleBook(){
    console.log(`title : ${this.title},  author: ${this.author}, pages :  ${this.pages} `)
}

}
// let book1 = new book("Alice's Adventures in Wonderland", "Lewis Carroll", 352)
// // console.log(book1.title);
// // console.log(book1.author);
// // console.log(book1.pages);


class EBook extends Book{
    constructor(title, author, pages, file_size){
        super(title, author, pages);
        this.file_size = file_size;
    }
    getTitleBook(){
        console.log(`title: ${this.title} ,author: ${this.author}, page:${this.pages} File size: ${this.file_size}`)
    }
} 
const book = new Book ("Alice's Adventures in Wonderland", "Lewis Carroll", 352)
const ebook = new EBook("Alice's Adventures in Wonderland", "Lewis Carroll", 352, 2)
console.log(book.getTitleBook())
console.log(ebook.getTitleBook()); 
