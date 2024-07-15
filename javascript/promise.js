// const goDate = new Promise ((resolve, reject) =>{
//     const dating = true;
//     if(dating) {
//         resolve ("Date is confirmed")
//     }else {
//         reject("Date is not  confirm");
//     } n
// });


// goDate 
// .then((data) =>{
//     console.log(data)
// })
// .catch((reject_data)=>{
//     console.log(reject_data)
// })
 const oddEvenNumber= new Promise((resolve, reject)=>{
    const num = true;
    if(num){
        resolve ("Num is even number")
    }else {
        reject ("Num is odd number")
    }
 })
 oddEvenNumber
 .then((data) => {
    console.log(data)
 })
 .catch((reject_data)=>{
    console.log(reject_data)
 })