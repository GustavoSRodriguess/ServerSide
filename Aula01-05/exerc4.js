const numeros = [10, 5, 11, 7, 23, 78, 45, 988, 8, 27];

for (i = 0; i < numeros.length; i++) {
  console.log("Multiplicação dos Elementos: " + numeros[i] + " * " + (numeros.length - i) + " = " + numeros[i] * (numeros.length - i));
  console.log("Divisão dos Elementos: " + numeros[i] + " / " + (numeros.length - i) + " = " + numeros[i] / (numeros.length - i));
  console.log("Subtração dos Elementos: " + numeros[i] + " - " + (numeros.length - i) + " = " + (numeros[i] - (numeros.length - i)));
  console.log("Soma dos Elementos: " + numeros[i] + " + " + (numeros.length - i) + " = " + (numeros[i] + (numeros.length - i))+"\n");
}
  