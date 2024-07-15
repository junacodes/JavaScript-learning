// // // push methods
// // let fruits = ['apple' , 'banana'];
// // fruits.push('orange', 'grape');

// // // pop method
// // let fruitsName= ['apple', 'banana', 'orange' ]
// // let removedFruit = fruitsName.pop();


// // unshift method

// let car  = ['honda', 'Toyota' ]
// car.unshift('Tesla', 'Ford');
// console.log(car)

// // shift method

// let number = [1 ,3, 5 , 6 , 7 ,9];
// let removedNumbers = number.shift();
// console.log(removedNumbers);

// // slice method
// let  numbers = [1 , 2, 3, 4]
// let slicedNumbers = numbers.slice(1, 3)
// console.log(slicedNumbers)

// // splice method 
// let mobiles = ['samsung', 'Apple', 'Nokia', 'Xiaomi' ];
//  mobiles.splice( 2, 1, 'Sony', 'Huawei');
//  console.log(mobiles)
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // // At position 2, add "Lemon" and "Kiwi":
// // fruits.splice(2, 0, "Lemon", "Kiwi");
// // console.log(fruits)

//split method
let  someSentence = ' Hello this is me';
let words = someSentence.split('');
console.log(words)


// // find method
// const arr = [1 , 2 ,3 ,4 ,5 ,6 ,7, 8 ,9 ,10];
// const numbers = arr.find(num => num > 5);
// console.log(numbers);

// // filter method
// const filterNumbers =  arr.filter(num => num > 5)
// console.log(filterNumbers);


// // map methods
// const result = arr.map((num) => num / 5);
// console.log(result);


const array = [10 , 30 , 40 , 50];
const numbers = array.find((item) => item > 30 );
console.log(numbers);

// const arr = [1 ,2 ,3];
// const newArr = [4 ,5 ,6, arr[0],arr[1], arr[2] ]
// console.log(newArr);
const arr = [1 , 2 , 3 ,4 , 5 ]
// const first  = arr[0];
// const rest = arr.slice(2);
// console.log(rest); 
const [a,b,...rest] = arr;
console.log(a);
console.log(b);
// console.log(rest);

function add(...numbers){
    return numbers.reduce((sum, num)=>{
        sum = num + sum;
    },0)

}
console.log(add(1, 2 , 3));
console.log(add(4, 5, 6, 7));

