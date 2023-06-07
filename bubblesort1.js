
let a = [4, 3, 12, 1, 8, 9];
let j = 0; 

do {
  for (let i = 0; i < a.length - j; i++) {
    
    if (a[i] > a[i + 1]) {
      let aux; // es una caja vacía
      aux = a[i]; // la caja vacía toma el valor de i (el que está a la izquierda del igual es el que recibe el valor de la derecha)
      a[i] = a[i + 1]; // i toma el valor de i+1
      a[i + 1] = aux; // i+1 toma el valor de la caja con el valor de i
    } // cierre del bucle if

    console.log(a)

  } // cierre del bucle for
  j++
  console.log("-----")
} while (j < a.length);

console.log(a);
