const vetor = ["a", "b", "a", "a", "c", "b"]

const encontrarDuplicado = vetor => vetor.filter((elemto, idx) => vetor.indexOf(elemto) !== idx)
console.log(encontrarDuplicado(vetor))