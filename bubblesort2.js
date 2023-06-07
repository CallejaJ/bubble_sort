// Dado un array de 1000 números aleatorios ordenarlos 
// de menor a mayor devolviendo el mismo array ordenado.

const a = [];
let numElementos = 10;
const MAX_INT = 20;
// Esta constante establece el límite de numeros enteros.
// Math.random() para obtener un número aleatorio entre 0 y 0,99999999
// al multiplicarlo por la longitud de numElementos
// obtenemos un número entre 0 y 9,999999999
// Math.floor le quita la parte decimal
// para Math.floor(4.99999999) devuelve 4.


let j = 0;

do{
    for(let i = 0; i < numElementos - j; i++){
    a[i] = Math.floor(Math.random() * MAX_INT);
    if(a[i] > a[i+1]){
        let aux;
        aux = a[i];
        a[i] = a[i+1];
        a[i+1] = aux;
        }
        console.log(a);
    }
        j++
        console.log("-----");
}while(j < a.length);