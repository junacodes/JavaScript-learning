// implicit typecasting string
const  result  ="abc" + 2  //string and number
console.log(result);
const resultTwo = "hey"* true //string and boolean
console.log(resultTwo);
const resultThree = "hey" + " " + undefined; //string and  undefined
console.log(resultThree); 
const resultFourth = "hey" + " " + null; // string and null
console.log(resultFourth);

// implicit typecasting number 
const  typeOne = 1 + " " +  "hey" //number and string
console.log(typeOne);
const typeTwo = 2 + true; //number and  boolean
console.log(typeTwo);
const typeThree = 3 + undefined; //number and undefined
console.log(typeThree);
const typeFourth = 4 +  null; //number and  null
console.log(typeFourth);


// implicit typecasting boolean
const  dataOne = "1 " * true //number string and boolean
console.log(dataOne);
const dataTwo = 2 * false //number and boolean
console.log(dataTwo); 

const name  = "Ram";
const numberString = Number(name);
console.log(numberString);




const number = 54321;
const stringNumber = string(number);
console.log(stringNumber);