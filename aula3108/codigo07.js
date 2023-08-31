//media de uma lista de numeros
var numeros = [10, 8, 10, 9, 6]
var media = 0
for(let i = 0; i<5; i++){
    media += numeros[i]
}
media /= 5
console.log(media)