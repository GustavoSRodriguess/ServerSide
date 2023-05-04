const numeros = [10, 5, 11, 7, 23, 78, 45, 988, 8, 27];

for (i = 0; i < numeros.length; i++) {
  let divisor = 2;
  while (numeros[i] % divisor != 0) {
    divisor++;
    if (numeros[i] == divisor)
      console.log("Numero " + numeros[i] + " é Primo ")
   }  
}
