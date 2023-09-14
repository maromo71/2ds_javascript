function calcularIdade(){
    let idade = 38;

    function exibeIdade(){
        console.log(idade);//ok
    }

    exibeIdade();
}
console.log(idade);//erro 
console.log("chamando o cacular idade");
calcularIdade();