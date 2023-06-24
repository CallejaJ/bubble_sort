// Dado un array de 10 números aleatorios ordenarlos 
// de menor a mayor devolviendo el mismo array ordenado.

const a = [];
let numElementos = 5;
const MAX_INT = 20;
let j = 0;

for(let i=0; i < numElementos; i++){
    a[i] = Math.floor(Math.random() * MAX_INT);
    console.log(a);
}
do{
    for(let i = 0; i < numElementos - j; i++){
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