// let n = 5;
// star = ""
// for(let i = 1; i<=n; i++){
//     for(let j = 1 ; j <=i; i++){
//         star += "*"
//     }
//   star = "\n"
// }
// console.log(star)

let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= 5; num++) {
//       // print star only if it is the boundary location
//       if (n == 1 || n == rows) 
//         {pattern += "*"

//       }
//       else {
//          if (num == 1 || num == 5) {
//             pattern += "*";
//          } else {
//             pattern += " ";
//          }
//       }
//    }
//    pattern += "\n";
// }
// console.log(pattern);

// let n = 5 ;
// pattern = "";
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i === 0 || i === 4) {
//         if (j === 0 || j === 4) {
//           pattern += '* ';
//         } else {
//           pattern += '';
//         }

//     }
//     pattern += "\n"
//     }

// }
// console.log(pattern);



//     let pattern = '';
//     for (let i = 0; i < 5; i++) {
//       for (let j = 0; j < 5; j++) {
//         if (i === 0 || i === 4) {
//           if (j === 0 || j === 4) {
//             pattern += '* ';
//           } else {
//             pattern += '';
//           }
//         } else if (j === 0 || j === 4) {
//           pattern += '* ';
//         } else if (i === 2) {
//           pattern += '* ';
//         } else {
//           pattern += '';
//         }
//       }
//       pattern += '\n';
//     }
    
  
//   console.log(pattern);
  

// Number triangle 
// let n = 5 ;
// let num = '';
// for (i=1; i<=n; i++){
//     for(j =1; j<= i; j++){
//         num += j;
//     }
//     num += "\n"
// }
// console.log(num)

// // repeated number triangle
// let n = 5 ;
// let num = '';
// for (i=1; i<=n; i++){
//     for(j =1; j<= i; j++){
//         num += i;
//     }
//     num += "\n"
// }
// console.log(num)

// inverted number tri
// let n = 5 ;
// let num = '';
// for (i=n; i>=1 ; i--){
//     for(j =1; j<= i; j++){
//         num += j;
//     }
//     num += "\n"
// }
// console.log(num)


// inverted num ladder
// let n = 5
// let pattern = '';
//     for (let i = n; i >= 1; i--) {
//       for (let j = 1; j <= i; j--) {
//         pattern += j + " ";
//       }
//       pattern += '\n';
//     }
    
// console.log(pattern);
  
// square number
// let n = 5
// let pattern = '';
//     for (let i = n; i >= 1; i--) {
//       for (let j = 1; j <= n; j++) {
//         pattern += j ;
//       }
//       pattern += '\n';
//     }
    
// console.log(pattern);
  
//right-aligned triangle
// let n =  5;
// let row = "";
// for (let i = 1; i <= n; i++) {
//    row = '';
//   for (let j = 1; j <= n - i; j++) {
//     row += ' ';
//   }
//   for (let k = 1; k <= i; k++) {
//     row += '*';
//   }
//   console.log(row);
// }



// Alphabet triangle
let n = 5;
let out = '';
let chars = ['A', 'B', 'C', 'D', 'E'];
for(i=1; i<=n; i++) {
  for (j=1; j<=i; j++) {
    out += chars[j-1];
  }
  out += '\n';
}
console.log(out);
