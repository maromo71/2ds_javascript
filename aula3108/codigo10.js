var maior  = 0
var vetor = [3, 5, 7, 9, 11, 2, 3, 6, 12, 7, 9]
for(let i=0; i<=vetor.length; i++){
    if(maior < vetor[i]) maior = vetor[i]
}
console.log(maior)