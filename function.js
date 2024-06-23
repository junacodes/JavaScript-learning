// function add(){  
//     var a = 10;
//     var b = 20;
//     var c= a+b;
//     console.log(c);
// }
// add();

// function sum(a, b){
//     let add = a + b ; 
//     console.log (add);
// }
// sum( 30, 30);
// sum(b= 30 , a = 20)


// function sub(x , y ){
//     let subtract = x-y;
//     return  subtract;
// }
// const result = sub(30, 20)
// console.log(result);
// console.log(result);

// function multi(a, b ){
//     let multiples = a*b
//     // console.log(multiples);
//     return multiples
// }
// const result = multi(40 , 20);
// console.log(result)

// function greet(name){
//     return `hello ${name}, how are you?`
// }
// let greetAlice = greet("Alice");
// console.log(greetAlice);

// Q2
function calculateAverage(arr){
    let  multi = 1 ;
    for (let i = 1; i < arr.length; i++){
        multi *= arr[i];
    }
    return multi / 2;
}

const num1 = [ 10, 30, 1, 3, 2 ]
const averageResult = calculateAverage(num1);
console.log(averageResult);

// Q3
// const num2 = 3; 
// function oddEven(n){
//     if(n % 2 === 0){
//         console.log(`${n} is even number `)
//     }else{
//         console.log( `${n} is odd number`)
//     }
// }
// const num = oddEven(num2);
// console.log(num);

// // Q4 
// function reverseString(str){
// let strRev = "";
// for(let i = str.length - 1; i >= 0; i--){
//     strRev += str[i]
// }   
// console.log(strRev);
// }
// reverseString("Alice")
// reverseString("John")
// reverseString("javascript");

// Q5
// function maxNumber(numbers){
//     for (let i = 1;i < numbers.length; i++){
//         if(numbers(i) > max ){
//             max = numbers[i]
//         }
//     }
// }
// let numbers = [3, 7 , 2 , 8 , 5];
// let max  = numbers[3];
// console.log(max);

// // Q6
// function celsiusToFahrenheit(n){
//     return((n *9.0 / 5.0) + 32.0);
// }
// let n = 30;
// console.log(celsiusToFahrenheit(n));

// //Q7 
// function randomNumber(min, max){
//     return Math.random() * (max - min ) + min; 
// }
// console.log('Random Number between 1 and 5 : ');
// console.log(randomNumber(1, 5));


// // Q8
// function checkPalindrome(string) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string = "madam";
// const value = checkPalindrome(string);
// console.log(value);

// // Q9
// function capitalizeForLetter(){
//     let string = "hello world";
//     console.log(string[0].toUpperCase() +
//     string.slice(1))
// }
// capitalizeForLetter();

// // Q10
// function factorial(n){
// if (n === 0 )return 1;
// return n *factorial(n-1);
// }
// let num = 5
// console.log(`Factorial of   ${num} is  `+ factorial(num));


// // Q11
// function countCurrences(arr , target) {
//     return arr.reduce ((count , current) =>{
//         return current === target ? count + 1 :count;
//     }, 0);
    
// }
// const arr = [2 , 3 , 4 , 5 ,6, 7 , 8];
// const target = 2;
// console.log(countCurrences (arr, target))


// Q12

// function isLeapYear(year){
//     return year % 4 === 0 && (year % 100!== 0 || year% 400 ===0);
// }
// console.log(isLeapYear(2024));

// Q13
// function mergeAndSort( arr1, arr2){
//     return [ ...arr1, ...arr2] .sort((a,b)=> a-b);
// }
// const arr1 = [5, 7, 8]
// const arr2 = [1, 2, 3 , 4 , 6]
// console.log(mergeAndSort(arr1, arr2));


// Q14 
// function integerToRoman(num) {
//     const values = 
//         [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     const symbols = 
//         ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//     let roman = '';
//     for (let i = 0; i < values.length; i++) {
//         while (num >= values[i]) {
//             roman += symbols[i];
//             num -= values[i];
//         }
//     }
    
//     return roman;
// }

//  console.log(integerToRoman(58));
//   console.log(integerToRoman(1994));

//   Q15
function smallNumber(arr){
    arr.sort((a , b )=> a-b);
    return arr[1];

}
const num = [5, 2, 8, 3, 1, 7];
console.log(smallNumber(num));

// // Q16
// function area(r){
//     return Math.PI * r ** 2
// }
// console.log(area(0));
// console.log(area(1));
// console.log(area(5));
// console.log(area(10));

// Q17
function truncateString(str, maxLength){
    if (str.length > maxLength){
        return str.substring(0, maxLength) + "...";
    }else{
        return str; 
    }
}
let str = "This is long string that needs to be truncated";
let maxLength = 10;
let truncatedStr = truncateString(str, maxLength);
console.log(truncatedStr);

// Q18
function onlyDigit(string){
    for ( let i = string.length- 1; i >=0; i--){
        const d = s.charCodeAt(i);
        if(d < 48 || d > 57) return false
             
        }
return true;
    }
// Q19
    // let arr = [30, 0 , "hdf", false, true, NaN, 11, "hi", undefined, [], ""];
    // function removeFalse(arr){
    //     return arr.filter(Boolean);
    
    // }
    // console.log(removeFalse(arr));
    
    // Q20
    function getUniqArray(arr) {
        let mySet = new Set(arr);
        return Array.from(mySet);
    }
    let myArray = ['BANANA', 'APPLE', 'BANANA', 'MANGO' , 'APPLE', 'LITCHI', "MANGO"];
    let mytUniqArray = getUniqArray(myArray);
    console.log(mytUniqArray)


