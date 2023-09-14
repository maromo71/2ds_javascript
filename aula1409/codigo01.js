function fatorial_c(n){
    var f=1;
    for (var i = 1; i <=n; i++) {
        f*= i;
    }
    console.log(i);
    return f;
}
function fatorial_r(n){
    if(n===0 || n===1){
        return 1;
    }
    return n * fatorial_r(n - 1);
}
console.log(fatorial_c(5));
console.log(fatorial_r(5));