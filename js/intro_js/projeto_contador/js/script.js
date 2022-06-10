var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
document.getElementById('subtrair').addEventListener('click', decrement);
document.getElementById('adicionar').addEventListener('click', increment);

function increment() {
    if(currentNumber >= 10) {
       // var remove = currentNumberWrapper.attributes.removeNamedItem('onclick');
        currentNumberWrapper.attributes.removeNamedItem('onclick');
        console.log("Botão de devrementação incremento");
    }
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    if(currentNumber <= 0) {
        // var remove = currentNumberWrapper.attributes.removeNamedItem('onclick');
         currentNumberWrapper.attributes.removeNamedItem('onclick');
         console.log("Botão de devrementação dessativado");
    }
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}