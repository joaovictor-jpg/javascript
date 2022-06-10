var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

function par(arr) {
    let numerosPares = [];
    for (let i = 0; i < arr.length ; i++){
        if (     arr[i] % 2 == 0    ){
            numerosPares.push(arr[i]);
         }          
    }
    return numerosPares;
}

console.log(par(array));

console.log(array.length);