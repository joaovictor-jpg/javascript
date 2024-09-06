const primeiroBi = 8;
const segundoBi = 6.3;
const terceiroBi = 7;
const quartoBi = Number.parseInt("9.3");

let media = (primeiroBi + segundoBi + terceiroBi + quartoBi) / 4;

if (media >= 7) {
    media += media * 0.1;
}

console.log(`A média é: ${media.toFixed(2)}`);