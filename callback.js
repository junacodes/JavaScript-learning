function operation(a,  b , add , subtract , mul ){
    add(a, b),
    subtract(a, b),
    mul(a,b)
}
function add(a, b ){
    console.log(a + b );
}
function subtract(a, b){
    console.log(a - b);
}
function mul(a, b ){
    console.log(a * b)

}
function dived(a, b){
    console.log(a / b);
}
operation(10 , 30 , add,  subtract , mul, dived);


// Q1
// const button = document.getElementById('button');
// function callback(){
// console.log("Hello world");
// }

// button.addEventListener('click',callback);

// q2
const numbers = [1, 2 ,3 , 4 , 5];
numbers.forEach(function(number){
    console.log(number);
})

// Q3 filter method to create a new array with elements greater than `10

function customFilter ( callback , arrayNumber){
    let filterArray = [];
    for (let i = 0 ; i < arrayNumber.length; i++ ){
        if (callback(arrayNumber[i])){
            filterArray.push(arrayNumber[i]);

        }
    }return filterArray;
}
function isEven(num ){
    return num% 2 === 0 ;

}
let filterNumber= [1, 2 ,3 ,4 ,5 , 6, 7, 8 , 9 , 10 ]
let filterArray = customFilter(isEven, filterNumber);
console.log(filterArray);

// Q4 use the map method to create new array with element squared 
const mapArray = [1 , 3 , 4 , 5];
const squares = mapArray.map(function(arrayMap){
    return arrayMap * arrayMap
})
console.log(squares);

// Q5 setTimeout to log message 
setTimeout(function(){
    console.log('Hello after 10 seconds');
}, 2000)

// Q6
const apiData = {
    id : 1,
   name :"Alice Doe",
   age : 30,
   email: "AliceDoe@gmail.com"
};
function fetchDataFromAPI(callback){
    setTimeout(() =>{
        callback(apiData);
    }, 1000);

}
fetchDataFromAPI((data) =>{
    console.log("Fetched data:", data)
})

// Q7 sort criteria
function sortByCriteria (arr, callback){
    const newArray = arr.slice()
    newArray.sort(callback);
    return newArray;
}
const people = [
    {name : "Alice", age:30},
    {name : "Bob", age :29},
    {name : "charlie", age :45},
]
function sortByName (a , b ){
    if(a.name < b.name ) return -1;
    if(a.name > b.name)return 1
    return 0;
}

function sortByAge(a, b ){
    return a.age - b.age
}
console.log(sortByCriteria(people, sortByName));
console.log(sortByCriteria(people,sortByAge ))


// Q8
function myMap(myArray,callback){
    let result =[]
    for (let i = 0; i < myArray.length; i++) {
        // Apply the callback function to each element and add the result to the result array
        result.push(callback(myArray[i], i, myArray));

     }
      return result;
}
function square(x){
    return x*x ;

}

let rate = [1 , 3 ,5, 7, 9 ,11];
let squaredNumbers =myMap(rate, square);
console.log(squaredNumbers)
