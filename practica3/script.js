function ejercicio4() {
    console.log("4: FizzBuzz");  
    for (let i = 1; i <= n; i++) {   
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
        console.log("Buzz");
        } else {
        console.log(i);
        }
    }
}
function ejercicio5() {
    console.log("5: Números pares");
    let contador = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        contador++;
        }
    }
    console.log("Cantidad de números pares encontrados: " + contador);
}

function ejercicio6() {
    console.log("6: Número primo");
    if (esPrimo(n)) {
        console.log("El número " + n + " es primo");
    } else {
        console.log("El número " + n + " no es primo");
    }
}
function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function ejercicio7() {
    let a = parseInt(prompt("7: ingresa el primer número"));
    let b = parseInt(prompt("7: ingresa el segundo número"));
    if (isNaN(a) || isNaN(b)) {
        console.log("7: número inválido");
    return;
    }
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    console.log("7: Números entre " + a + " y " + b);
    for (let i = a + 1; i < b; i++) {
        console.log(i);
    }
}
function ejercicio8() {
    const texto = prompt("8: ingresa un texto");
    if (texto === null) {
        return;
    }
    console.log("8: Contar vocales");
    console.log("Total de vocales en " + texto + ": " + contarVocales(texto));
}
function contarVocales(texto) {
    const vocales = "aeiou";
    let cantidad = 0;
    texto = texto.toLowerCase();
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            cantidad++;
        }
    }
    return cantidad;
}

function ejercicio9() {
    const numeros = [12, 45, 7, 89, 23, 56, 3];
    console.log("9: Número mayor");
    console.log("Arreglo: " + numeros);
    console.log("El número mayor es: " + encontrarMayor(numeros));
}
function encontrarMayor(arreglo) {
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}
function ejercicio10() {
    const a = parseFloat(prompt("10: ingresa el primer número"));
    const b = parseFloat(prompt("10: ingresa el segundo número"));
    if (isNaN(a) || isNaN(b)) {
        console.log("10: número inválido");
    return;
    }
    const operacion = prompt("Ingresa la operación: suma, resta, multiplicacion o division");
    if (operacion === null) {
        return;
    }
    console.log("--- Ejercicio 10: Calculadora");

    const op = operacion.toLowerCase().trim();
    if (op === "suma") {
        console.log(a + " + " + b + " = " + sumar(a, b));
    } else if (op === "resta") {
        console.log(a + " - " + b + " = " + restar(a, b));
    } else if (op === "multiplicacion" || op === "multiplicación") {
        console.log(a + " * " + b + " = " + multiplicar(a, b));
    } else if (op === "division" || op === "división") {
        if (b === 0) {
            console.log("Error: no se puede dividir entre cero");
    } else {
        console.log(a + " / " + b + " = " + dividir(a, b));
    }
    } else {
        console.log("Operación no válida");
    }
}
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}
ejercicio4();
ejercicio5();
ejercicio6();
ejercicio7();
ejercicio8();
ejercicio9();
ejercicio10();