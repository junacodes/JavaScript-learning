const goDates = new Promise((resolved, reject)=>{
const dating = 10;
setTimeout(() => {
    if(dating){
        resolved("dating is confirmed")
    }else{
        reject("dating is not confirmed")
    }
    
}, 5000);
})


async function date(){
    try{
        const result  = await goDates;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
date();



function time(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sumNumber(numbers){
    let totalSum = 0;
    for(const number of numbers){
        await time(2000);
        totalSum += number;
    }
    return totalSum;
}

(async () =>{
    const numbers = [1 , 3 , 5 , 7 ];
    const sum = await sumNumber(numbers);
    console.log(`total sum: ${sum}`);
})
();