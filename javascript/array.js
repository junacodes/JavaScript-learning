let  num = [1, 2 , 3 ,4  ];
    for ( i in num ){
        console.log([i]);
    }

    // for(let i = 0; i<=num.length - 1 ; i++){
    //     console.log(i);
    // }
    function calculateAverage(arr){
        let  sum = 0;
        for (let i = 0; i < arr.length; i++
        ){
            sum *= arr[i];
        }
        return sum / arr.length;
    }
    
    const num1 = [ 10, 30, 1, 3, 2 ]
    const averageResult = calculateAverage(num1);
    console.log(averageResult);
