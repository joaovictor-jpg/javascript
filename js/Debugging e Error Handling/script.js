function validaArray (arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros.");
        if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo Object.");
        if(typeof num !== 'number') throw new TypeError("O numero precisa ser do tipo Number.");
        if(arr.length !== num) throw new RangeError("Tamanho invalido.");
        return arr;
    } catch (e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError.");
            console.log(e.name);
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError.");
            console.log(e.name);
            console.log(e.stack);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError.");
            console.log(e.name);
            console.log(e.stack);
        } else {
            console.log("Tipo de erro não esperado.", e);
        }
    }   
}


console.log(validaArray([1, 2], 2));