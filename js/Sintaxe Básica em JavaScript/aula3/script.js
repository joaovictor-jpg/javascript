// VETOR OU ARRAY

//DECLARAÇÃO DE UM ARRAY
let array = ['string', 1, true];
console.log(array);

let array2 = ['string', 1, true, ['array2'], ['arry3'], ['array4'], ['array4']];
console.log(array2[3]);

//foreach
array2.forEach(function(item, index) {console.log(item, index)});

array2.push('novo item');
console.log(array2);

array2.pop();
console.log(array2);

array2.shift();
console.log(array2);

array2.unshift('novo item no início da lista');
console.log(array2);

console.log(array2.indexOf(true));

array2.splice(0, 3);
console.log(array2);

let novoArray = array2.splice(0, 3);
console.log(novoArray);

var obj = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objectInterno: 'object interno' } };

console.log(obj.objectInterno.objectInterno);

var string = obj.string;
console.log(string);

var arrray8 = obj.array;
console.log(arrray8);

var { string, boolean, objectInterno } = obj;
console.log(string, boolean, objectInterno);