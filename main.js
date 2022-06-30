// declaración de variables
let numero = 0;
let fibonacciSec = [];
fibonacciSec[0] = 0;
fibonacciSec[1] = 1;

// secuencia para ingresar numeros segun condición menor a 100
do{
    numero = parseInt(prompt("Ingrese un número entero menor a 100:"));
    console.log(`Ingresaste el número: ${numero}`);
} while ((numero > 100) || (numero < 1) || (isNaN(numero)));

// sucesión de Fibonacci
for (let i = 2; i < numero; i++) {
    fibonacciSec[i] = fibonacciSec[i - 2] + fibonacciSec[i - 1];
}

// salida de datos por web y consola (N° ingresado y sucesión de Fibonacci del mismo)
document.write(`Ingresaste el número: ${numero}` + '<br/>');
document.write(`Tu secuencia de Fibonacci es: ${fibonacciSec}` + '<br/>');
console.log(`Tu secuencia de Fibonacci es: ${fibonacciSec}`);
