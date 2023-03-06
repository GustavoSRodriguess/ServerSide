let vetor = ["a", "b", "a", "a", "c", "b"];
let x = 1;
for (i = 0; i < vetor.length; i++) {
  if ((vetor[i] == vetor[x]) && (x < vetor.length)) 
    console.log("O Elemento " + vetor[i] + " é repetido!");
   x++;
}
