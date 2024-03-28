var valorEnDolar = 80;

var cotizacionEnPesos = 16.895;

var valorEnPesos = valorEnDolar * cotizacionEnPesos;

valorEnPesos = valorEnPesos.toFixed(2);
console.log("El valor de " + valorEnDolar + " dólares en pesos es: $" + valorEnPesos);


alert("$" + valorEnPesos);
