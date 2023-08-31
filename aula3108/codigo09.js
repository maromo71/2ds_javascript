//fibbonacci da 12a posicao ---> 144

var pri = 1
var seg = 1
var ter = 0
for(let i =3; i<=12; i++){
    ter = pri + seg
    pri = seg
    seg = ter
}
console.log(ter)